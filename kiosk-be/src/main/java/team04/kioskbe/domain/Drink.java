package team04.kioskbe.domain;

import java.util.ArrayList;
import java.util.List;

public class Drink {

    private final Long id;
    private final String name;
    private final String img;
    private final int price;
    private final Category category;
    private final List<Option> options = new ArrayList<>();

    private Drink(Builder builder) {
        this.id = builder.id;
        this.name = builder.name;
        this.img = builder.img;
        this.price = builder.price;
        this.category = builder.category;
    }

    public static Builder builder() {
        return new Builder();
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

    public static class Builder {
        private Long id;
        private String name;
        private String img;
        private int price;
        private Category category;

        public Builder id(Long id) {
            this.id = id;
            return this;
        }

        public Builder name(String name) {
            this.name = name;
            return this;
        }

        public Builder img(String img) {
            this.img = img;
            return this;
        }

        public Builder price(int price) {
            this.price = price;
            return this;
        }

        public Builder category(Category category) {
            this.category = category;
            return this;
        }

        public Drink build() {
            return new Drink(this);
        }
    }
}
