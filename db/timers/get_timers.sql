SELECT * FROM timers
WHERE user_id = $1
ORDER BY start_time desc;