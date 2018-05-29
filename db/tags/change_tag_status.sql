UPDATE tags
SET active = $1
WHERE tag_id = $2;
SELECT * FROM tags
WHERE timer_id = $3;