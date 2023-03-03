import { Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>
        Settings {'>'} Warehouse {'>'} Google Chrome Printing Addon
      </h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Google Chrome Printing Addon</h1>
            <br />
            <p>
              When using the mobile.scoutsft.com page on your PC with Google Chrome, you will be prompted to install an add-on
              during the first visit to the page:
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671284435971-1%2BAddon1.png" />
            <p>Click 'Yes' to this prompt to install the Chrome printing add-on.</p>
            <br />
            <p>Next, you will be prompted by Google Chrome to automatically add the extension. Click 'Add Extension':</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671284456101-2%2Baddon2.png" />
          </Card>
        </Col>
      </Row>
    </>
  );
}
