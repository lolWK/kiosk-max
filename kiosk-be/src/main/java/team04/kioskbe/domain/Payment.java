package java.team04.kioskbe.domain;

public enum Payment {

    CARD("card", "카드결제", "url1"),
    CASH("cash", "현금결제", "url2");

    private String id;
    private String name;
    private String img;

    Payment(String id, String name, String img) {
        this.id = id;
        this.name = name;
        this.img = img;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getImg() {
        return img;
    }
}
