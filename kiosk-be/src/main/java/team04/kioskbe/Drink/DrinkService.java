package team04.kioskbe.Drink;

import org.springframework.stereotype.Service;
import team04.kioskbe.domain.Category;

import java.util.List;

@Service
public class DrinkService {

    public List<CategoryResponse> getCategories(){
        return Category.getCategoryList();
    }
}
