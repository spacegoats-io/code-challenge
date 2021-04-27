import { Router } from 'express'
import { createValidator } from 'express-joi-validation'
import { getCompaniesHandler } from './companies.handler'

const validator = createValidator()
const router = Router()

router
  .route('/')
  .get(getCompaniesHandler)


export default router
