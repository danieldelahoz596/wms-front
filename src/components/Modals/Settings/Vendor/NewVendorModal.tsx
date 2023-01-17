import { OModal } from '@/components/Globals/OModal';
import ManufacturerIcon from '@/utils/icons/manufacturer';
import TrainIcon from '@/utils/icons/train';
import { useModel } from '@umijs/max';
import { Row, Col, Input, Select, Checkbox, Card, Form } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { useState } from 'react';

const { Option } = Select;

export default function ({ isOpen, onSave, onClose }) {
  const [newVendor, setNewVendor] = useState({
    po_default: null,
    is_supplier: false,
    is_manufacturer: false,
  });
  const { createNewVendor } = useModel('vendor');
  const { poTemplateList } = useModel('poTemplate');
  const { paymentTermList } = useModel('paymentTerm');
  const { poFormatList } = useModel('poFormat');
  const { incotermList } = useModel('incoterm');

  const [form] = Form.useForm();

  const handleInputChange = (name: string, value: any) =>
    setNewVendor((prevState) => ({ ...prevState, [name]: value }));

  const handlePOInputChange = (name: string, value: any) =>
    setNewVendor((prevState) => ({
      ...prevState,
      po_default: {
        ...prevState.po_default,
        [name]: value,
      },
    }));

  const handleSave = () => {
    form.validateFields().then(() => {
      createNewVendor(newVendor);
      onSave();
    });
  };

  return (
    <OModal
      title="NEW VENDOR"
      centered
      isOpen={isOpen}
      handleCancel={onClose}
      className="OModal"
      buttons={[
        {
          key: 'back',
          type: 'default',
          btnLabel: 'Cancel',
          onClick: onClose,
        },
        {
          key: 'submit',
          type: 'primary',
          btnLabel: 'Save',
          onClick: handleSave,
        },
      ]}
      width={1000}
    >
      <Form form={form} style={{ width: '100%' }}>
        <Row gutter={12}>
          <Col span={12}>
            <Card title="BASIC INFO" style={{ padding: '0.5rem' }}>
              <Row className="pb-3">
                <Col span={4}>Name:</Col>
                <Col span={20}>
                  <Input
                    placeholder="Name"
                    onChange={(e) => handleInputChange('name', e.target.value)}
                  />
                </Col>
              </Row>
              <Row className="pb-3">
                <Col span={4}>Address:</Col>
                <Col span={20}>
                  <TextArea
                    rows={4}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                  />
                </Col>
              </Row>
              <Row className="pb-3">
                <Col span={4}>City</Col>
                <Col span={20}>
                  <Input
                    placeholder="City"
                    onChange={(e) => handleInputChange('city', e.target.value)}
                  />
                </Col>
              </Row>
              <Row className="pb-3">
                <Col span={4}>State/Zip</Col>
                <Col span={10}>
                  <Select
                    style={{ width: '100%' }}
                    onChange={(value) => handleInputChange('state', value)}
                  >
                    <Option value="State 1">Alabama</Option>
                    <Option value="State 2">Alabama</Option>
                    <Option value="State 3">Alaska</Option>
                    <Option value="">Alabama</Option>
                    <Option value="">Alaska</Option>
                    <Option value="">Arizona</Option>
                    <Option value="">Arkansas</Option>
                    <Option value="">California</Option>
                    <Option value="">Colorado</Option>
                    <Option value="">Connecticut</Option>
                    <Option value="">Delaware</Option>
                    <Option value="">Florida</Option>
                    <Option value="">Georgia</Option>
                    <Option value="">Hawaii</Option>
                    <Option value="">Idaho</Option>
                    <Option value="">IllinoisIndiana</Option>
                    <Option value="">Iowa</Option>
                    <Option value="">Kansas</Option>
                    <Option value="">Kentucky</Option>
                    <Option value="">Louisiana</Option>
                    <Option value="">Maine</Option>
                    <Option value="">Maryland</Option>
                    <Option value="">Massachusetts</Option>
                    <Option value="">Michigan</Option>
                    <Option value="">Minnesota</Option>
                    <Option value="">Mississippi</Option>
                    <Option value="">Missouri</Option>
                    <Option value="">Montana</Option>
                    <Option value="">Nebraska</Option>
                    <Option value="">Nevada</Option>
                    <Option value="">New Hampshire</Option>
                    <Option value="">New Jersey</Option>
                    <Option value="">New Mexico</Option>
                    <Option value="">New York</Option>
                    <Option value="">North Carolina</Option>
                    <Option value="">North Dakota</Option>
                    <Option value="">Ohio</Option>
                    <Option value="">Oklahoma</Option>
                    <Option value="">Oregon</Option>
                    <Option value="">PennsylvaniaRhode Island</Option>
                    <Option value="">South Carolina</Option>
                    <Option value="">South Dakota</Option>
                    <Option value="">Tennessee</Option>
                    <Option value="">Texas</Option>
                    <Option value="">Utah</Option>
                    <Option value="">Vermont</Option>
                    <Option value="">Virginia</Option>
                    <Option value="">Washington</Option>
                    <Option value="">West Virginia</Option>
                    <Option value="">Wisconsin</Option>
                    <Option value="">Wyoming</Option>
                  </Select>
                </Col>
                <Col span={10}>
                  <Input
                    placeholder="Zip"
                    onChange={(e) => handleInputChange('zip', e.target.value)}
                  />
                </Col>
              </Row>
              <Row className="pb-3">
                <Col span={4}>Phone 1</Col>
                <Col span={20}>
                  <Input
                    placeholder="Phone 1"
                    onChange={(e) => handleInputChange('phone1', e.target.value)}
                  />
                </Col>
              </Row>
              <Row className="pb-3">
                <Col span={4}>Phone 2</Col>
                <Col span={20}>
                  <Input
                    placeholder="Phone 2"
                    onChange={(e) => handleInputChange('phone2', e.target.value)}
                  />
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={12}>
            <Card title="SERVICES" style={{ padding: '0.5rem' }}>
              <Form.Item name="is_supplier">
                <Row className="pb-3">
                  <Col span={24}>
                    <Row align="middle" style={{ justifyContent: 'start' }}>
                      <Col span={2}>
                        <Row style={{ justifyContent: 'center' }}>
                          <TrainIcon />
                        </Row>
                      </Col>
                      <Col span={22}>
                        <Checkbox
                          onChange={(e) => {
                            form.validateFields();
                            handleInputChange('is_supplier', e.target.checked);
                          }}
                        >
                          This vendor is a supplier
                        </Checkbox>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Form.Item>
              <Form.Item
                name="is_manufacturer"
                rules={[
                  {
                    validator: async () => {
                      if (!newVendor.is_supplier && !newVendor.is_manufacturer) {
                        return Promise.reject(
                          new Error('At least the supplier or manufacturer should be checked'),
                        );
                      }
                    },
                  },
                ]}
              >
                <Row className="pb-3">
                  <Col span={24}>
                    <Row align="middle" style={{ justifyContent: 'start' }}>
                      <Col span={2}>
                        <Row style={{ justifyContent: 'center' }}>
                          <ManufacturerIcon />
                        </Row>
                      </Col>
                      <Col span={22}>
                        <Checkbox
                          onChange={(e) => handleInputChange('is_manufacturer', e.target.checked)}
                        >
                          This vendor is a manufacturer
                        </Checkbox>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Form.Item>
            </Card>
            <Card title="P.O DEFAULTS" style={{ marginTop: '1rem', padding: '0.5rem' }}>
              <Row className="pb-3">
                <Col span={4}>P.O Template:</Col>
                <Col span={20}>
                  <Select
                    placeholder="Select..."
                    style={{ width: '100%' }}
                    onChange={(value) => handlePOInputChange('template', value)}
                  >
                    {poTemplateList.map((_item, _index) => (
                      <Option key={_index} value={_item.value}>
                        {_item.text}
                      </Option>
                    ))}
                  </Select>
                </Col>
              </Row>
              <Row className="pb-3">
                <Col span={4}>P.O Email</Col>
                <Col span={20}>
                  <Input
                    placeholder="Email"
                    onChange={(e) => handlePOInputChange('email', e.target.value)}
                  />
                </Col>
              </Row>
              <Row className="pb-3">
                <Col span={4}>P.O Fax</Col>
                <Col span={20}>
                  <Input
                    placeholder="Fax"
                    onChange={(e) => handlePOInputChange('fax', e.target.value)}
                  />
                </Col>
              </Row>
              <Row className="pb-3">
                <Col span={4}>P.O Format:</Col>
                <Col span={20}>
                  <Select
                    placeholder="Please select"
                    style={{ width: '100%' }}
                    onChange={(value) => handlePOInputChange('format', value)}
                  >
                    {poFormatList.map((_item) => (
                      <Option key={_item.id} value={_item.id}>
                        {_item.value}
                      </Option>
                    ))}
                  </Select>
                </Col>
              </Row>
              <Row className="pb-3">
                <Col span={4}>Incoterm:</Col>
                <Col span={20}>
                  <Select
                    placeholder="Please select"
                    style={{ width: '100%' }}
                    onChange={(value) => handlePOInputChange('incoterm', value)}
                  >
                    {incotermList.map((_item) => (
                      <Option key={_item.id} value={_item.id}>
                        {_item.value}
                      </Option>
                    ))}
                  </Select>
                </Col>
              </Row>
              <Row className="pb-3">
                <Col span={4}>Payment term:</Col>
                <Col span={20}>
                  <Select
                    placeholder="Please select"
                    style={{ width: '100%' }}
                    onChange={(value) => handlePOInputChange('payment_term', value)}
                  >
                    {paymentTermList.map((_item) => (
                      <Option key={_item.id} value={_item.value}>
                        {_item.text}
                      </Option>
                    ))}
                  </Select>
                </Col>
              </Row>
              <Row className="pb-3">
                <Col span={4}>Item Tax:</Col>
                <Col span={4}>
                  <Input
                    placeholder="0"
                    onChange={(e) => handlePOInputChange('item_tax', e.target.value)}
                  />
                </Col>
                <Col span={2}>&nbsp;&nbsp; %</Col>
                <Col span={6}>&nbsp;</Col>
                <Col span={4}>P.O L.T.R:</Col>
                <Col span={4}>
                  <Checkbox onChange={(e) => handlePOInputChange('ltr', e.target.checked)} />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Form>
    </OModal>
  );
}
