package team04.kioskbe.order.controller;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import team04.kioskbe.order.domain.Payment;
import team04.kioskbe.order.service.OrderService;

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

}
