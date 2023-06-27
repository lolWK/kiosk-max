package team04.kioskbe.Drink;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import team04.kioskbe.domain.Category;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

    @Test
    @DisplayName("카테고리에 해당하는 음료 목록을 조회하고 DrinkResponse 리스트로 반환한다.")
    public void getDrinksTest() {
        //given
        String category = "coffee";

        //when
        List<DrinkResponse> drinkResponseList = drinkService.getDrinks(category);

        //then
        //조회한 음료 데이터 확인
        DrinkResponse drinkResponse1 = drinkResponseList.get(0);
        assertThat(drinkResponse1.getId()).isEqualTo(1L);
        assertThat(drinkResponse1.getName()).isEqualTo("아메리카노");
        assertThat(drinkResponse1.getImg()).isEqualTo("imgurl1");
        assertThat(drinkResponse1.getPrice()).isEqualTo(3000);
        assertThat(drinkResponse1.getCategory()).isEqualTo(Category.COFFEE);

        DrinkResponse drinkResponse2 = drinkResponseList.get(1);
        assertThat(drinkResponse2.getId()).isEqualTo(2L);
        assertThat(drinkResponse2.getName()).isEqualTo("콜드브루");
        assertThat(drinkResponse2.getImg()).isEqualTo("imgurl2");
        assertThat(drinkResponse2.getCategory()).isEqualTo(Category.COFFEE);
        assertThat(drinkResponse2.getPrice()).isEqualTo(2000);
        assertThat(drinkResponse2.getOptions().size()).isEqualTo(0);

        // 음료의 옵션 OptionResponse : [type, List<OptionValue>]
        List<OptionResponse> optionResponseList = drinkResponse1.getOptions();
        OptionResponse optionResponse1 = optionResponseList.get(0);
        assertThat(optionResponse1.getType()).isEqualTo("온도");
        OptionResponse optionResponse2 = optionResponseList.get(1);
        assertThat(optionResponse2.getType()).isEqualTo("사이즈");

        //각 OptionResponse에 있는 OptionValue들의 값을 확인한다.
        Map<Long, String> expectedOptionValuesMap = new HashMap<>();
        expectedOptionValuesMap.put(1L, "S");
        expectedOptionValuesMap.put(2L, "M");
        expectedOptionValuesMap.put(3L, "L");
        expectedOptionValuesMap.put(4L, "Hot");
        expectedOptionValuesMap.put(5L, "Ice");
        for (OptionValue optionValue : optionResponse1.getValues()) {
            assertThat(optionValue.getValue()).isEqualTo(expectedOptionValuesMap.get(optionValue.getId()));
        }
        for (OptionValue optionValue : optionResponse2.getValues()) {
            assertThat(optionValue.getValue()).isEqualTo(expectedOptionValuesMap.get(optionValue.getId()));
        }
    }
}
