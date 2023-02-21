import { OModal } from '@/components/Globals/OModal';
import { Card } from 'antd';
import { useState } from 'react';
import { sortableContainer, sortableElement } from 'react-sortable-hoc';
import { moveInArray } from '@/utils/common';

interface IRankOrderModal {
  isOpen: boolean;
  onSave: () => void;
  onClose: () => void;
}

const SortableItem = sortableElement(({ value }) => <div style={{ zIndex: 99999 }}>{value}</div>);
const SortableContainer = sortableContainer(({ children }) => {
  return <div>{children}</div>;
});

const RankOrderModal: React.FC<IRankOrderModal> = ({ isOpen, onSave, onClose }) => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Test Warehouse',
    },
    {
      id: 2,
      name: 'Manufacturer Warehouse',
    },
    {
      id: 3,
      name: 'FBA',
    },
    {
      id: 4,
      name: "Jef's Warehouse",
    },
    {
      id: 5,
      name: '6006 Warehouse',
    },
    {
      id: 6,
      name: "Alex's Warehouse",
    },
    {
      id: 7,
      name: "Skubana's 3PL",
    },
    {
      id: 8,
      name: "Sam's Warehouse",
    },
    {
      id: 9,
      name: 'Skubana Warehouse',
    },
  ]);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    const newItems = moveInArray(items, oldIndex, newIndex);
    setItems([...newItems]);
  };

  return (
    <OModal
      title="International Shipping Warehouse Order"
      helpLink=""
      width={600}
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
          btnLabel: 'SAVE CHANGES',
          onClick: onSave,
        },
      ]}
    >
      <>
        <Card title="INTERNATIONAL RANK ORDER">
          <div style={{ marginBottom: '1rem' }}>
            International orders will be assigned to the warehouse set as Rank 1. Orderbots can
            override this assignment automatically.
          </div>
          <SortableContainer onSortEnd={onSortEnd}>
            {items.map((item, index) => (
              <SortableItem
                key={`item-${item.id}`}
                index={index}
                value={
                  <div style={{ display: 'flex', alignItems: 'center', margin: '0.2rem 0' }}>
                    <div>{index + 1}.</div>
                    <div style={{ border: '1px solid #ccc', padding: '0.5rem', flex: '1' }}>
                      {item.name}
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

export default RankOrderModal;
