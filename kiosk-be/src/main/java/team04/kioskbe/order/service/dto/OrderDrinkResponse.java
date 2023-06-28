package team04.kioskbe.order.service.dto;

import team04.kioskbe.order.domain.OrderDrink;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

public class OrderDrinkResponse {

    private String name;
    private int quantity;
    private List<OptionResponse> optionResponses;

    public OrderDrinkResponse(final int quantity) {
        this.quantity = quantity;
    }

    public OrderDrinkResponse() {
    }

    public static List<OrderDrinkResponse> of(List<OrderDrink> drinks) {
        return drinks.stream().map(OrderDrinkResponse::from).collect(Collectors.toUnmodifiableList());
    }

    public static OrderDrinkResponse from(OrderDrink orderDrink) {
        return new OrderDrinkResponse(orderDrink.getQuantity());
    }

    public String getName() {
        return name;
    }

    public int getQuantity() {
        return quantity;
    }

    public List<String> getOptionResponses() {
        return List.of("L", "HOT");
    }

    @Override
    public boolean equals(final Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        final OrderDrinkResponse that = (OrderDrinkResponse) o;
        return quantity == that.quantity && Objects.equals(name, that.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, quantity);
    }
}
