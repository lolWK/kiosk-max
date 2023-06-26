package team04.kioskbe.domain;

import team04.kioskbe.Drink.CategoryResponse;

import java.util.ArrayList;
import java.util.List;

public enum Category {

    COFFEE("coffee", "커피"),
    LATTE("latte", "라떼"),
    TEA("tea", "티"),
    JUICE("juice", "쥬스"),
    DECAFFEINE("decaffeine", "디카페인");

    private String id;
    private String name;

    Category(String id, String name) {
        this.id = id;
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public static List<CategoryResponse> getCategoryList(){
        List<CategoryResponse> list = new ArrayList<>();
        for(Category category : Category.values()){
            list.add(new CategoryResponse(category.id, category.name));
        }
        return list;
    }
}
