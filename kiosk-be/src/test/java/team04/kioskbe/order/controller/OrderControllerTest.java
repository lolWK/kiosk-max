package team04.kioskbe.order.controller;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;

@AutoConfigureMockMvc
@SpringBootTest
class OrderControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Test
    @DisplayName("getPayments(): 결제 목록을 요청하면 JSON 형식으로 반환한다.")
    void getPayments() throws Exception {
        // given when then
        mockMvc.perform(get("/orders/payments").accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("*.name").exists())
                .andExpect(MockMvcResultMatchers.jsonPath("*.img").exists())
                .andExpect(MockMvcResultMatchers.jsonPath("*").isArray())
                .andDo(print());
    }

}
