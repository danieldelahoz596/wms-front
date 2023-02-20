import { OModal } from '@/components/Globals/OModal';
import ManufacturerIcon from '@/utils/icons/manufacturer';
import TrainIcon from '@/utils/icons/train';
import { useModel } from '@umijs/max';
import { Row, Col, Input, Select, Checkbox, Card, Form } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { useState } from 'react';

interface INewVendorModal {
  isOpen: boolean;
  onSave: () => void;
  onClose: () => void;
}

const NewVendorModal: React.FC<INewVendorModal> = ({ isOpen, onSave, onClose }) => {
  const [newVendor, setNewVendor] = useState({
    po_default: null,
    is_supplier: false,
    is_manufacturer: false,
  });
  const { createNewVendor } = useModel('vendor');
  const { poTemplateList } = useModel('poTemplate');
  const { paymentTermList } = useModel('paymentTerm');

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
      title="New Vendor"
      helpLink=""
      isOpen={isOpen}
      handleCancel={onClose}
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
            <Card title="Basic Info" style={{ padding: '0.5rem' }}>
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
                    size="small"
                    style={{ width: '100%' }}
                    onChange={(value) => handleInputChange('state', value)}
                    options={[]}
                  />
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
            <Card title="Services" style={{ padding: '0.5rem' }}>
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
            <Card title="P.O. Defaults" style={{ marginTop: '1rem', padding: '0.5rem' }}>
              <Row className="pb-3">
                <Col span={4}>P.O Template:</Col>
                <Col span={20}>
                  <Select
                    placeholder="Select..."
                    size="small"
                    style={{ width: '100%' }}
                    onChange={(value) => handlePOInputChange('template', value)}
                    options={poTemplateList.map((_item) => ({
                      value: _item.value,
                      label: _item.text,
                    }))}
                  />
                </Col>
              </Row>
              <Row className="pb-3">
                <Col span={4}>P.O Format:</Col>
                <Col span={20}>
                  <Select
                    placeholder="Please select"
                    size="small"
                    style={{ width: '100%' }}
                    options={[
                      { value: 'PDF', label: 'PDF Attachment' },
                      { value: 'HTML', label: 'HTML Attachment' },
                    ]}
                  />
                </Col>
              </Row>
              <Row className="pb-3">
                <Col span={4}>Payment term:</Col>
                <Col span={20}>
                  <Select
                    placeholder="Please select"
                    size="small"
                    style={{ width: '100%' }}
                    onChange={(value) => handlePOInputChange('payment_term', value)}
                    options={paymentTermList.map((_item) => ({
                      value: _item.value,
                      label: _item.text,
                    }))}
                  />
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
};

export default NewVendorModal;
