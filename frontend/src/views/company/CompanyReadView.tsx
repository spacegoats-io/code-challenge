import React from 'react'
import { ScrollWrapper } from '../../components/Layout/ContentWrapper'
import CustomPageHeader from '../../components/Layout/CustomPageHeader'
import { StyledContent } from '../styles'

interface ICompanyReadView {}

const CompanyReadView: React.FC<ICompanyReadView> = () => {
  return (
    <ScrollWrapper>
      <CustomPageHeader title={`Company`} />
      <StyledContent>
        <>Please add me</>
      </StyledContent>
    </ScrollWrapper>
  )
}

export default CompanyReadView
