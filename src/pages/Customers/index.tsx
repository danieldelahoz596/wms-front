import { cn, SampleSplitter } from '@/components/Globals/SampleSplitter';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { useEffect } from 'react';
import { useResizable } from 'react-resizable-layout';
import BottomPanel from './BottomPanel';
import RightPanel from './RightPanel';
import SidePanel from './SidePanel';
import MainPanel from './MainPanel';

const CustomerManagement: React.FC = () => {
  const { getCustomerList } = useModel('customer');
  const { getStateList } = useModel('states');

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
    min: 150,
  });

  const {
    isDragging: isRightDragging,
    position: RightW,
    separatorProps: rightDragBarProps,
  } = useResizable({
    axis: 'x',
    initial: 280,
    min: 150,
    reverse: true,
  });

  // fetch initial customer list
  useEffect(() => {
    getCustomerList();
  }, [getCustomerList]);

  useEffect(() => {
    getStateList();
  }, [getStateList]);

  return (
    <PageContainer title={false} className={'flex flex-column overflow-hidden'}>
      <div className={'flex grow'}>
        <div className={cn('shrink-0 contents', isLeftDragging && 'dragging')} style={{ width: LeftW }}>
          <div className="w-full">
            <SidePanel />
          </div>
        </div>
        <SampleSplitter isDragging={isLeftDragging} {...leftDragBarProps} />
        <div className="w-full flex flex-column h-screen overflow-hidden">
          <div className="horizon-content" style={{ overflow: 'scroll' }}>
            <MainPanel />

            <SampleSplitter isDragging={isRightDragging} {...rightDragBarProps} />

            <div className={cn('shrink-0 contents', isRightDragging && 'dragging')} style={{ width: RightW }}>
              <RightPanel />
            </div>
          </div>

          <SampleSplitter dir={'horizontal'} isDragging={isBottomDragging} {...bottomDragBarProps} />
          <div
            className={cn('shrink-0 contents', isBottomDragging && 'dragging')}
            style={{ height: bottomH, overflow: 'scroll' }}
          >
            <div className="w-full">
              <BottomPanel />
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default CustomerManagement;
