CREATE TABLE IF NOT EXISTS users(
    user_id SERIAL PRIMARY KEY,
    auth_id TEXT
),
CREATE TABLE IF NOT EXISTS timers(
    timer_id SERIAL PRIMARY KEY,
    user_id INT,
    start_time TEXT,
    end_time TEXT,
    timer_name TEXT,
    total_time TEXT
),
CREATE TABLE IF NOT EXISTS tags(
    tag_id SERIAL PRIMARY KEY,
    timer_id INT,
    active BOOLEAN
)
