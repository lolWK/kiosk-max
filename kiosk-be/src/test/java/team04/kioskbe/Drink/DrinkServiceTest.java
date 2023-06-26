package team04.kioskbe.Drink;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;

import java.util.ArrayList;
import java.util.List;

public class DrinkServiceTest {
    DrinkService drinkService = new DrinkService();

    @Test
    @DisplayName("카테고리 목록 조회")
    public void getCategoriesTest() {
        //given
        List<CategoryResponse> givenList = new ArrayList<>();
        givenList.add(new CategoryResponse("coffee", "커피"));
        givenList.add(new CategoryResponse("latte", "라떼"));
        givenList.add(new CategoryResponse("tea", "티"));
        givenList.add(new CategoryResponse("juice", "쥬스"));
        givenList.add(new CategoryResponse("decaffeine", "디카페인"));

        //when
        List<CategoryResponse> categoryResponseList = drinkService.getCategories();

        //then
        for (int i=0; i<givenList.size(); i++) {
            assertThat(categoryResponseList.get(i).getId()).isEqualTo(givenList.get(i).getId());
            assertThat(categoryResponseList.get(i).getName()).isEqualTo(givenList.get(i).getName());
        }
    }
}
