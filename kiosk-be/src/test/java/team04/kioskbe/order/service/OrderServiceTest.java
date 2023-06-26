package team04.kioskbe.order.service;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import team04.kioskbe.order.domain.Payment;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class OrderServiceTest {

    @Autowired
    OrderService orderService;

    @Test
    @DisplayName("getPayments(): 결제 수단 목록을 반환한다.")
    void getPayments() {
        // given

        // when
        List<Payment> payments = orderService.getPayments();

        // then
        assertThat(payments).containsExactlyInAnyOrder(Payment.CARD, Payment.CASH);
    }

}
