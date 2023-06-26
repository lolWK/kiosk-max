package team04.kioskbe.domain;

import java.time.LocalDate;
import java.time.LocalTime;

public class Order {

    private Long id;
    private int totalAmount;
    private int receiveAmount;
    private Payment payment;
    private LocalDate orderDate;
    private LocalTime orderTime;

    public Long getId() {
        return id;
    }

    public int getTotalAmount() {
        return totalAmount;
    }

    public int getReceiveAmount() {
        return receiveAmount;
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
