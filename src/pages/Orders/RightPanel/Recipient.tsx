import { OButton } from '@/components/Globals/OButton';
import { CheckOutlined } from '@ant-design/icons';
import { Form, Input } from 'antd';
import type { FC } from 'react';

const Recipient: FC = () => {
  return (
    <>
      <div style={{ display: 'flex', gap: 10 }}>
        <OButton btnText="Validate" />
        <OButton btnText="Save" />
      </div>

      <div className="OModal" style={{ marginTop: 20 }}>
        <Form labelAlign="left" labelCol={{ span: 8 }}>
          <Form.Item label="Name">
            <Input size="small" placeholder="Required" />
          </Form.Item>
          <Form.Item label="Company">
            <Input size="small" />
          </Form.Item>
          <Form.Item label="Address">
            <Input size="small" placeholder="Required" />
          </Form.Item>
          <Form.Item label=" ">
            <Input size="small" />
          </Form.Item>
          <Form.Item label=" ">
            <Input size="small" />
          </Form.Item>
          <Form.Item label="City">
            <Input size="small" placeholder="Required" />
          </Form.Item>
          <Form.Item label="State, Zip">
            {/* <Input.Group compact>
              <div style={{ display: 'flex', gap: 10 }}>
                <Form.Item>
                  <Input size="small" />
                </Form.Item>
                <Form.Item>
                  <Input size="small" />
                </Form.Item>
              </div>
            </Input.Group> */}
            <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 4px)' }}>
              <Input size="small" />
            </Form.Item>
            <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 4px)', margin: '0 0 0 8px' }}>
              <Input size="small" placeholder="Required" />
            </Form.Item>
          </Form.Item>
          <Form.Item label="Country">
            <Input size="small" />
          </Form.Item>
          <Form.Item label="Phone">
            <Input size="small" />
          </Form.Item>
          <Form.Item label="Email">
            <Input size="small" />
          </Form.Item>
        </Form>
        <h3 style={{ textAlign: 'center', marginTop: 10 }}>
          <CheckOutlined style={{ color: 'green' }} />
          Address Verified
        </h3>
      </div>
    </>
  );
};

export default Recipient;
