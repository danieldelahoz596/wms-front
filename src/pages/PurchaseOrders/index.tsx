import { cn, SampleSplitter } from '@/components/Globals/SampleSplitter';
import { PageContainer } from '@ant-design/pro-components';
import React, { useEffect } from 'react';
import { useResizable } from 'react-resizable-layout';
import { useModel } from 'umi';
import BottomPanel from './BottomPanel';
import SidePanel from './SidePanel';
import MainPanel from './MainPanel';

const CustomerManagement: React.FC = () => {
  const { getPOList, getPO, setSelectedPO, selectedPO, selectedPOIds, setSelectedPOIds } = useModel('po');
  const { getUnitOfMeasures } = useModel('unitOfMeasure');
  const { getProductList } = useModel('product');
  const { selectedPOStatus, setSelectedPOStatus } = useModel('poStatus');

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

  useEffect(() => {
    if (selectedPOIds.length === 1) {
      getPO(selectedPOIds[0]);
    } else setSelectedPO(null);
  }, [selectedPOIds, getPO, setSelectedPO]);

  useEffect(() => {
    getPOList({ status_id: selectedPOStatus });
    setSelectedPOIds([]);
  }, [selectedPOStatus, getPOList, setSelectedPOIds]);

  useEffect(() => {
    getProductList();
    setSelectedPOStatus(1);
    getUnitOfMeasures();
  }, [getProductList, setSelectedPOStatus, getUnitOfMeasures]);

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
            <MainPanel selectedRows={selectedPOIds} setSelectedRows={setSelectedPOIds} />
          </div>
          <SampleSplitter dir={'horizontal'} isDragging={isBottomDragging} {...bottomDragBarProps} />
          <div className={cn('shrink-0 contents bottom-panel', isBottomDragging && 'dragging')} style={{ height: bottomH }}>
            <div className="w-full">{selectedPO && <BottomPanel />}</div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default CustomerManagement;
