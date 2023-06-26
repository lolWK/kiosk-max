package team04.kioskbe.Drink;

public class CategoryResponse {
    private String id;
    private String name;

    public CategoryResponse(String id, String name) {
        this.id = id;
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}
