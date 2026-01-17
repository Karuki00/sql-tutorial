const { Client } = require('pg')
const assert = require('assert')

describe('Database creation', () => {
  it('should have campus database', async () => {
    const client = new Client({
      host: process.env.PGHOST,
      port: process.env.PGPORT,
      user: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      database: process.env.PGDATABASE
    })

    await client.connect()

    const res = await client.query(
      "SELECT 1 FROM pg_database WHERE datname = 'campus'"
    )

    await client.end()
    assert.strictEqual(res.rowCount, 1)
  })
})
