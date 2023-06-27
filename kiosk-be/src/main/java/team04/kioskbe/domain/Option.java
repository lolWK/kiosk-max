package team04.kioskbe.domain;

public class Option {

    private final Long id;
    private final String type;
    private final String value;

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
