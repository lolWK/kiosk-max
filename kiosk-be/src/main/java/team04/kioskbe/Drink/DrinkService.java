package team04.kioskbe.Drink;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DrinkService {

    public List<CategoryResponse> getCategories(){
        return CategoryResponse.getCategories();
    }
}
