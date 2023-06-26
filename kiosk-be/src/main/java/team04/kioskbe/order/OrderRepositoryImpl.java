package team04.kioskbe.order;

import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
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

        Map<String, Object> params = Map.of("payment", order.getPayment().getId(), "total_amount", order.getTotalAmount(), "received_amount", order.getReceivedAmount());

        jdbcTemplate.update(sql, new MapSqlParameterSource(params), keyHolder);

        return ((long) Objects.requireNonNull(keyHolder.getKeys()).get("ID"));
    }

    @Override
    public Order findById(long orderId) {
        String sql = "SELECT id, payment, total_amount, received_amount, order_date, order_time FROM order_info WHERE id=:id;";

        return jdbcTemplate.queryForObject(sql, Map.of("id", orderId), getOrderRowMapper());
    }

    private static RowMapper<Order> getOrderRowMapper() {
        return (resultSet, rowNumber) -> new Order(
                resultSet.getLong("id"),
                resultSet.getInt("total_amount"),
                resultSet.getInt("received_amount"),
                Payment.from(resultSet.getString("payment")),
                resultSet.getDate("order_date").toLocalDate(),
                resultSet.getTime("order_time").toLocalTime());
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
