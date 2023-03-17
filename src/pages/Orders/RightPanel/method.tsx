import type { IOButton } from '@/components/Globals/OButton';
import { OButton } from '@/components/Globals/OButton';
import { OInput } from '@/components/Globals/OInput';
import { CaretDownOutlined, ToolFilled } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Card, Form, Select, Space } from 'antd';
import { FC, useMemo } from 'react';

const fulfillmentOptions = [
  {
    value: 'directInHouse',
    label: 'Direct / In-House',
  },
  {
    value: '3rdpartylogistics',
    label: '3rd Party Logistics',
  },
  {
    value: 'dropshipvendor',
    label: 'Dropship Vendor',
  },
  {
    value: 'multichannelfulfillment',
    label: 'Multi-Channel Fulfillment',
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
  const { warehouseList } = useModel('warehouse');

  const warehouseOptions = useMemo(
    () =>
      warehouseList
        .filter((warehouse) => warehouse.status == true)
        .map((warehouse) => ({ value: warehouse.id, label: warehouse.name })),
    [warehouseList],
  );

  return (
    <>
      <div>
        <Form labelCol={{ span: 6 }}>
          <Form.Item label="Fulfillment" name="fulfillment">
            <Select defaultValue="directInHouse" options={fulfillmentOptions} />
          </Form.Item>
          <Form.Item label="Source" name="source">
            <Select options={warehouseOptions} />
          </Form.Item>
        </Form>
      </div>
      <hr style={{ borderTop: 1, borderTopStyle: 'dotted' }} />
      <div style={{ padding: '0.5rem 0' }}>
        <Space size={HORIZONTAL_SPACE_SIZE} className="button-row">
          {actionButtons.map((btn, index) => (
            <OButton key={index} {...btn} />
          ))}
        </Space>
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
          style={{ marginTop: 20 }}
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
        <Card title="Measurements" style={{ marginTop: 20 }}>
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
    </>
  );
};

export default Method;
