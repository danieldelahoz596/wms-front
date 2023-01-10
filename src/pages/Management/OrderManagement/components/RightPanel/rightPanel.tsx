import { Alert, Card, Form } from 'antd';
import type { FC } from 'react';
import { Tabs } from 'antd';
import { OButton } from '@/components/Globals/OButton';
import Method from './method';
import { useModel } from '@umijs/max';
import { OInput } from '@/components/Globals/OInput';

const RightPanel: FC = () => {
  const { selectedOrders } = useModel('order');

  const onChange = (key: string) => {
    console.log(key);
  };

  const bulkUpdateTypes = [
    {
      text: 'Fulfillment Type',
      value: 'fulfillmentType',
    },
  ];

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

  const strongStyle = {
    color: '#5F5FFF',
  };

  let element = null;

  if (selectedOrders.length > 1) {
    element = (
      <>
        <Alert
          message={
            <div style={{ padding: '0.5rem' }}>
              <strong style={strongStyle}>{selectedOrders?.length} orders</strong> selected
              requesting <strong style={strongStyle}>STANDARD</strong> from{' '}
              <strong style={strongStyle}>2</strong> different countries.
            </div>
          }
          type="info"
          showIcon
          style={{ background: '#fff' }}
        />
        <div>
          <Form>
            <Form.Item
              label="Bulk Update: "
              style={{ margin: '1rem 0', paddingBottom: '1rem', borderBottom: '1px dashed black' }}
            >
              <OInput
                type="select"
                name="bulkUpdateType"
                defaultValue={'fulfillmentType'}
                options={bulkUpdateTypes}
              />
            </Form.Item>

            <Form.Item>
              <label>Fulfillment</label>
              <OInput
                type="select"
                name="fulfillment"
                defaultValue={'directInHouse'}
                options={fulfillmentOptions}
                onChange={() => {}}
                style={{ display: 'block', margin: '0.5rem 0' }}
              />
            </Form.Item>

            <Form.Item>
              <label>Source</label>
              <OInput
                type="select"
                name="source"
                defaultValue={'office'}
                options={sourceOptions}
                onChange={() => {}}
                style={{ display: 'block', margin: '0.5rem 0' }}
              />
            </Form.Item>
            <Form.Item>
              <OButton
                type="primary"
                htmlType="submit"
                btnText={'UPDATE SELECTED ORDERS'}
                style={{ width: '100%' }}
              />
            </Form.Item>
          </Form>
        </div>
      </>
    );
  } else if (selectedOrders.length === 1) {
    element = (
      <Tabs
        defaultActiveKey="1"
        onChange={onChange}
        items={[
          {
            label: 'Method',
            key: '1',
            children: <Method />,
          },
          {
            label: 'Recipient',
            key: '2',
            children: `Recipient`,
          },
        ]}
      />
    );
  }

  return (
    <>
      <Card
        title={
          <span
            style={{
              fontSize: '1rem',
              textTransform: 'uppercase',
              fontWeight: '700',
              color: '#A2A2A2',
            }}
          >
            Order Fulfillment
          </span>
        }
        size="small"
        style={{ width: '100%' }}
        tabProps={{ size: 'small' }}
      >
        {element}
      </Card>
    </>
  );
};

export default RightPanel;
