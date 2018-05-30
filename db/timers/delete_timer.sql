DELETE FROM timers
WHERE timer_id = $1;
SELECT * FROM timers
WHERE user_id = $2
ORDER BY start_time desc;