package team04.kioskbe.Drink;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DrinkController {

    private final DrinkService drinkService;

    public DrinkController(DrinkService drinkService) {
        this.drinkService = drinkService;
    }

    @GetMapping("/Drinks/Categories")
    public List<CategoryResponse> getCategories() {
        return drinkService.getCategories();
    }
}
