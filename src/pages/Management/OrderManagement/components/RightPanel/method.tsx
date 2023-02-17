import type { IOButton } from '@/components/Globals/OButton';
import { OButton } from '@/components/Globals/OButton';
import { OInput } from '@/components/Globals/OInput';
import { CaretDownOutlined, ToolFilled } from '@ant-design/icons';
import { Card, Form, Select } from 'antd';
import type { FC } from 'react';

const fulfillmentOptions = [
  {
    text: 'Direct/In-House',
    value: 'directInHouse',
  },
];

const sourceOptions = [
  {
    text: 'Office',
    value: 'office',
  },
];

const actionButtons: IOButton[] = [
  {
    btnText: 'Rate',
    type: 'primary',
    onClick: () => {},
  },
  {
    btnText: 'Save',
    type: 'primary',
    onClick: () => {},
  },
  {
    btnText: 'Queue',
    type: 'primary',
    onClick: () => {},
  },
  {
    btnText: 'Ship',
    type: 'primary',
    onClick: () => {},
  },
];

const Method: FC = () => {
  return (
    <>
      <div>
        <Form labelCol={{ span: 6 }}>
          <Form.Item label="Fulfillment" name="fulfillment">
            <Select defaultValue="directInHouse" options={fulfillmentOptions} />
          </Form.Item>
          <Form.Item label="Source" name="source">
            <Select defaultValue="office" options={sourceOptions} />
          </Form.Item>
        </Form>
      </div>
      <hr style={{ borderTop: 1, borderTopStyle: 'dotted' }} />
      <div style={{ padding: '0.5rem 0' }}>
        {actionButtons.map((btn, index) => (
          <OButton key={index} {...btn} style={{ marginLeft: 10 }} />
        ))}
        <div className="OModal" style={{ marginTop: 20 }}>
          <Card
            title={
              <div>
                Shipping
                <span style={{ color: 'blue', marginLeft: 10 }}>
                  {'('}
                  <ToolFilled style={{ border: 1, borderStyle: 'solid' }} />
                  <span
                    style={{
                      fontSize: 10,
                      marginLeft: 3,
                      borderBottom: 1,
                      borderBottomStyle: 'solid',
                    }}
                  >
                    {'Presets'}
                  </span>
                  <CaretDownOutlined style={{ color: 'gray' }} />
                  {')'}
                </span>
              </div>
            }
            style={{ marginRight: '.5rem' }}
          >
            <Form labelCol={{ span: 10 }} labelAlign="left">
              <Form.Item label="Request Provider">
                <Select defaultValue="UPS Amazon Partner" />
              </Form.Item>
              <Form.Item label="Service">
                <Select defaultValue="UPS Default" />
              </Form.Item>
              <Form.Item label="Package">
                <Select />
              </Form.Item>
              <Form.Item label="Confirm">
                <Select defaultValue="No Confirmation" />
              </Form.Item>
              <Form.Item label="Insurance">
                <Select defaultValue="No Insurance Provider" />
              </Form.Item>
            </Form>
          </Card>
        </div>
        <div className="OModal" style={{ marginTop: '1rem' }}>
          <Card title="Measurements" style={{ marginRight: '.5rem' }}>
            <div>
              <div>Weight:</div>
              <div style={{ display: 'flex', gap: '0.2rem', alignItems: 'center' }}>
                <OInput type="number" name="" onChange={() => {}} />
                <span>lbs.</span>
                <OInput type="number" name="" onChange={() => {}} />
                <span>oz.</span>
              </div>
            </div>
            <div>
              <div>Dimensions(inches):</div>
              <div style={{ display: 'flex', gap: '0.2rem', alignItems: 'center' }}>
                <OInput type="number" name="" onChange={() => {}} />
                <span>X</span>
                <OInput type="number" name="" onChange={() => {}} />
                <span>X</span>
                <OInput type="number" name="" onChange={() => {}} />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Method;
