import { Card, Row, Col } from 'antd';

export default function () {
  return (
    <>
      <h2>
        Settings {'>'} Vendors {'>'} Search
      </h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Search for Vendors</h1>
            <br />
            <p>
              Extensiv Order Manager allows searching for vendor records from within the <b>Settings</b> module. This is
              particularly useful when you have more vendors than what can be shown on the <b>Orders</b> page.
            </p>
            <ol>
              <li>
                On the toolbar, click{' '}
                <b>
                  <i>Settings</i>
                </b>
                .
              </li>
              <li>
                On the left sidebar, click{' '}
                <b>
                  <i>Vendors</i>
                </b>
                .
              </li>
              <li>
                On the <b>Vendors</b> page, enter the vendor name on the <b>Search</b> box at the top, then click the{' '}
                <b>
                  <i>Search</i>
                </b>{' '}
                icon to the right of the box. The search result is then displayed directly below the <b>Search</b> box.
              </li>
            </ol>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504717/vendor.png" />
          </Card>
        </Col>
      </Row>
    </>
  );
}
