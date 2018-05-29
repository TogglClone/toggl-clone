INSERT INTO tags( timer_id, active)
VALUES($1, true);
SELECT * FROM tags
WHERE timer_id = $1;