import { Card, Row, Col, Alert } from 'antd';

export default function () {
  return (
    <>
      <h2>PurchaseOrders {'>'} Updating PO Number Prefix</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Updating PO Number Prefix</h1>
            <br />
            <p>To add a PO number prefix, follow the instructions below.</p>
            <ol>
              <li>
                On the toolbar, click <b>Settings</b>.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503680/settings__2_.png" />
              </li>
              <li>
                On the <b>Settings</b> page, on the left sidebar, click <b>Company Info.</b>
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503682/settings__3_.png" />
              </li>
              <li>
                On the <b>Purchase Order Settings</b> section at the bottom, enter your preferred PO Number Prefix. For example,
                if you put OM as the prefix, OM will be added to the PO number every time a PO is generated. Thus, your first PO
                number will read as OM1000, instead of just 1000, which would be the case if the PO number prefix remains blank.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503683/image__5_.png" />
              </li>
              <li>
                Click <b>Update</b>.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503684/settings__4_.png" />
              </li>
            </ol>
            <Alert
              message="Note"
              description="This is the only place in Extensiv Order Manager to customize PO numbers. That means that you cannot use different PO prefixes conditionally. All POs created regardless of Vendor/Warehouse will have this prefix."
            />
          </Card>
        </Col>
      </Row>
    </>
  );
}
