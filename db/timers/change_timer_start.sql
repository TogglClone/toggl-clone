UPDATE timers
SET start_time = $1, end_time = $2
WHERE timer_id = $3;
SELECT * FROM timers
WHERE user_id = $4;