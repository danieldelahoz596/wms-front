import { cn, SampleSplitter } from '@/utils/components/SampleSplitter';
import { PageContainer } from '@ant-design/pro-components';
import { useResizable } from 'react-resizable-layout';
import LeftPanel from './components/LeftPanel';
import MainPanel from './components/mainPanel';

const ShipmentManagement: React.FC = () => {
  const {
    isDragging: isLeftDragging,
    position: LeftW,
    separatorProps: leftDragBarProps,
  } = useResizable({
    axis: 'x',
    initial: 220,
    min: 50,
  });

  return (
    <PageContainer title={false} className={'flex flex-column overflow-hidden'}>
      <div className={'flex grow'}>
        <div className={cn('shrink-0 contents', isLeftDragging && 'dragging')} style={{ width: LeftW }}>
          <div className="w-full">
            <LeftPanel />
          </div>
        </div>
        <SampleSplitter isDragging={isLeftDragging} {...leftDragBarProps} />
        <div className="w-full flex flex-column h-screen">
          <div className="horizon-content">
            <MainPanel />
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default ShipmentManagement;
