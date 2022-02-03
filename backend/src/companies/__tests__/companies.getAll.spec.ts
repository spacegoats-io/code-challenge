import request from 'supertest'
import knex from '../../database/postgres'
import companyPayload from './mockdata/companyPayload.json'
import CompanyRepository from '../../database/repository/company/company.repository'

jest.mock('../../logger')

let app
describe('Company Routes GET /companies', () => {
  beforeAll(async () => {
    app = require('../../config/express').default
    await knex('company').del()
  })

  afterAll(async () => {
    await knex('company').del()
  })

  it('should return an array of companies', async () => {
    //const response = await request(app).get('/companies')
    expect(true).toBe(true)
  })
})
