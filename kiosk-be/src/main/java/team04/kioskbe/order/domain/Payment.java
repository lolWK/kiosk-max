package team04.kioskbe.order.domain;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.List;

@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum Payment {

    CARD("카드결제", "url1"),
    CASH("현금결제", "url2");

    private final String name;
    private final String img;

    Payment(String name, String img) {
        this.name = name;
        this.img = img;
    }

    public String getName() {
        return name;
    }

    public String getImg() {
        return img;
    }

    public static Payment from(String type) {
        return type.equals(CARD.name()) ? CARD : CASH;
    }

    // TODO: 유연하게 변경할 수 있을까?
    public static List<Payment> getPayments() {
        return List.of(CARD, CASH);
    }

}
