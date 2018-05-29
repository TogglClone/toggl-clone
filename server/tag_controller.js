module.exports = {
    getAll:  (req, res) => {
        let {timer_id} = req.query
        const db = req.app.get('db')

        db.tags.get_tags([timer_id]).then( (tags) => {
            res.status(200).send(tags)
        }).catch( (err) => {
            console.log(err)
            res.status(500).send(err) 
        })
    },
    create: (req, res) => {
        let {timer_id} = req.query
        const db = req.app.get('db')
        
        db.tags.create_tag([timer_id]).then( (tags) => {
            console.log("Inside success!" , tags)
            res.status(200).send(tags)
        }).catch( (err) => {
            console.log(err)
            res.status(500).send(err) 
        })
    },
    update: (req, res) => {
        let { active, tag_id, timer_id} = req.body
        const db = req.app.get('db')

        db.tags.change_tag_status([active, tag_id, timer_id]).then( (tags) => {
            res.status(200).send(tags)
        }).catch( (err) => {
            console.log(err)
            res.status(500).send(err) 
        })
    }
}