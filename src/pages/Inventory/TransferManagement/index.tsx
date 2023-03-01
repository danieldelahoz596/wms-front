import { cn, SampleSplitter } from '@/components/Globals/SampleSplitter';
import React, { useState } from 'react';
import { useResizable } from 'react-resizable-layout';
import TransferDetails from './RightPanel';
import MainPanel from './MainPanel';

interface ITransferManagement {
  tabButtons: React.ReactNode;
}

const TransferManagement: React.FC<ITransferManagement> = ({ tabButtons }) => {
  const [selectedTransfer, setSelectedTransfer] = useState(null);

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

  return (
    <>
      <div className="w-full flex flex-column h-screen">
        <MainPanel tabButtons={tabButtons} selectedTransfer={selectedTransfer} setSelectedTransfer={setSelectedTransfer} />
      </div>
      <SampleSplitter isDragging={isRightDragging} {...rightDragBarProps} />
      <div className={cn('shrink-0 contents', isRightDragging && 'dragging')} style={{ width: RightW }}>
        <div className="w-full">{selectedTransfer && <TransferDetails />}</div>
      </div>
    </>
  );
};

export default TransferManagement;
