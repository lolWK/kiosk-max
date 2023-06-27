package team04.kioskbe.Drink;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import team04.kioskbe.domain.Category;
import team04.kioskbe.domain.Drink;
import team04.kioskbe.domain.Option;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;


@SpringBootTest
public class DrinkRepositoryTest {
    @Autowired
    DrinkRepository drinkRepository;

    @Test
    @DisplayName("카테고리로 음료 목록 조회시 해당하는 음료 목록을 반환한다.")
    public void findByCategoryTest() {
        //given
        String category = "coffee";

        //when
        List<Drink> drinkList = drinkRepository.findByCategory(category);

        //then
        Drink americano = Drink.builder()
                .id(1L)
                .img("imgurl1")
                .name("아메리카노")
                .price(3000)
                .category(Category.COFFEE)
                .build();
        americano.getOptions().add(new Option(1L, "사이즈", "S"));
        americano.getOptions().add(new Option(2L, "사이즈", "M"));
        americano.getOptions().add(new Option(3L, "사이즈", "L"));
        americano.getOptions().add(new Option(4L, "온도", "Hot"));
        americano.getOptions().add(new Option(5L, "온도", "Ice"));

        Drink coldbrew = Drink.builder()
                .id(2L)
                .img("imgurl2")
                .name("콜드브루")
                .price(2000)
                .category(Category.COFFEE)
                .build();

        Drink drink1 = drinkList.get(0);
        assertThat(drink1.getId()).isEqualTo(americano.getId());
        assertThat(drink1.getName()).isEqualTo(americano.getName());
        assertThat(drink1.getImg()).isEqualTo(americano.getImg());
        assertThat(drink1.getCategory()).isEqualTo(americano.getCategory());
        assertThat(drink1.getPrice()).isEqualTo(americano.getPrice());

        for (int i = 0; i < drink1.getOptions().size(); i++) {
            assertThat(drink1.getOptions().get(i).getId()).isEqualTo(americano.getOptions().get(i).getId());
            assertThat(drink1.getOptions().get(i).getType()).isEqualTo(americano.getOptions().get(i).getType());
            assertThat(drink1.getOptions().get(i).getValue()).isEqualTo(americano.getOptions().get(i).getValue());
        }

        Drink drink2 = drinkList.get(1);
        assertThat(drink2.getId()).isEqualTo(coldbrew.getId());
        assertThat(drink2.getName()).isEqualTo(coldbrew.getName());
        assertThat(drink2.getImg()).isEqualTo(coldbrew.getImg());
        assertThat(drink2.getCategory()).isEqualTo(coldbrew.getCategory());
        assertThat(drink2.getPrice()).isEqualTo(coldbrew.getPrice());
        assertThat(drink2.getOptions().size()).isEqualTo(0);
    }
}
