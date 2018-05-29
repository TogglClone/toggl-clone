UPDATE timers
SET timer_name = $1 
WHERE timer_id = $2;
SELECT * FROM timers
WHERE user_id = $3;