import { NextFunction, Request, Response } from 'express'
import CompanyRepository from '../database/repository/company/company.repository'
import logger from '../logger'

export async function getCompaniesHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const companyRepository = new CompanyRepository()
    const companies = await companyRepository.getCompanies()

    res.json(companies.map(({ id, ...rest }) => (rest)))
  } catch (err) {
    logger.error(err)
    next(err)
  }
}
