import { SampleSplitter } from '@/components/Globals/SampleSplitter';
import { PageContainer } from '@ant-design/pro-components';
import { Layout } from 'antd';
import { useResizable } from 'react-resizable-layout';

import MainPanel from './MainPanel';
import SidePanel from './SidePanel';

const { Sider } = Layout;

const Help: React.FC = () => {
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
    <PageContainer title={false} className={'flex flex-column overflow-hidden'}>
      <div className={'flex grow'}>
        <Sider width={LeftW} trigger={null}>
          <SidePanel />
        </Sider>

        <SampleSplitter isDragging={isLeftDragging} {...leftDragBarProps} />
        
        <MainPanel />
      </div>
    </PageContainer>
  );
};

export default Help;
