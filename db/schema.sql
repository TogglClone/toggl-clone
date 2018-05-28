CREATE TABLE IF NOT EXISTS users(
    user_id SERIAL PRIMARY KEY,
    username TEXT
),
CREATE TABLE IF NOT EXISTS timers(
    timer_id SERIAL PRIMARY KEY,
    user_id INT,
    day_created TEXT
),
CREATE TABLE IF NOT EXISTS tags(
    tag_id SERIAL PRIMARY KEY,
    timer_id INT,
    active BOOLEAN
)
