package team04.kioskbe.domain;

public class Option {

    private Long id;
    private String type;
    private String value;

    public Option(Long id, String type, String value) {
        this.id = id;
        this.type = type;
        this.value = value;
    }

    public Long getId() {
        return id;
    }

    public String getType() {
        return type;
    }

    public String getValue() {
        return value;
    }
}
