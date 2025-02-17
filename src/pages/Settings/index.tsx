import { cn, SampleSplitter } from '@/components/Globals/SampleSplitter';
import { PageContainer } from '@ant-design/pro-components';
import { useResizable } from 'react-resizable-layout';
import { Card } from 'antd';
import SidePanel from './SidePanel';
import MainPanel from './MainPanel';

const OrderManagement: React.FC = () => {
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
        <Card
          className={cn('shrink-0 contents', isLeftDragging && 'dragging')}
          style={{ width: LeftW }}
          bodyStyle={{ padding: 0 }}
        >
          <div className="w-full">
            <SidePanel />
          </div>
        </Card>
        <SampleSplitter isDragging={isLeftDragging} {...leftDragBarProps} />
        <div className="w-full flex flex-column h-screen">
          <MainPanel />
        </div>
      </div>
    </PageContainer>
  );
};

export default OrderManagement;
