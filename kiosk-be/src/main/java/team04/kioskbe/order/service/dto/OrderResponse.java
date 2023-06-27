package team04.kioskbe.order.service.dto;

import team04.kioskbe.order.domain.Order;

import java.util.List;

public class OrderResponse {

    private long dailyOrderId;
    private final List<OrderDrinkResponse> drinks;
    private final String payment;
    private final int receivedAmount;
    private final int totalAmount;
    private final int change;

    public OrderResponse(List<OrderDrinkResponse> drinks, String payment, int receivedAmount, int totalAmount, int change) {
        this.drinks = drinks;
        this.payment = payment;
        this.receivedAmount = receivedAmount;
        this.totalAmount = totalAmount;
        this.change = change;
    }

    public static OrderResponse from(Order order) {
        final int receivedAmount = order.getReceivedAmount();
        final int totalAmount = order.getTotalAmount();
        return new OrderResponse(OrderDrinkResponse.of(order.getDrinks()), order.getPayment().getName(), receivedAmount, totalAmount, receivedAmount - totalAmount);
    }

    public long getDailyOrderId() {
        return dailyOrderId;
    }

    public List<OrderDrinkResponse> getDrinks() {
        return drinks;
    }

    public String getPayment() {
        return payment;
    }

    public int getReceivedAmount() {
        return receivedAmount;
    }

    public int getTotalAmount() {
        return totalAmount;
    }

    public int getChange() {
        return change;
    }
}
