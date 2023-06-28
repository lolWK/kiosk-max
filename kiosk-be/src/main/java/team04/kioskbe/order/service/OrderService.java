package team04.kioskbe.order.service;

import org.springframework.stereotype.Service;
import team04.kioskbe.order.domain.Order;
import team04.kioskbe.order.domain.Payment;
import team04.kioskbe.order.repository.OrderRepository;
import team04.kioskbe.order.repository.OrderSequence;
import team04.kioskbe.order.service.dto.OrderRequest;
import team04.kioskbe.order.service.dto.OrderResponse;

import java.util.List;

@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final OrderSequence orderSequence;

    public OrderService(OrderRepository orderRepository, OrderSequence orderSequence) {
        this.orderRepository = orderRepository;
        this.orderSequence = orderSequence;
    }

    public List<Payment> getPayments() {
        return Payment.getPayments();
    }

    public long save(OrderRequest orderRequest) {
        Order order = orderRequest.toEntity();
        return orderRepository.save(order);
    }

    public OrderResponse findOrderById(long orderId) {
        final Order order = orderRepository.findById(orderId);
        return OrderResponse.from(order, orderSequence.createDailyOrderId());
    }

}
