module.exports = {
    getAll: (req, res) => {
        let user_id = 1
        // user_id should be destructured from req.user
        const db = req.app.get('db')
        db.timers.get_timers([user_id]).then( (timers) => {
            res.status(200).send(timers)
        }).catch( (err) => {
            console.log(err)
            res.status(500).send(err) 
        })
    },
    create: (req, res) => {
        let user_id = 1
        // user_id should be destructured from req.user
        let { start_time, end_time, total_time, timer_name } = req.body
        const db = req.app.get('db')
        db.timers.create_timer([user_id, start_time, end_time, total_time, timer_name]).then( (timers) => {
            res.status(200).send(timers)
        }).catch( (err) => {
            console.log(err)
            res.status(500).send(err) 
        })
    },
    updateName:  (req, res) => {
        let {user_id} = req.user
        let { timer_name, timer_id } = req.body
        const db = req.app.get('db')
        db.timers.change_timer_name([timer_name, timer_id, user_id]).then( (timers) => {
            res.status(200).send(timers)
        }).catch( (err) => {
            console.log(err)
            res.status(500).send(err) 
        })
    },
    updateStartEnd: (req, res) => {
        let {user_id} = req.user
        let { timer_id, start_time, end_time } = req.body
        const db = req.app.get('db')
        db.timers.change_timer_start([start_time, end_time, timer_id, user_id]).then( (timers) => {
            res.status(200).send(timers)
        }).catch( (err) => {
            console.log(err)
            res.status(500).send(err) 
        })
    },
    delete: (req, res) => {
        let {user_id} = req.user
        let { timer_id } = req.query
        const db = req.app.get('db')
        db.timers.delete_timer([timer_id, user_id]).then( (timers) => {
            res.status(200).send(timers)
        }).catch( (err) => {
            console.log(err)
            res.status(500).send(err) 
        })
    }
}