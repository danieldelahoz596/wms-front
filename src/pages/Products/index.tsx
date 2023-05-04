import { cn, SampleSplitter } from '@/components/Globals/SampleSplitter';
import { PageContainer } from '@ant-design/pro-components';
import { useResizable } from 'react-resizable-layout';
import BottomPanel from './BottomPanel';
import MainPanel from './MainPanel';
import SidePanel from './SidePanel';
import { Card } from 'antd';

const ProductManagement: React.FC = () => {
  const {
    isDragging: isLeftDragging,
    position: LeftW,
    separatorProps: leftDragBarProps,
  } = useResizable({
    axis: 'x',
    initial: 250,
    min: 100,
  });

  const {
    isDragging: isBottomDragging,
    position: bottomH,
    separatorProps: bottomDragBarProps,
  } = useResizable({
    axis: 'y',
    initial: 300,
    min: 50,
    reverse: true,
  });

  return (
    <PageContainer title={false} className="flex flex-column overflow-hidden">
      <div className={'flex grow'}>
        <Card
          className={cn('shrink-0 contents', isLeftDragging && 'dragging')}
          style={{ width: LeftW }}
          bodyStyle={{ paddingTop: 0 }}
        >
          <div className="w-full">
            <SidePanel />
          </div>
        </Card>
        <SampleSplitter isDragging={isLeftDragging} {...leftDragBarProps} />
        <div className="w-full flex flex-column h-screen">
          <div className="horizon-content" style={{ overflow: 'scroll' }}>
            <div className="main-panel">
              <MainPanel />
            </div>
          </div>
          <SampleSplitter dir={'horizontal'} isDragging={isBottomDragging} {...bottomDragBarProps} />
          <div
            className={cn('shrink-0 contents', isBottomDragging && 'dragging')}
            style={{ height: bottomH, overflow: 'scroll' }}
          >
            <div className="w-full">
              <BottomPanel height={bottomH} />
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default ProductManagement;
