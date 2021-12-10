const db = require('../../data/dbConfig')
const Footballers = require('./footballersModel')

describe('Footballers model', () => {

    beforeAll(async () => {

        await db.migrate.rollback()

        await db.migrate.latest()
    })

    beforeEach(async () => {
        await db.seed.run()
    })

    afterAll(async () => {
        await db.destroy()
    })

    describe('getById', () => {
        it('retrieves footballer by id', async () => {

            const footballer = await Footballers.findById(1)

            expect(footballer).toMatchObject({ id: 1, name: 'Kylian Mbappe' })
        })
    })

    describe('create', () => {
        it('adds a new Footballer', async () => {
            const footballer = await Footballers.create({ name: 'Lieke Martens' })

            expect(footballer).toMatchObject({ id: 4, name: 'Lieke Martens' })
            expect(await db('footballers')).toHaveLength(4)
        })
    })

    describe('delete', () => {
        it('deletes a Footballer', async () => {
            const deleted = await Footballers.remove(3)

            expect(deleted).toBe(1)
            expect(await db('footballers')).toHaveLength(2)
        })

        it('doess not delete if id does not exist', async () => {
            const deleted = await Footballers.remove(500)

            expect(deleted).toBe(0)
            expect(await db('footballers')).toHaveLength(3)
        })
    })
})