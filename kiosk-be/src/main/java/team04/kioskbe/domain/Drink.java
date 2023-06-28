package team04.kioskbe.domain;

import java.util.List;

public class Drink {

    private Long id;
    private String name;
    private String img;
    private int price;
    private Category category;
    private List<Option> options;

    public Drink() {
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getImg() {
        return img;
    }

    public int getPrice() {
        return price;
    }

    public Category getCategory() {
        return category;
    }

    public List<Option> getOptions() {
        return options;
    }
}
