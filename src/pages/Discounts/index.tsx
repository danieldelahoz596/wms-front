import { cn, SampleSplitter } from '@/components/Globals/SampleSplitter';
import { PageContainer } from '@ant-design/pro-components';
import { useResizable } from 'react-resizable-layout';
import MainPanel from './MainPanel';
import SidePanel from './SidePanel';
import { Card } from 'antd';

const DiscountManagement: React.FC = () => {
  const {
    isDragging: isLeftDragging,
    position: LeftW,
    separatorProps: leftDragBarProps,
  } = useResizable({
    axis: 'x',
    initial: 250,
    min: 100,
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
        </div>
      </div>
    </PageContainer>
  );
};

export default DiscountManagement;
