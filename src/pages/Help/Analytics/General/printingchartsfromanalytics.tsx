import { Card, Row, Col } from 'antd';

export default function () {

  return (
    <>
      <h2>Analytics {'>'} General {'>'} Printing Charts from Analytics</h2>
      <Row>
        <Col span={24}>
          <Card>
            <p>The <strong>Analytics</strong> module allows printing of any chart within a report. You can also download an image (in any of three formats) and a PDF copy of a chart.</p>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504364/analytics__20_.png' style={{ width: 1000 }} />
            <br /><br /><br />
            <h1>To Print a Chart</h1>
            <ol>
                <li>
                    <p>Generate a report containing a chart, e.g. <i>Year-Over-Year, or Y-O-Y, Growth</i> report.</p>
                </li>
                <li>
                    <p>Look for the <strong>Print</strong> menu on the top right of the chart.</p>
                </li>
                <li>
                    <p>Click <i><strong>Print chart</strong></i>.</p>
                </li>
                <li>
                    <p>On the Print box, click <i><strong>Print</strong></i>.</p>
                </li>
            </ol>
            <h1>To Download a Chart</h1>
            <ol>
                <li>
                    <p>Generate a report containing a chart, e.g. <i>Year-Over-Year, or Y-O-Y, Growth</i> report.</p>
                </li>
                <li>
                    <p>Look for the <strong>Print</strong> menu on the top right of the chart.</p>
                </li>
                <li>
                    <p>Click any of the four options, e.g. <i>PNG, JPEG, PDF or SVG,</i> to download a copy of the chart in the selected format.</p>
                </li>
                <li>
                    <p>On the Print box, click <i><strong>Print</strong></i>.</p>
                </li>
            </ol>
          </Card>
        </Col>
      </Row>
    </>
  );
};
