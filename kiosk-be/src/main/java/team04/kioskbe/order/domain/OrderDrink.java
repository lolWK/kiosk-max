package team04.kioskbe.order.domain;

import java.util.List;
import java.util.Objects;

public class OrderDrink {

    private Long id;
    private Long orderId;
    private final Long drinkId;
    private final int quantity;
    private final int orderPrice;
    private final List<Long> options;

    public OrderDrink(final Long drinkId, final int quantity, final int orderPrice, final List<Long> options) {
        this.drinkId = drinkId;
        this.quantity = quantity;
        this.orderPrice = orderPrice;
        this.options = options;
    }

    public Long getId() {
        return id;
    }

    public Long getOrderId() {
        return orderId;
    }

    public Long getDrinkId() {
        return drinkId;
    }

    public int getQuantity() {
        return quantity;
    }

    public int getOrderPrice() {
        return orderPrice;
    }

    public List<Long> getOptions() {
        return options;
    }

    @Override
    public boolean equals(final Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        final OrderDrink that = (OrderDrink) o;
        return getQuantity() == that.getQuantity() && getOrderPrice() == that.getOrderPrice() && Objects.equals(getId(), that.getId()) && Objects.equals(getOrderId(), that.getOrderId()) && Objects.equals(getDrinkId(), that.getDrinkId()) && Objects.equals(getOptions(), that.getOptions());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getOrderId(), getDrinkId(), getQuantity(), getOrderPrice(), getOptions());
    }

}
