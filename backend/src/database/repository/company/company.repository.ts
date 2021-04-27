import { ShowCompanyViewModel } from '../../../generated/api'
import AbstractRepository from '../abstractRepository'
import companyColoums from './company.columns'

export interface ICompanyModel extends ShowCompanyViewModel {
  id: string
}

export default class CompanyRepository extends AbstractRepository {
  public static tableName = 'company'

  public getCompanies(): Promise<ICompanyModel[]> {
    return this.knex(CompanyRepository.tableName).select(companyColoums)
  }
}
