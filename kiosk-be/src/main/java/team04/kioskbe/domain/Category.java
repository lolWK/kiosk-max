package team04.kioskbe.domain;

public enum Category {

    COFFEE("coffee", "커피"),
    LATTE("latte", "라떼"),
    TEA("tea", "티"),
    JUICE("juice", "쥬스"),
    DECAFFEINE("decaffeine", "디카페인");

    private final String id;
    private final String name;

    Category(String id, String name) {
        this.id = id;
        this.name = name;
    }

    public static Category findCategory(String id){
        for(Category category : Category.values()){
            if(category.getId().equals(id)){
                return category;
            }
        }
        return null;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}
