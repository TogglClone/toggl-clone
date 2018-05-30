INSERT INTO timers(user_id, start_time, end_time, total_time, timer_name)
VALUES($1, $2, $3, $4, $5);
SELECT * FROM timers
WHERE user_id = $1
ORDER BY start_time desc;