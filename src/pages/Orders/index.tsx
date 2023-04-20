import { cn, SampleSplitter } from '@/components/Globals/SampleSplitter';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import React, { useEffect, useState } from 'react';
import { useResizable } from 'react-resizable-layout';
import OrderItems from './BottomPanel';
import MainPanel from './MainPanel';
import RightPanel from './RightPanel';
import SidePanel from './SidePanel';

const OrderManagement: React.FC = () => {
  const [selectedRows, setSelectedRows] = useState<any[]>([]);
  const { getProductList } = useModel('product');
  const { getUsers } = useModel('user');
  const { getStateList } = useModel('states');

  useEffect(() => {
    getUsers({ permission: 'orders' });
    getProductList();
  }, [getUsers, getProductList]);

  useEffect(() => {
    getStateList();
  }, [getStateList]);

  const {
    isDragging: isBottomDragging,
    position: bottomH,
    separatorProps: bottomDragBarProps,
  } = useResizable({
    axis: 'y',
    initial: 200,
    min: 50,
    reverse: true,
  });

  const {
    isDragging: isLeftDragging,
    position: LeftW,
    separatorProps: leftDragBarProps,
  } = useResizable({
    axis: 'x',
    initial: 220,
    min: 50,
  });

  const {
    isDragging: isRightDragging,
    position: RightW,
    separatorProps: rightDragBarProps,
  } = useResizable({
    axis: 'x',
    initial: 280,
    min: 50,
    reverse: true,
  });

  return (
    <PageContainer title={false} className={'flex flex-column overflow-hidden'}>
      <div className={'flex grow'}>
        <div className={cn('shrink-0 contents', isLeftDragging && 'dragging')} style={{ width: LeftW }}>
          <div className="w-full">
            <SidePanel />
          </div>
        </div>
        <SampleSplitter isDragging={isLeftDragging} {...leftDragBarProps} />
        <div className="w-full flex flex-column h-screen">
          <div className="horizon-content" style={{ overflow: 'scroll' }}>
            <MainPanel selectedRows={selectedRows} setSelectedRows={setSelectedRows} />
          </div>
          <SampleSplitter dir={'horizontal'} isDragging={isBottomDragging} {...bottomDragBarProps} />
          <div className={cn('shrink-0 contents', isBottomDragging && 'dragging')} style={{ height: bottomH }}>
            <div className="w-full">{selectedRows.length == 1 && <OrderItems />}</div>
          </div>
        </div>
        <SampleSplitter isDragging={isRightDragging} {...rightDragBarProps} />
        <div className={cn('shrink-0 contents right-panel', isLeftDragging && 'dragging')} style={{ width: RightW }}>
          <div className="w-full"> {selectedRows.length > 0 && <RightPanel />}</div>
        </div>
      </div>
    </PageContainer>
  );
};

export default OrderManagement;
