package team04.kioskbe.order.controller;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import team04.kioskbe.order.domain.Payment;
import team04.kioskbe.order.service.OrderService;
import team04.kioskbe.order.service.dto.OrderRequest;
import team04.kioskbe.order.service.dto.OrderResponse;

import java.net.URI;
import java.util.List;

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
    public ResponseEntity<Void> saveOrder(@RequestBody OrderRequest orderRequest) {
        long saved = orderService.save(orderRequest);
        return ResponseEntity.created(URI.create("/orders/" + saved)).build();
    }

    @GetMapping("/orders/{orderId}")
    public OrderResponse findOrderById(@PathVariable long orderId) {
        return orderService.findOrderById(orderId);
    }

}
