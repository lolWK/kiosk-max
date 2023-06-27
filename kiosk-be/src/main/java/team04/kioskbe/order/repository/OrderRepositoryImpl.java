package team04.kioskbe.order.repository;

import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.stereotype.Repository;
import team04.kioskbe.order.domain.Order;
import team04.kioskbe.order.domain.OrderDrink;
import team04.kioskbe.order.domain.Payment;

import javax.sql.DataSource;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Objects;

@Repository
public class OrderRepositoryImpl implements OrderRepository {

    private final NamedParameterJdbcTemplate jdbcTemplate;

    public OrderRepositoryImpl(final DataSource dataSource) {
        this.jdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
    }

    @Override
    public long save(Order order) {
        GeneratedKeyHolder keyHolder = new GeneratedKeyHolder();

        String sql = "INSERT INTO order_info (payment, total_amount, received_amount) VALUES (:payment, :total_amount, :received_amount);";
        String orderDrink = "INSERT INTO order_drink (order_id, drink_id, quantity, order_price) VALUES (:order_id, :drink_id, :quantity, :order_price);";
        String drinkChoice = "INSERT INTO drink_choice (option_id, order_drink_id) VALUES (:option_id, :order_drink_id);";

        // Order save
        Map<String, Object> params = Map.of("payment", order.getPayment().name(), "total_amount", order.getTotalAmount(), "received_amount", order.getReceivedAmount());

        jdbcTemplate.update(sql, new MapSqlParameterSource(params), keyHolder);

        long orderId = (long) Objects.requireNonNull(keyHolder.getKeys()).get("ID");

        // OrderDrink, DrinkChoice save
        order.getDrinks().forEach(drink -> {
            Map<String, Object> orderDrinkParams = Map.of("order_id", orderId, "drink_id", drink.getDrinkId(), "quantity", drink.getQuantity(), "order_price", drink.getOrderPrice());
            jdbcTemplate.update(orderDrink, new MapSqlParameterSource(orderDrinkParams));
            drink.getOptions().forEach(optionId -> jdbcTemplate.update(drinkChoice, new MapSqlParameterSource(Map.of("option_id", optionId, "order_drink_id", drink.getDrinkId()))));
        });

        return ((long) Objects.requireNonNull(keyHolder.getKeys()).get("ID"));
    }

    @Override
    public Order findById(long orderId) {
        String sql = " SELECT o.id, o.payment, o.total_amount, o.received_amount, o.order_date, o.order_time, od.id AS order_drink_id, od.drink_id, od.quantity, od.order_price, dc.option_id " +
                " FROM order_info AS o LEFT OUTER JOIN order_drink AS od ON o.id=od.order_id " +
                " LEFT OUTER JOIN drink_choice AS dc ON od.id=dc.order_drink_id " +
                " WHERE o.id=:id; ";

        return jdbcTemplate.queryForObject(sql, Map.of("id", orderId), getOrderRowMapper());
    }

    private static RowMapper<Order> getOrderRowMapper() {
        return (resultSet, rowNumber) -> {
            long orderId = resultSet.getLong("id");
            int totalAmount = resultSet.getInt("total_amount");
            int receivedAmount = resultSet.getInt("received_amount");
            Payment payment = Payment.from(resultSet.getString("payment"));
            LocalDate orderDate = resultSet.getDate("order_date").toLocalDate();
            LocalTime orderTime = resultSet.getTime("order_time").toLocalTime();

            List<Long> options = new ArrayList<>();
            long optionId = resultSet.getLong("option_id");
            options.add(optionId);

            List<OrderDrink> orderDrinks = new ArrayList<>();
            long orderDrinkId = resultSet.getLong("order_drink_id");
            long drinkId = resultSet.getLong("drink_id");
            int quantity = resultSet.getInt("quantity");
            int orderPrice = resultSet.getInt("order_price");
            orderDrinks.add(new OrderDrink(drinkId, quantity, orderPrice, options));

            while (resultSet.next()) {
                long next = resultSet.getLong("order_drink_id");
                if (next == orderDrinkId) {
                    long otherOption = resultSet.getLong("option_id");
                    options.add(otherOption);
                } else {
                    options = new ArrayList<>();
                    long otherOption = resultSet.getLong("option_id");
                    options.add(otherOption);
                    orderDrinkId = resultSet.getLong("order_drink_id");
                    drinkId = resultSet.getLong("drink_id");
                    quantity = resultSet.getInt("quantity");
                    orderPrice = resultSet.getInt("order_price");
                    orderDrinks.add(new OrderDrink(drinkId, quantity, orderPrice, options));
                }
            }

            return new Order(orderId, totalAmount, receivedAmount, payment, orderDate, orderTime, orderDrinks);
        };
    }

    /*
    JdbcTemplate: 최저 수준의 접근 방법
    <insert, update, delete> 작업을 수행할 때는 update 메서드를 사용한다
    + batchUpdate

    <select>
    queryForInt
    queryForList
    queryForMap
    queryForStream
    queryForObject: 단일 객체
    query: 다수 객체
    */

}
