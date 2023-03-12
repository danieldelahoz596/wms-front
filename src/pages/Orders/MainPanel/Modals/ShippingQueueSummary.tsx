import { OModal } from '@/components/Globals/OModal';
import { CaretDownFilled } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Row, Col, Progress, Button, Space, Dropdown } from 'antd';
import { useCallback } from 'react';

interface IShippingQueueSummaryModal {
  isOpen: boolean;
  onClose: () => void;
}

const ShippingQueueSummaryModal: React.FC<IShippingQueueSummaryModal> = ({ isOpen, onClose }) => {
  const { shippingQueue, orderList, setOrderList } = useModel('order');

  const handleCompleteBatch = useCallback(() => {
    setOrderList(orderList.map((order) => (shippingQueue.includes(order.id) ? { ...order, order_status: 5 } : order)));
  }, [setOrderList, shippingQueue, orderList]);

  return (
    <OModal
      title="Shipping Queue Summary"
      width={MODAL_WIDTH}
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'back',
          type: 'default',
          btnLabel: 'Close',
          onClick: onClose,
        },
      ]}
    >
      <>
        <Row align="middle">
          <Col span={12}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div>
                <Progress type="circle" percent={100} format={(percent) => `${percent}%`} />
                <p>
                  {shippingQueue.length} out of {shippingQueue.length} orders processed
                </p>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <h3 style={{ color: 'green' }}>All orders shipped successfully!</h3>
            <Space direction="vertical" size={VERTICAL_SPACE_SIZE}>
              <Space size={HORIZONTAL_SPACE_SIZE}>
                <Button onClick={() => handleCompleteBatch()}>Complete The Batch</Button>
                <Dropdown
                  menu={{
                    items: [
                      {
                        key: '1',
                        label: <span>Pick Lists</span>,
                      },
                      {
                        key: '2',
                        label: <span>Packing Slips</span>,
                      },
                      {
                        key: '3',
                        label: <span>Shipping Labels</span>,
                      },
                    ],
                  }}
                >
                  <Button size="small">
                    <Space>
                      Print <CaretDownFilled />
                    </Space>
                  </Button>
                </Dropdown>
              </Space>
              <Button onClick={() => handleCompleteBatch()}>Download and Complete The Batch</Button>
            </Space>
          </Col>
        </Row>
      </>
    </OModal>
  );
};

export default ShippingQueueSummaryModal;
