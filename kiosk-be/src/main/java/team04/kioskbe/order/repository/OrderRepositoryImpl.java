package team04.kioskbe.order.repository;

import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import team04.kioskbe.order.domain.Order;
import team04.kioskbe.order.domain.OrderDrink;

import javax.sql.DataSource;
import java.util.Map;
import java.util.Objects;

import static team04.kioskbe.order.util.OrderRepositoryUtils.getOptionParamSource;
import static team04.kioskbe.order.util.OrderRepositoryUtils.getOrderDrinkParamSource;
import static team04.kioskbe.order.util.OrderRepositoryUtils.getOrderParamSource;
import static team04.kioskbe.order.util.OrderRepositoryUtils.getOrderRowMapper;

@Repository
public class OrderRepositoryImpl implements OrderRepository {
    private static final String INSERT_ORDER_SQL = "INSERT INTO order_info (payment, total_amount, received_amount) VALUES (:payment, :total_amount, :received_amount);";
    private static final String INSERT_ORDER_DRINK_SQL = "INSERT INTO order_drink (order_id, drink_id, quantity, order_price) VALUES (:order_id, :drink_id, :quantity, :order_price);";
    private static final String INSERT_DRINK_SQL = "INSERT INTO drink_choice (option_id, order_drink_id) VALUES (:option_id, :order_drink_id);";
    private static final String SELECT_ORDER_BY_ID_SQL = " SELECT o.id, o.payment, o.total_amount, o.received_amount, o.order_date, o.order_time, od.id AS order_drink_id, od.drink_id, od.quantity, od.order_price, dc.option_id " +
            " FROM order_info AS o LEFT OUTER JOIN order_drink AS od ON o.id=od.order_id " +
            " LEFT OUTER JOIN drink_choice AS dc ON od.id=dc.order_drink_id " +
            " WHERE o.id=:id; ";

    private final NamedParameterJdbcTemplate jdbcTemplate;

    public OrderRepositoryImpl(final DataSource dataSource) {
        this.jdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
    }

    @Transactional
    @Override
    public long save(Order order) {
        GeneratedKeyHolder keyHolder = new GeneratedKeyHolder();

        jdbcTemplate.update(INSERT_ORDER_SQL, getOrderParamSource(order), keyHolder);
        long orderId = (long) Objects.requireNonNull(keyHolder.getKeys()).get("ID");

        saveOrderDrinks(order, orderId);

        return ((long) Objects.requireNonNull(keyHolder.getKeys()).get("ID"));
    }

    private void saveOrderDrinks(final Order order, final long orderId) {
        order.getDrinks().forEach(drink -> saveOrderDrink(orderId, drink));
    }

    private void saveOrderDrink(final long orderId, final OrderDrink drink) {
        jdbcTemplate.update(INSERT_ORDER_DRINK_SQL, getOrderDrinkParamSource(orderId, drink));
        saveDrinkChoice(drink);
    }

    private void saveDrinkChoice(final OrderDrink drink) {
        drink.getOptions().forEach(optionId -> jdbcTemplate.update(INSERT_DRINK_SQL, getOptionParamSource(drink, optionId)));
    }

    @Override
    public Order findById(long orderId) {
        return jdbcTemplate.queryForObject(SELECT_ORDER_BY_ID_SQL, Map.of("id", orderId), getOrderRowMapper());
    }

}
