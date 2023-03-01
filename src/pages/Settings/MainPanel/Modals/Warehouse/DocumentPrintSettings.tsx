import { OModal } from '@/components/Globals/OModal';
import { QuestionCircleTwoTone } from '@ant-design/icons';
import { FormattedMessage } from '@umijs/max';
import { Card, Checkbox, Col, Form, Input, Row, Select, Tabs } from 'antd';

interface IDocumentPrintSettingsModal {
  isOpen: boolean;
  onSave: () => void;
  onClose: () => void;
}

const DocumentPrintSettingsModal: React.FC<IDocumentPrintSettingsModal> = ({ isOpen, onSave, onClose }) => {
  return (
    <OModal
      title={<FormattedMessage id="pages.settings.warehouses.documentPrintSettings.title" />}
      helpLink=""
      width={600}
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'back',
          type: 'default',
          btnLabel: <FormattedMessage id="component.button.close" />,
          onClick: onClose,
        },
        {
          key: 'submit',
          type: 'primary',
          btnLabel: <FormattedMessage id="component.button.saveChanges" />,
          onClick: onSave,
        },
      ]}
    >
      <>
        <Tabs
          defaultActiveKey="1"
          items={[
            {
              label: <FormattedMessage id="component.tab.shippingLabels" />,
              key: '1',
              children: (
                <>
                  <Card title={<FormattedMessage id="component.card.title.labelPrintFormat" />}>
                    <p>
                      <FormattedMessage id="pages.settings.warehouses.documentPrintSettings.labelPrintFormat.description" />
                    </p>
                  </Card>
                  <Card title={<FormattedMessage id="component.card.title.labelPrintOptions" />}>
                    <Form>
                      <Form.Item label={<FormattedMessage id="component.form.label.orderLabelsBy" />}>
                        <Select size="small" defaultValue="0" options={[{ value: 0, label: 'None - as selected' }]} />
                      </Form.Item>
                      <Form.Item label={<FormattedMessage id="component.form.label.labelMessages" />}>
                        <p>
                          <FormattedMessage id="pages.settings.warehouses.documentPrintSettings.labelMessages.description" />
                        </p>
                        <Input.Group compact style={{ display: 'flex', alignItems: 'center' }}>
                          <Form.Item noStyle>
                            <Input style={{ width: '30%', marginRight: '0.2rem' }} />
                          </Form.Item>
                          |
                          <Form.Item noStyle>
                            <Input style={{ width: '30%', margin: '0 0.2rem' }} />
                          </Form.Item>
                          |
                          <Form.Item noStyle>
                            <Input style={{ width: '30%', marginLeft: '0.2rem' }} />
                          </Form.Item>
                        </Input.Group>
                      </Form.Item>
                      <Form.Item label={<FormattedMessage id="component.form.label.shippingCutoff" />}>
                        <Row>
                          <Col span={2}>
                            <Checkbox />
                          </Col>
                          <Col span={16}>
                            <div>
                              <FormattedMessage id="pages.settings.warehouses.documentPrintSettings.shippingCutoff.description" />
                              :
                            </div>
                          </Col>
                          <Col span={6}>
                            <Select size="small" defaultValue="12am" options={[{ value: '12am', label: '12:00 AM' }]} />
                          </Col>
                        </Row>
                      </Form.Item>
                      <Form.Item label={<FormattedMessage id="component.form.label.cutoffTimezone" />}>
                        <FormattedMessage id="pages.settings.warehouses.documentPrintSettings.cutoffTimezone.description" />{' '}
                        <QuestionCircleTwoTone />
                      </Form.Item>
                    </Form>
                  </Card>
                </>
              ),
            },
            {
              label: <FormattedMessage id="component.tab.packingSlips" />,
              key: '2',
              children: (
                <>
                  <Card title={<FormattedMessage id="component.card.title.packingSlipFormat" />}>
                    <p>
                      <FormattedMessage id="pages.settings.warehouses.documentPrintSettings.packingSlipFormat.description" />
                    </p>
                  </Card>
                  <Card title={<FormattedMessage id="component.card.title.packingSlipOptions" />}>
                    <Form labelCol={{ span: 16 }} wrapperCol={{ span: 8 }}>
                      <Form.Item label={<FormattedMessage id="component.form.label.orderItemsBy" />}>
                        <Select size="small" defaultValue="0" options={[{ value: 0, label: 'Master SKU' }]} />
                      </Form.Item>
                      <Form.Item label={<FormattedMessage id="component.form.label.useLabelOrdering" />}>
                        <Checkbox />
                      </Form.Item>
                      <Form.Item label={<FormattedMessage id="component.form.label.packingSlip" />}>
                        <Checkbox />
                      </Form.Item>

                      <Form.Item label={<FormattedMessage id="component.form.label.breakDownBundles" />}>
                        <Checkbox />
                      </Form.Item>
                    </Form>
                    <p style={{ color: '#4e4e4e' }}>
                      <FormattedMessage id="pages.settings.warehouses.documentPrintSettings.packingSlipOptions.description" />
                    </p>
                  </Card>
                </>
              ),
            },
            {
              label: <FormattedMessage id="component.tab.pickLists" />,
              key: '3',
              children: (
                <>
                  <Card title={<FormattedMessage id="component.tab.packingSlipOptions" />}>
                    <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                      <Form.Item label={<FormattedMessage id="component.form.label.orderItemsBy" />}>
                        <Select size="small" defaultValue="0" options={[{ value: 0, label: 'Master SKU' }]} />
                      </Form.Item>
                      <Form.Item label={<FormattedMessage id="component.form.label.productImages" />}>
                        <Checkbox defaultChecked />
                        <FormattedMessage id="pages.settings.warehouses.documentPrintSettings.productImages.description" />
                      </Form.Item>
                      <Form.Item label={<FormattedMessage id="component.form.label.orderNumbers" />}>
                        <Checkbox defaultChecked />
                        <FormattedMessage id="pages.settings.warehouses.documentPrintSettings.orderNumbers.description" />
                      </Form.Item>
                      <Form.Item label={<FormattedMessage id="component.form.label.bundlesKits" />}>
                        <Checkbox />
                        <FormattedMessage id="pages.settings.warehouses.documentPrintSettings.bundlesKits.description" />
                      </Form.Item>
                      <Form.Item label={<FormattedMessage id="component.form.label.productUPC" />}>
                        <Checkbox defaultChecked />
                        <FormattedMessage id="pages.settings.warehouses.documentPrintSettings.productUPC.description" />
                      </Form.Item>
                      <Form.Item label={<FormattedMessage id="component.form.label.fnsku" />}>
                        <Checkbox defaultChecked />
                        <FormattedMessage id="pages.settings.warehouses.documentPrintSettings.fnsku.description" />
                      </Form.Item>
                      <Form.Item label={<FormattedMessage id="component.form.label.otherItemNotes" />}>
                        <Checkbox />
                        <FormattedMessage id="pages.settings.warehouses.documentPrintSettings.otherItemNotes.description" />
                      </Form.Item>
                    </Form>
                  </Card>
                </>
              ),
            },
          ]}
        />
      </>
    </OModal>
  );
};

export default DocumentPrintSettingsModal;
