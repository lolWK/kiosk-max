package team04.kioskbe.order.domain;

import java.time.LocalDate;
import java.time.LocalTime;

public class Order {

    private Long id;
    private final int totalAmount;
    private final int receivedAmount;
    private final Payment payment;
    private LocalDate orderDate;
    private LocalTime orderTime;

    public Long getId() {
        return id;
    }

    public int getTotalAmount() {
        return totalAmount;
    }

    public int getReceivedAmount() {
        return receivedAmount;
    }

    public Payment getPayment() {
        return payment;
    }

    public LocalDate getOrderDate() {
        return orderDate;
    }

    public LocalTime getOrderTime() {
        return orderTime;
    }

}
