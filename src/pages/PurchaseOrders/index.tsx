import { cn, SampleSplitter } from '@/components/Globals/SampleSplitter';
import { PageContainer } from '@ant-design/pro-components';
import React, { useEffect, useState } from 'react';
import { useResizable } from 'react-resizable-layout';
import { useModel } from 'umi';
import BottomPanel from './BottomPanel';
import SidePanel from './SidePanel';
import MainPanel from './MainPanel';

const CustomerManagement: React.FC = () => {
  const { poList } = useModel('po');
  const { getMilestones } = useModel('milestones');
  const { initialShippingTermList } = useModel('shippingTerm');
  const { getProductList } = useModel('product');
  const { selectedPOStatus, changeSelectedPOStatus } = useModel('poStatus');

  const [selectedRows, setSelectedRows] = useState<any[]>([]);

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

  // get selected po product items
  const selectedFullPO = poList.find((poItem) => poItem.key === selectedRows[0]);
  const POProductItems = selectedFullPO ? selectedFullPO.poItems : [];

  useEffect(() => {
    changeSelectedPOStatus({ poStatus: 1, warehouse: null });
  }, []);

  useEffect(() => {
    getProductList();
  }, [getProductList]);

  useEffect(() => {
    setSelectedRows([]);
  }, [selectedPOStatus]);

  useEffect(() => {
    getMilestones();
    initialShippingTermList();
  }, [getMilestones, initialShippingTermList]);

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
          <div className={cn('shrink-0 contents bottom-panel', isBottomDragging && 'dragging')} style={{ height: bottomH }}>
            <div className="w-full">{selectedRows.length == 1 && <BottomPanel POProductItems={POProductItems} />}</div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default CustomerManagement;
