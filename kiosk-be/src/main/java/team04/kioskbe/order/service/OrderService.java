package team04.kioskbe.order.service;

import org.springframework.stereotype.Service;
import team04.kioskbe.order.domain.Order;
import team04.kioskbe.order.domain.Payment;
import team04.kioskbe.order.repository.OrderRepository;
import team04.kioskbe.order.service.dto.OrderRequest;

import java.util.List;

@Service
public class OrderService {

    private final OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public List<Payment> getPayments() {
        return Payment.getPayments();
    }

    public long save(OrderRequest orderRequest) {
        Order order = orderRequest.toEntity();
        return orderRepository.save(order);
    }

}
