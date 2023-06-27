package team04.kioskbe.Drink;

import org.springframework.stereotype.Service;
import team04.kioskbe.domain.Drink;

import java.util.ArrayList;
import java.util.List;

@Service
public class DrinkService {
    private final DrinkRepository drinkRepository;

    public DrinkService(DrinkRepository drinkRepository) {
        this.drinkRepository = drinkRepository;
    }

    public List<CategoryResponse> getCategories() {
        return CategoryResponse.getCategories();
    }

    public List<DrinkResponse> getDrinks(String category) {
        List<Drink> drinkList = drinkRepository.findByCategory(category);
        List<DrinkResponse> drinkResponses = new ArrayList<>();
        for (Drink drink : drinkList) {
            drinkResponses.add(DrinkResponse.from(drink));
        }
        return drinkResponses;
    }
}
