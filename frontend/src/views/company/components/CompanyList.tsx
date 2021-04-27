import { Col, Row, Table } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { ShowCompanyViewModel } from '../../../generated/api'

interface ICompanyList {
  companies: ShowCompanyViewModel[]
}

const columns = [
  {
    title: 'Company Name',
    dataIndex: 'name',
    key: 'companyName',
  },
  {
    title: 'Market Places',
    dataIndex: 'marketplaces',
    key: 'marketplaces',
    render: (places: string[]) => places.join(),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text: string, record: ShowCompanyViewModel) => (
      <span>
        <Link to={`/companies/${record.uuid}`}>Open</Link>
      </span>
    ),
  },
]

const CompanyList: React.FC<ICompanyList> = ({ companies }) => (
  <div>
    <Row>
      <Col xs={24}>
        <Table bordered dataSource={companies} rowKey={'uuid'} columns={columns} pagination={false} />
      </Col>
    </Row>
  </div>
)

export default CompanyList
