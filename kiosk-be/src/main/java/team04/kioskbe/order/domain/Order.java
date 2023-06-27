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

    public Order(int totalAmount, int receivedAmount, Payment payment) {
        this.totalAmount = totalAmount;
        this.receivedAmount = receivedAmount;
        this.payment = payment;
    }

    public Order(final Long id, final int totalAmount, final int receivedAmount, final Payment payment, final LocalDate orderDate, final LocalTime orderTime) {
        this.id = id;
        this.totalAmount = totalAmount;
        this.receivedAmount = receivedAmount;
        this.payment = payment;
        this.orderDate = orderDate;
        this.orderTime = orderTime;
    }

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
