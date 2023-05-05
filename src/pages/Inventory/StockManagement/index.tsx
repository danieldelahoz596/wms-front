import { cn, SampleSplitter } from '@/components/Globals/SampleSplitter';
import { useEffect, useState } from 'react';
import { useResizable } from 'react-resizable-layout';
import StockDetailsPanel from './RightPanel';
import MainPanel from './MainPanel';
import { useModel } from '@umijs/max';

interface IStockManagement {
  tabButtons: React.ReactNode;
}

export const data = [
  {
    key: 1,
    type: 'Core Product',
    master_sku: '1234',
    name: 'Water Bottle',
    brand: 'RUTGERS',
    description: '',
    on_hands: '3,934',
    locked: '191',
    allocated: '0',
    in_transfer: '0',
    available: '3,543',
    discrepation: '0',
    status: 'yellow',
  },
  {
    key: 2,
    type: 'Variation Core Product',
    master_sku: 'SUNGLASS...',
    name: 'Sterling Silve...',
    brand: 'PAPER HEART IN...',
    description: '',
    on_hands: '5,174',
    locked: '20',
    allocated: '10',
    in_transfer: '0',
    available: '5,134',
    discrepation: '0',
    status: 'green',
  },
  {
    key: 3,
    type: 'Variations',
    master_sku: '10068902',
    name: 'Sterling Silve...',
    brand: 'YOYO',
    description: '',
    on_hands: '21,497',
    locked: '1,470',
    allocated: '100',
    in_transfer: '25',
    available: '19,913',
    discrepation: '0',
    status: 'red',
  },
  {
    key: 4,
    type: 'Bundle or Kit',
    master_sku: '10068935',
    name: 'Sterling Silve...',
    brand: 'SPOTTIE',
    description: '',
    on_hands: '1,341',
    locked: '0',
    allocated: '1',
    in_transfer: '0',
    available: '1,340',
    discrepation: '0',
    status: 'light blue',
  },
  {
    key: 5,
    type: 'Core Product',
    master_sku: '10069001',
    name: 'Sterling Silve...',
    brand: '',
    description: 'book',
    on_hands: '0',
    locked: '0',
    allocated: '0',
    in_transfer: '0',
    available: '0',
    discrepation: '0',
    status: 'light blue',
  },
  {
    key: 6,
    type: 'Bundle or Kit',
    master_sku: '10069901',
    name: 'Sterling Silve...',
    brand: 'STERLING CO.',
    description: '',
    on_hands: '10',
    locked: '0',
    allocated: '5',
    in_transfer: '0',
    available: '5',
    discrepation: '0',
    status: 'red',
    children: [
      {
        key: 50,
        type: 'Core Product',
        master_sku: '1234',
        name: 'Water Bottle',
        brand: 'RUTGERS',
        description: '',
        on_hands: '3,934',
        locked: '191',
        allocated: '0',
        in_transfer: '0',
        available: '3,543',
        discrepation: '0',
        status: 'yellow',
      },
    ],
  },
  {
    key: 7,
    type: 'Core Product',
    master_sku: 'DICE 2',
    name: 'Sterling Silve...',
    brand: 'KJERRR',
    description: '',
    on_hands: '601',
    locked: '15',
    allocated: '2',
    in_transfer: '0',
    available: '584',
    discrepation: '0',
    status: 'green',
  },
  {
    key: 8,
    type: 'Core Product',
    master_sku: '19076456',
    name: 'Sterling Silve...',
    brand: 'JOKERBRAND 8',
    description: '',
    on_hands: '0',
    locked: '0',
    allocated: '0',
    in_transfer: '0',
    available: '0',
    discrepation: '0',
    status: 'light blue',
  },
  {
    key: 9,
    type: 'Core Product',
    master_sku: '19076457',
    name: 'Sterling Silve...',
    brand: 'JOKERBRAND 8',
    description: '',
    on_hands: '2',
    locked: '0',
    allocated: '0',
    in_transfer: '0',
    available: '2',
    discrepation: '0',
    status: 'green',
  },
  {
    key: 10,
    type: 'Core Product',
    master_sku: '19076458',
    name: 'Sterling Silve...',
    brand: 'JOKERBRAND 8',
    description: '',
    on_hands: '509',
    locked: '2',
    allocated: '3',
    in_transfer: '5',
    available: '504',
    discrepation: '0',
    status: 'yellow',
  },
  {
    key: 11,
    type: 'type1',
    master_sku: 'Spring Bar',
    name: 'Everest Spring Bar',
    brand: 'brand1',
    description: 'description1',
    on_hands: 'on_hands',
    locked: 'locked',
    allocated: '20',
    in_transfer: 'in_transfer',
    available: 'available',
    discrepation: 'discrepation',
    status: 'active',
  },
  {
    key: 12,
    type: 'type2',
    master_sku: 'Buckle',
    name: 'Everest Buckle',
    brand: 'brand2',
    description: 'description2',
    on_hands: 'on_hands',
    locked: 'locked',
    allocated: '40',
    in_transfer: 'in_transfer',
    available: 'available',
    discrepation: 'discrepation',
    status: 'active',
  },
  {
    key: 13,
    type: 'type1',
    master_sku: 'Black Rubber Strap',
    name: 'Everest Strap (Black Rubber)',
    brand: 'brand1',
    description: 'description1',
    on_hands: 'on_hands',
    locked: 'locked',
    allocated: '50',
    in_transfer: 'in_transfer',
    available: 'available',
    discrepation: 'discrepation',
    status: 'active',
  },
  {
    key: 14,
    type: 'type2',
    master_sku: 'Rudysku_4',
    name: 'Toys',
    brand: 'brand2',
    description: 'description2',
    on_hands: 'on_hands',
    locked: 'locked',
    allocated: '60',
    in_transfer: 'in_transfer',
    available: 'available',
    discrepation: 'discrepation',
    status: 'active',
  },
  {
    key: 15,
    type: 'type2',
    master_sku: '222',
    name: 'product2',
    brand: 'brand2',
    description: 'description2',
    on_hands: 'on_hands',
    locked: 'locked',
    allocated: '80',
    in_transfer: 'in_transfer',
    available: 'available',
    discrepation: 'discrepation',
    status: 'active',
  },
];

const StockManagement: React.FC<IStockManagement> = ({ tabButtons }) => {
  const { getStockLocationList, selectedStockItem } = useModel('stockLocation');
  const [showItems, setShowItems] = useState([]);
  const [dataSource] = useState(data);

  const {
    isDragging: isRightDragging,
    position: RightW,
    separatorProps: rightDragBarProps,
  } = useResizable({
    axis: 'x',
    initial: 450,
    min: 300,
    reverse: true,
  });

  useEffect(() => {
    getStockLocationList();
  }, [getStockLocationList]);

  return (
    <>
      <div className="w-full flex flex-column h-screen">
        <MainPanel
          tabButtons={tabButtons}
          dataSource={dataSource}
          selectedShowWarehouseItems={showItems}
          setSelectedShowWarehouseItems={setShowItems}
        />
      </div>

      <SampleSplitter isDragging={isRightDragging} {...rightDragBarProps} />

      <div className={cn('shrink-0 contents right-panel', isRightDragging && 'dragging')} style={{ width: RightW }}>
        <div className="w-full">{selectedStockItem && <StockDetailsPanel selectedShowWarehouseItems={showItems} />}</div>
      </div>
    </>
  );
};

export default StockManagement;
