package team04.kioskbe.order.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import team04.kioskbe.order.repository.OrderSequence;

import java.time.LocalDate;
import java.util.concurrent.atomic.AtomicLong;

@Configuration
public class AppConfig {

    @Bean
    public OrderSequence orderSequence() {
        return new OrderSequence(new AtomicLong(), LocalDate.now());
    }
    
}
