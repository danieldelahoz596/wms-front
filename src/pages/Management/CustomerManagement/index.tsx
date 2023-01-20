import { PageContainer } from '@ant-design/pro-components';
import { Button, Card, Row, Col } from 'antd';
import React, { useEffect, useState } from 'react';
import type { UploadFile } from 'antd/es/upload/interface';
import { sampleImages } from '@/utils/helpers/base';
import { modalType } from '@/utils/helpers/types';
import { DragDropContainer } from 'react-drag-drop-container-typescript';
import { SampleSplitter, cn } from '@/utils/components/SampleSplitter';
import { useResizable } from 'react-resizable-layout';
import { OTable } from '@/components/Globals/OTable';
import { useModel } from '@umijs/max';
import RightPanel from './components/RightPanel/Index';
import SearchCustomer from './components/SidePanel/SearchCustomer';
import EditHistoryModal from '@/components/Modals/Customer/EditHistoryModal';
import CreateCustomerModal from '@/components/Modals/Customer/CreateCustomerModal';
import Bottom from './components/Bottom/Index';

const CustomerManagement: React.FC = () => {
  const {
    customerList,
    selectedCustomer,
    setSelectedCustomer,
    initialCustomerList,
    onGetSelectedCustomer,
  } = useModel('customer');
  const [modalOpen, setModal] = useState('');
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>(sampleImages);
  const [selectedRows, setSelectedRows] = useState<any[]>([]);

  const {
    isDragging: isBottomDragging,
    position: bottomH,
    splitterProps: bottomDragBarProps,
  } = useResizable({
    axis: 'y',
    initial: 200,
    min: 50,
    reverse: true,
  });

  const {
    isDragging: isLeftDragging,
    position: LeftW,
    splitterProps: leftDragBarProps,
  } = useResizable({
    axis: 'x',
    initial: 220,
    min: 50,
  });

  const {
    isDragging: isRightDragging,
    position: RightW,
    splitterProps: rightDragBarProps,
  } = useResizable({
    axis: 'x',
    initial: 280,
    min: 50,
    reverse: true,
  });

  const Tcolumns = [
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Card ID Number',
      dataIndex: 'cardNumber',
      key: 'cardNumber',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: any) => (
        <DragDropContainer targetKey="merge" dragData={text}>
          {text}
        </DragDropContainer>
      ),
    },
    {
      title: 'Orders',
      dataIndex: 'orders',
      key: 'orders',
    },
    {
      title: 'Total Sales',
      dataIndex: 'totalsales',
      key: 'totalsales',
    },
  ];

  const prepareCustomersTableData = customerList?.map((item) => ({
    key: item.id,
    phone: item.phonenumber,
    cardNumber: item.card_number,
    name: item.name,
    address: item.address,
    orders: 1,
    totalsales: '$0.00',
  }));

  // fetch initial customer list
  useEffect(() => {
    initialCustomerList();
  }, [initialCustomerList]);

  // get selected customer
  useEffect(() => {
    if (selectedRows[0]) {
      onGetSelectedCustomer(selectedRows[0]);
    } else {
      setSelectedCustomer(null);
    }
  }, [selectedRows, onGetSelectedCustomer, setSelectedCustomer]);

  return (
    <PageContainer title={false} className={'flex flex-column overflow-hidden'}>
      <div className={'flex grow'}>
        <div
          className={cn('shrink-0 contents', isLeftDragging && 'dragging')}
          style={{ width: LeftW }}
        >
          <div className="w-full">
            <SearchCustomer />
          </div>
        </div>

        <SampleSplitter isDragging={isLeftDragging} {...leftDragBarProps} />

        <div className="w-full flex flex-column h-screen">
          <div className="horizon-content">
            <Row style={{ width: '100%' }}>
              <Col span={24}>
                <Card
                  size="small"
                  title={
                    <span
                      style={{
                        fontSize: '1rem',
                        textTransform: 'uppercase',
                        fontWeight: '700',
                        color: '#A2A2A2',
                      }}
                    >
                      CUSTOMERS
                    </span>
                  }
                >
                  <Row>
                    <Col span={24} className="panel-top-action">
                      <Button type="primary" onClick={() => setModal(modalType.Merge)}>
                        Merge
                      </Button>
                      {selectedCustomer && (
                        <Button type="primary" onClick={() => setModal(modalType.History)}>
                          History
                        </Button>
                      )}
                      <Button type="primary" onClick={() => setModal(modalType.New)}>
                        New Customer
                      </Button>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col span={24}>
                      <OTable
                        columns={Tcolumns}
                        rows={prepareCustomersTableData}
                        type="radio"
                        selectedRows={selectedRows}
                        setSelectedRows={setSelectedRows}
                      />
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
            <SampleSplitter isDragging={isRightDragging} {...rightDragBarProps} />
            <Row>
              <div
                className={cn('shrink-0 contents', isLeftDragging && 'dragging')}
                style={{ width: RightW }}
              >
                <div className="">
                  <RightPanel />
                </div>
              </div>
            </Row>
          </div>

          <SampleSplitter
            dir={'horizontal'}
            isDragging={isBottomDragging}
            {...bottomDragBarProps}
          />
          <div
            className={cn('shrink-0 contents', isBottomDragging && 'dragging')}
            style={{ height: bottomH }}
          >
            <div className="w-full">
              <Bottom />
            </div>
          </div>
        </div>
      </div>

      <EditHistoryModal
        isOpen={modalOpen === modalType.History}
        onSave={() => setModal(modalType.Close)}
        onClose={() => setModal(modalType.Close)}
      />

      <CreateCustomerModal
        isOpen={modalOpen === modalType.New}
        onClose={() => setModal(modalType.Close)}
      />
    </PageContainer>
  );
};

export default CustomerManagement;
