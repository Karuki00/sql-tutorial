const { Client } = require('pg')
const assert = require('assert')

describe('Database creation', () => {
  it('should have campus database', async () => {
    const client = new Client({
      user: 'postgres',
      password: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'postgres'
    })

    await client.connect()

    const res = await client.query(
      "SELECT 1 FROM pg_database WHERE datname = 'campus'"
    )

    await client.end()
    assert.strictEqual(res.rowCount, 1)
  })
})
