import { Card, Row, Col, Button, Checkbox } from 'antd';
import { FormattedMessage } from '@umijs/max';

const EmailPreference: React.FC = () => {
  return (
    <Card title={<FormattedMessage id="app.settings.profile.email-preference.title" />} className="content-box" style={{ width: 600, marginTop: 10 }}>
      <Checkbox.Group style={{ width: '100%' }}>
        <Row>
          <Col span={12}>
            <Checkbox value="A" style={{ lineHeight: '32px' }}>
              <FormattedMessage id="app.settings.profile.email-preference.shipment-imports" />
            </Checkbox>
          </Col>
          <Col span={12}>
            <Checkbox value="B" style={{ lineHeight: '32px' }}>
              <FormattedMessage id="app.settings.profile.email-preference.orders-exports" />
            </Checkbox>
          </Col>
          <Col span={12}>
            <Checkbox value="C" style={{ lineHeight: '32px' }}>
              <FormattedMessage id="app.settings.profile.email-preference.fba-workflow-creation" />
            </Checkbox>
          </Col>
          <Col span={12}>
            <Checkbox value="D" style={{ lineHeight: '32px' }}>
              <FormattedMessage id="app.settings.profile.email-preference.skipped-orders" />
            </Checkbox>
          </Col>
          <Col span={12}>
            <Checkbox value="E" style={{ lineHeight: '32px' }}>
              <FormattedMessage id="app.settings.profile.email-preference.inventory-imports" />
            </Checkbox>
          </Col>
          <Col span={12}>
            <Checkbox value="F" style={{ lineHeight: '32px' }}>
              <FormattedMessage id="app.settings.profile.email-preference.inventory-min-alerts" />
            </Checkbox>
          </Col>
        </Row>
      </Checkbox.Group>

      <Row justify="end">
        <Button htmlType="submit">
          <FormattedMessage id="app.settings.profile.email-preference.update-preferences" />
        </Button>
      </Row>
    </Card>
  );
};

export default EmailPreference;
