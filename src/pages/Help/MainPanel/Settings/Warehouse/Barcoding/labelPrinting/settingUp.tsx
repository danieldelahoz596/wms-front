import { Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>
        Settings {'>'} Warehouse {'>'} Setting up your label printer
      </h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Setting up your label printer</h1>
            <br />
            <p>
              Once you have decided on what label printer you are using and have plugged it in and it is pulling an IP address
              (Label printers must be networked), You can manage your network label printers from the Admin - Label Printers
              section. Click 'Add' to bring up the dialog box:
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671288018067-1%2Blabelprint.png" />
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671288030461-2%2BLabel_Printer_settings.png" />
            <p>Note: For the IP address, please omit the leading 0's from the IP address.</p>
            <p>Here is a video that better describes how to set up your printer.</p>
            <iframe src="https://youtu.be/Js2tBM3iIk4?list=UU6O-7xotfG7JamgRKul6ZoA" />
          </Card>
        </Col>
      </Row>
    </>
  );
}
