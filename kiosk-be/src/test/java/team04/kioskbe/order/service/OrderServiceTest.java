package team04.kioskbe.order.service;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType;
import team04.kioskbe.order.domain.Order;
import team04.kioskbe.order.domain.OrderDrink;
import team04.kioskbe.order.domain.Payment;
import team04.kioskbe.order.repository.OrderRepository;
import team04.kioskbe.order.service.dto.OrderDrinkResponse;
import team04.kioskbe.order.service.dto.OrderRequest;
import team04.kioskbe.order.service.dto.OrderResponse;

import javax.sql.DataSource;
import java.util.Collections;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertAll;

@SpringBootTest
class OrderServiceTest {

    DataSource dataSource;
    @Autowired
    OrderRepository orderRepository;
    @Autowired
    OrderService orderService;
    @Autowired
    NamedParameterJdbcTemplate jdbcTemplate;

    @BeforeEach
    void setUp() {
        dataSource = new EmbeddedDatabaseBuilder()
                .setType(EmbeddedDatabaseType.H2)
                .addScript("classpath:schema.sql")
                .addScript("classpath:data.sql")
                .build();
    }

    @Test
    @DisplayName("getPayments(): 결제 수단 목록을 반환한다.")
    void getPayments() {
        // given

        // when
        List<Payment> payments = orderService.getPayments();

        // then
        assertThat(payments).containsExactlyInAnyOrder(Payment.CARD, Payment.CASH);
    }

    @Test
    @DisplayName("save(): 주문 요청을 데이터베이스에 저장하고 id를 반환한다.")
    void save() {
        // given
        String drinks = "SELECT id FROM drink";
        List<Long> drinksId = jdbcTemplate.queryForList(drinks, Collections.emptyMap(), Long.class);

        String options = "SELECT id FROM drink_option";
        List<Long> optionsId = jdbcTemplate.queryForList(options, Collections.emptyMap(), Long.class);

        OrderDrink orderDrink1 = new OrderDrink(drinksId.get(0), 5, 20000, optionsId);
        OrderDrink orderDrink2 = new OrderDrink(drinksId.get(1), 2, 10000, optionsId);

        OrderRequest order = new OrderRequest(30000, 30000, Payment.CASH, List.of(orderDrink1, orderDrink2));

        // when
        long orderId = orderService.save(order);

        // then
        Order findOrder = orderRepository.findById(orderId);
        assertAll(() -> assertThat(findOrder.getTotalAmount()).isEqualTo(30000),
                () -> assertThat(findOrder.getReceivedAmount()).isEqualTo(30000),
                () -> assertThat(findOrder.getPayment()).isEqualTo(Payment.CASH),
                () -> assertThat(findOrder.getDrinks()).containsExactlyInAnyOrder(orderDrink1, orderDrink2));
    }

    @Test
    @DisplayName("findOrderById(): 주문 번호로 조회하여 영수증 정보를 반환한다.")
    void findOrderById() {
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
        OrderResponse orderById = orderService.findOrderById(orderId);

        // then
        assertAll(() -> assertThat(orderById.getTotalAmount()).isEqualTo(30000),
                () -> assertThat(orderById.getReceivedAmount()).isEqualTo(30000),
                () -> assertThat(orderById.getPayment()).isEqualTo(Payment.CASH.getName()),
                () -> assertThat(orderById.getChange()).isEqualTo(0),
                () -> assertThat(orderById.getDrinks()).containsExactlyInAnyOrder(OrderDrinkResponse.from(orderDrink1), OrderDrinkResponse.from(orderDrink2)));
    }

}
