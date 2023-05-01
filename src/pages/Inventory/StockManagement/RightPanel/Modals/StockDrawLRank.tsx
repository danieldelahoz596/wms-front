import { OModal } from '@/components/Globals/OModal';
import { moveInArray } from '@/utils/common';
import { QuestionCircleTwoTone } from '@ant-design/icons';
import { Row, Col, Typography, Card } from 'antd';
import React, { useEffect, useState } from 'react';
import { SortableContainer as Container, SortableElement } from 'react-sortable-hoc';

const SortableItem = SortableElement(({ value }) => <div style={{ zIndex: 99999 }}>{value}</div>);
const SortableContainer = Container(({ children }) => {
  return <div>{children}</div>;
});

interface IStockDrawRankModal {
  isOpen: boolean;
  vendorName: string;
  locations: any[];
  onClose: () => void;
  onSave: (items: any[]) => void;
}

const StockDrawRankModal: React.FC<IStockDrawRankModal> = ({ isOpen, vendorName, locations, onClose, onSave }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(locations);
  }, [locations]);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    const newItems = moveInArray(items, oldIndex, newIndex);
    setItems([...newItems]);
  };

  return (
    <OModal
      title="In-House Warehouse - Stock Draw Order"
      helpLink=""
      width={700}
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'close',
          type: 'default',
          btnLabel: 'Close',
          onClick: onClose,
        },
        {
          key: 'save',
          type: 'default',
          btnLabel: 'Save',
          onClick: () => onSave(items),
        },
      ]}
    >
      <>
        <Row justify="center">
          <Col>
            <h2>{vendorName}</h2>
          </Col>
        </Row>

        <Row justify="end">
          <Col>
            <a>{"What's this"}</a>
            <QuestionCircleTwoTone />
          </Col>
        </Row>

        <Typography style={{ marginTop: '5px' }}>
          <Typography.Paragraph
            style={{
              color: 'black',
              fontSize: '12px',
            }}
          >
            This stock is currently the only active warehouse stock for this product. skubana will therefore assign it the primary
            draw rank. <a>Tell me more.</a>
          </Typography.Paragraph>
        </Typography>

        <Card title="Stock Draw Order">
          <SortableContainer onSortEnd={onSortEnd}>
            {items.map((item, index) => (
              <SortableItem
                key={`item-${item.id}`}
                index={index}
                value={
                  <div style={{ display: 'flex', alignItems: 'center', margin: '0.2rem 0' }}>
                    <div>{index + 1}.</div>
                    <div style={{ border: '1px solid #ccc', padding: '0.5rem', flex: '1' }}>
                      {`${item.name} / Current Qty: ${item.available}`}
                    </div>
                  </div>
                }
              />
            ))}
          </SortableContainer>
        </Card>
      </>
    </OModal>
  );
};

export default StockDrawRankModal;
