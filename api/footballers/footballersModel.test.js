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
})