UPDATE timers
SET start_time = $1 
WHERE timer_id = $2;
SELECT * FROM timers
WHERE user_id = $3;