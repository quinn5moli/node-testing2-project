const db = require('../../data/dbConfig')

function getAll() {
    return db('footballers')
}

function findById(id) {
    return db('footballers').where({ id }).first()
}

async function create(player) {
    const [id] = await db('footballers').insert(player)
    
    return findById(id)
}

async function remove(player) {
    const deleted = await db('footballers').where('id', player).del()

    return deleted
}

module.exports = {
    getAll,
    findById,
    create,
    remove
}