package team04.kioskbe.order.service.dto;

import team04.kioskbe.order.domain.Order;
import team04.kioskbe.order.domain.OrderDrink;
import team04.kioskbe.order.domain.Payment;

import java.util.List;

public class OrderRequest {

    private final int totalAmount;
    private final int receivedAmount;
    private final Payment payment;
    private final List<OrderDrink> drinks;

    public OrderRequest(final int totalAmount, final int receivedAmount, final Payment payment, final List<OrderDrink> drinks) {
        this.totalAmount = totalAmount;
        this.receivedAmount = receivedAmount;
        this.payment = payment;
        this.drinks = drinks;
    }

    public Order toEntity() {
        return new Order(totalAmount, receivedAmount, payment, drinks);
    }

}
