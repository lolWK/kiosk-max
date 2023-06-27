package team04.kioskbe.order.repository;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import team04.kioskbe.order.domain.Order;
import team04.kioskbe.order.domain.OrderDrink;
import team04.kioskbe.order.domain.Payment;

import java.util.Collections;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.junit.jupiter.api.Assertions.assertAll;

@SpringBootTest
class OrderRepositoryTest {

    @Autowired
    OrderRepository orderRepository;
    @Autowired
    NamedParameterJdbcTemplate jdbcTemplate;

    @Test
    @DisplayName("save(): 주문을 저장하면 id를 반환한다.")
    void save() {
        // given
        String drinks = "SELECT id FROM drink";
        List<Long> drinksId = jdbcTemplate.queryForList(drinks, Collections.emptyMap(), Long.class);

        String options = "SELECT id FROM drink_option";
        List<Long> optionsId = jdbcTemplate.queryForList(options, Collections.emptyMap(), Long.class);

        OrderDrink orderDrink1 = new OrderDrink(drinksId.get(0), 5, 20000, optionsId);
        OrderDrink orderDrink2 = new OrderDrink(drinksId.get(1), 2, 10000, optionsId);

        Order order = new Order(30000, 30000, Payment.CASH, List.of(orderDrink1, orderDrink2));

        // when
        long orderId = orderRepository.save(order);

        // then
        Order findOrder = orderRepository.findById(orderId);
        assertAll(() -> assertThat(findOrder.getTotalAmount()).isEqualTo(30000),
                  () -> assertThat(findOrder.getReceivedAmount()).isEqualTo(30000),
                  () -> assertThat(findOrder.getPayment()).isEqualTo(Payment.CASH),
                  () -> assertThat(findOrder.getDrinks()).containsExactlyInAnyOrder(orderDrink1, orderDrink2));
    }

    @Test
    @DisplayName("deleteAll(): 데이터베이스에서 주문과 관련된 모든 데이터를 삭제한다.")
    void deleteAll() {
        // given
        String drinks = "SELECT id FROM drink";
        List<Long> drinksId = jdbcTemplate.queryForList(drinks, Collections.emptyMap(), Long.class);

        String options = "SELECT id FROM drink_option";
        List<Long> optionsId = jdbcTemplate.queryForList(options, Collections.emptyMap(), Long.class);

        OrderDrink orderDrink1 = new OrderDrink(drinksId.get(0), 5, 20000, optionsId);
        OrderDrink orderDrink2 = new OrderDrink(drinksId.get(1), 2, 10000, optionsId);

        Order order = new Order(30000, 30000, Payment.CASH, List.of(orderDrink1, orderDrink2));

        long orderId = orderRepository.save(order);

        // when
        orderRepository.deleteAll();

        // then
        assertThatThrownBy(() -> orderRepository.findById(orderId)).isInstanceOf(EmptyResultDataAccessException.class);
    }

}
