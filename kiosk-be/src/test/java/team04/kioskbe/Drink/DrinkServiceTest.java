package team04.kioskbe.Drink;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class DrinkServiceTest {
    @Autowired
    DrinkService drinkService;

    @Test
    @DisplayName("카테고리 목록을 조회하면 카테고리 목록을 반환한다.")
    public void getCategoriesTest() {
        //given

        //when
        List<CategoryResponse> categoryResponseList = drinkService.getCategories();

        //then
        List<CategoryResponse> expectedList = new ArrayList<>();
        expectedList.add(new CategoryResponse("coffee", "커피"));
        expectedList.add(new CategoryResponse("latte", "라떼"));
        expectedList.add(new CategoryResponse("tea", "티"));
        expectedList.add(new CategoryResponse("juice", "쥬스"));
        expectedList.add(new CategoryResponse("decaffeine", "디카페인"));

        for (int i = 0; i < expectedList.size(); i++) {
            assertThat(categoryResponseList.get(i).getId()).isEqualTo(expectedList.get(i).getId());
            assertThat(categoryResponseList.get(i).getName()).isEqualTo(expectedList.get(i).getName());
        }
    }
}
