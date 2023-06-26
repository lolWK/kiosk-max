CREATE TABLE order_info
(
    id              BIGINT PRIMARY KEY AUTO_INCREMENT,
    payment         VARCHAR(20) NOT NULL,
    total_amount    INTEGER     NOT NULL,
    received_amount INTEGER     NOT NULL,
    order_date      DATE DEFAULT (CURRENT_DATE),
    order_time      TIME DEFAULT (CURRENT_TIME)
);
