package team04.kioskbe.Drink;

import team04.kioskbe.domain.Category;
import team04.kioskbe.domain.Drink;
import team04.kioskbe.domain.Option;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class DrinkResponse {
    private final Long id;
    private final String name;
    private final String img;
    private final int price;
    private final int totalQuantity;
    private final Category category;
    private final List<OptionResponse> options;

    private DrinkResponse(Long id, String name, String img, int price, Category category, int totalQuantity, List<Option> options) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.price = price;
        this.category = category;
        this.totalQuantity = totalQuantity;
        this.options = OptionResponse.valueOf(aggregateOptionByType(options));
    }

    public static DrinkResponse from(Drink drink) {
        return new DrinkResponse(drink.getId(), drink.getName(), drink.getImg(),
                drink.getPrice(), drink.getCategory(), drink.getTotalQuantity(), drink.getOptions());
    }

    private Map<String, List<OptionValue>> aggregateOptionByType(List<Option> options) {
        Map<String, List<OptionValue>> map = new HashMap<>();
        for (Option option : options) {
            OptionValue optionValue = new OptionValue(option.getId(), option.getValue());
            map.put(option.getType(), map.getOrDefault(option.getType(), new ArrayList<>()));
            map.get(option.getType()).add(optionValue);
        }
        return map;
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

    public List<OptionResponse> getOptions() {
        return options;
    }

    public int getTotalQuantity() {
        return totalQuantity;
    }
}
