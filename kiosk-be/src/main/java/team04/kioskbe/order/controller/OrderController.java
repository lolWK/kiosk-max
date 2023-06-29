package team04.kioskbe.order.controller;

import java.net.URI;
import java.util.List;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import team04.kioskbe.order.domain.Payment;
import team04.kioskbe.order.service.OrderService;
import team04.kioskbe.order.service.dto.OrderRequest;
import team04.kioskbe.order.service.dto.OrderResponse;

@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE)
@RestController
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping("/orders/payments")
    public List<Payment> getPayments() {
        return orderService.getPayments();
    }

    @PostMapping("/orders")
    public ResponseEntity<String> saveOrder(@RequestBody OrderRequest orderRequest) {
        try {
            awaitPayment();
            decidePaymentStatus();
        } catch (InterruptedException e) {
            return ResponseEntity.internalServerError().body("서버에 문제가 발생했습니다.\n관리자에게 문의하세요.");
        } catch (IllegalStateException e) {
            return ResponseEntity.badRequest().body("카드 결제에 실패했습니다.\n다른 카드로 다시 시도해주세요.");
        }
        long saved = orderService.save(orderRequest);
        return ResponseEntity.created(URI.create("/orders/" + saved)).build();
    }

    private static void awaitPayment() throws InterruptedException {
        final int randomNumber = (int) (Math.random() * 4000);
        final int sleepTime = randomNumber + 3000;
        Thread.sleep(sleepTime);
    }

    private static void decidePaymentStatus() {
        if (Math.random() > 0.8) {
            throw new IllegalStateException();
        }
    }

    @GetMapping("/orders/{orderId}")
    public OrderResponse findOrderById(@PathVariable long orderId) {
        return orderService.findOrderById(orderId);
    }

}
