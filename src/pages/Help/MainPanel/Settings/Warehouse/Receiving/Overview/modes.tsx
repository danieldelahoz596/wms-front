import { Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>
        Settings {'>'} Warehouse {'>'} Receiving Modes
      </h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Receiving Modes</h1>
            <br />
            <p>
              There are 2 modes that the device / mobile app can operate in with Receiving. Speak to your Extensiv support rep to
              set your devices to either one
            </p>
            <h3>Single Bin Receiving</h3>
            <p>
              This mode requires the user to first scan the receiving location. After the receiving bin is scanned, it does not
              need to be set again unless the user wants to change the receiving bin. If you are receiving all of your products
              into a single location, this may be the best option for you.
            </p>
            <p>
              *Single bin receiving is only available on device versions 2.0.6177.23582 (2.00.86) or higher. Your device version
              can be found in the upper right hand corner of the login page on the device. The Mobile app and mobile.scoutsft.com
              pages are updated with these changes automatically.
            </p>
            <h3>Direct Put Away Receiving</h3>
            <p>
              This mode of receiving will prompt the user for the bin location for each part being received. This mode works best
              if you are receiving inventory directly into a shelf bin for example, since you will need to provide a separate bin
              scan for each part on the Receiving Order. This mode also utilizes the 'Put Away Bin' feature, which allows the user
              to specify a preferred bin location for a part.
            </p>
          </Card>
        </Col>
      </Row>
    </>
  );
}
