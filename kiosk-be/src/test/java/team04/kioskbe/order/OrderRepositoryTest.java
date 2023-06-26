package team04.kioskbe.order;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType;

import javax.sql.DataSource;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertAll;

class OrderRepositoryTest {

    DataSource dataSource;
    OrderRepository orderRepository;

    @BeforeEach
    void setUp() {
        dataSource = new EmbeddedDatabaseBuilder()
                .setType(EmbeddedDatabaseType.H2)
                .addScript("classpath:schema.sql")
                .build();
        this.orderRepository = new OrderRepositoryImpl(dataSource);
    }

    @Test
    @DisplayName("save(): 주문을 저장하면 id를 반환한다.")
    void save() {
        // given
        Order order = new Order(12000,15000, Payment.CASH);

        // when
        long orderId = orderRepository.save(order);

        // then
        Order findOrder = orderRepository.findById(orderId);
        assertAll(() -> assertThat(findOrder.getTotalAmount()).isEqualTo(12000),
                  () -> assertThat(findOrder.getReceivedAmount()).isEqualTo(15000),
                  () -> assertThat(findOrder.getPayment()).isEqualTo(Payment.CASH));
    }

}
