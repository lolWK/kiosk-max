package team04.kioskbe.order.service;

import org.springframework.stereotype.Service;
import team04.kioskbe.order.domain.Payment;

import java.util.List;

@Service
public class OrderService {

    public List<Payment> getPayments() {
        return Payment.getPayments();
    }

}
