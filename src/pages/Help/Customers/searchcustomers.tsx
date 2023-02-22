import { Card, Row, Col } from 'antd';

export default function () {
  return (
    <>
      <h2 className="page-title">Customers {'>'} Searching for Customers</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>How to Search Customers</h1>
            <p>
              The <b>Customers</b> module's search function allows you to search by any combination of Phone Number, Card ID
              Number, Name, City, and/or State/Province.{' '}
            </p>
            <h1>To Search for a Customer</h1>
            <ol>
              <li>
                <p>
                  On the toolbar, click the <b>Customers</b> Module.
                </p>
              </li>
              <li>
                <p>
                  On the Search Customers panel, enter the customer's details, then click{' '}
                  <i>
                    <b>Search</b>
                  </i>
                  . To narrow down your search, enter as much relevant information as possible.
                </p>
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502809/customers.PNG"
                  style={{ width: 250 }}
                />
              </li>
            </ol>
          </Card>
        </Col>
      </Row>
    </>
  );
}
