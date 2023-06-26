package team04.kioskbe.order;

public interface OrderRepository {

    long save(Order order);
    Order findById(long orderId);

}
