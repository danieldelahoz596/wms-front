import { OButton } from '@/components/Globals/OButton';
import { OInput } from '@/components/Globals/OInput';
import { Card, Space, Form } from 'antd';

const PerformancePanel: React.FC = () => {
  return (
    <Card
      title="Performance"
      extra={
        <Space size={4}>
          <OButton type="primary" btnText={'Year-Over-Year'} />
          <OButton type="primary" btnText={'Recent Orders'} />
        </Space>
      }
    >
      <Form style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
        <Form.Item>
          <OInput
            type="select"
            name="days"
            defaultValue={'30'}
            options={[
              {
                value: '30',
                text: '30 Days',
              },
            ]}
            onChange={() => {}}
          />
        </Form.Item>
        <Form.Item>
          <OInput
            type="select"
            name="quantity"
            defaultValue={'30'}
            options={[
              {
                value: 'quantitySold',
                text: 'Quantity Solds',
              },
            ]}
            onChange={() => {}}
          />
        </Form.Item>
      </Form>
      <div style={{ textAlign: 'center', padding: '1rem' }}>
        Select a product to view performance
      </div>
    </Card>
  );
};

export default PerformancePanel;
