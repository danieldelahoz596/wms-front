import { Card, Row, Col } from 'antd';

export default function () {
  return (
    <>
      <h2>PurchaseOrders {'>'} Restoring a PO</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Restoring a PO</h1>
            <br />
            <p>
              Extensiv Order Manager allows you to restore Purchase Orders that have been canceled. Follow the steps below to
              restore a canceled P.O. that you now wish to process.
            </p>
            <ol>
              <li>
                Navigate to the <b>Purchasing</b> Module
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/image%2B_29_.png" />
              </li>
              <li>
                Select <b>Canceled</b> from the status pane to pull up your list of canceled purchase orders. Select the PO(s) you
                wish to restore, then click <b>Restore P.O</b>. from the top menu.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/image%2B_30_.png" />
              </li>
              <li>
                You will be prompted to confirm that you wish to restore the P.O.(s) you have selected. Click{' '}
                <b>Yes - Restore P.O.</b> to proceed.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/image%2B_31_.png" />
              </li>
              <li>
                A prompt will confirm the status of the of the PO that has been restored (ex. Pending Delivery). Click <b>OK</b>{' '}
                to finish.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/image%2B_32_.png" />
              </li>
            </ol>
          </Card>
        </Col>
      </Row>
    </>
  );
}
