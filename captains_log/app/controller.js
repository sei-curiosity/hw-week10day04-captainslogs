const Log = require('./models/log')

const create = (req, res) => {
    const newLog = req.body.logForm
    const log = new Log(newLog)
    log.save()
    .then(
        log => res.send(log)
    )
    .catch(
        err => res.send(err)
    )}


const index = (req, res) => {
    Log.find({})
    .then(
        logs => res.send(logs)
    )
    .catch(
        err => res.send(err)
    )
}
const show = (req, res) => {
    const id = req.params.id
    Log.findById(id)
    .then(
        log => res.send(log)
    )
    .catch(
        err => res.send(err)
    )}

const destroy = (req, res)=> {
    const id = req.body.id
    Log.findById(id)
    .then(
        log => log.remove()
        .then(log => res.send(log))
        .catch(err => res.send(err))
    )
    .catch(
        err => res.send(err)
    )}

const update = (req, res) => {
    const id = req.body.id 
    const entry = req.body.logForm.entry
    Log.update(
        {_id:id},
        {
            $set: {entry: entry}
        }
    )
    .then(updateLog => res.send(updateLog))
    .catch( error => res.send(error))
}

// const crud = 

module.exports = {
                    index,
                    show,
                    destroy,
                    update,
                    create
                 }