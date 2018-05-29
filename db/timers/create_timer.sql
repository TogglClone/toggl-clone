INSERT INTO timers(user_id, start_time, end_time, timer_name)
VALUES($1, $2, $3, $4);
SELECT * FROM timers
WHERE user_id = $1;