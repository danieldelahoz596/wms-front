import { Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>Shipments {'>'} How do I print an End of Day form or Package Level Detail report for UPS shipments?</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>How do I print an End of Day form or Package Level Detail report for UPS shipments?</h1>
            <br />
            <p>
              All shipping transactions in Extensiv Order Manager are recorded under our <b>Shipments</b> module. This is where
              you can print your <b>UPS End of Day</b> form. We keep records of your shipping information for 30 days, so you can
              reprint your <b>End of Day</b> form for any of those days, if required.
            </p>
            <p>
              However, for your convenience, you may choose <b>NOT</b> to print the <b>End of Day</b> form anymore since Extensiv
              Order Manager transmits all the shipping information for your packages directly to UPS when you print your shipping
              labels. The package icon at the bottom right-hand corner of each UPS shipping label that you print indicates that
              the package has been pre-scanned and that the <b>End of the Day</b> form as well as the <b>Package Level Detail</b>
              has been transmitted to UPS.
            </p>
            <p>
              If a UPS driver asks for the <b>End of Day</b> form, tell them that Extensiv Order Manager sends the shipping
              information directly to UPS when it prints your shipping labels.
            </p>
            <p>As a UPS Ready® Program member. Skubana utilizes the UPS API to send the shipping information directly to UPS.</p>
          </Card>
        </Col>
      </Row>
    </>
  );
}
