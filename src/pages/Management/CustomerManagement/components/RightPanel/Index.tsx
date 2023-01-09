import { OInput } from '@/components/Globals/OInput';
import { modalType } from '@/utils/helpers/types';
import { useModel } from '@umijs/max';
import { Button, Card, Col, Row, Space } from 'antd';
import MergeCustomer from './MergeCustomer';

export default function Index({ modalOpen }) {
  const { selectedCustomer, onChangeSelectedCustomer, handleUpdateCustomer, handleDeleteCustomer } =
    useModel('customer');

  let comp = null;
  if (modalOpen === modalType.Merge) {
    comp = <MergeCustomer />;
  } else if (selectedCustomer) {
    comp = (
      <Card
        size="small"
        title={
          <h3
            style={{
              fontSize: '1rem',
              textTransform: 'uppercase',
              fontWeight: '700',
              color: '#A2A2A2',
            }}
          >
            {selectedCustomer?.name}
          </h3>
        }
      >
        <Space direction="vertical">
          <div>
            <span>Phone *</span>
            <OInput
              type="text"
              name="phonenumber"
              onChange={onChangeSelectedCustomer}
              placeholder="Phone"
              defaultValue={selectedCustomer?.phonenumber}
            />
          </div>
          <div>
            <span>Card ID Number *</span>
            <OInput
              type="text"
              name="card_number"
              onChange={onChangeSelectedCustomer}
              placeholder="Card ID Number"
              defaultValue={selectedCustomer?.card_number}
            />
          </div>
          <div>
            <span>Name</span>
            <OInput
              type="text"
              name="name"
              onChange={onChangeSelectedCustomer}
              placeholder="Basic usage"
              defaultValue={selectedCustomer?.name ?? ''}
            />
          </div>
          <div>
            <span>Address</span>
            <OInput
              type="text"
              name="address"
              onChange={onChangeSelectedCustomer}
              placeholder="Address"
              defaultValue={selectedCustomer?.address}
            />
          </div>
          <div>
            <Button type="primary" onClick={handleUpdateCustomer}>
              Update
            </Button>{' '}
            <Button type="ghost" onClick={handleDeleteCustomer}>
              Delete
            </Button>
          </div>
        </Space>
      </Card>
    );
  }

  return (
    <Row>
      <Col span={24}>{comp}</Col>
    </Row>
  );
}
