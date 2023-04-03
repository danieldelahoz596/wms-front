import type IVendor from '@/interfaces/IVendor';
import { cn, SampleSplitter } from '@/components/Globals/SampleSplitter';
import { modalType } from '@/utils/helpers/types';
import { FormattedMessage, useModel } from '@umijs/max';
import { useMemo, useState } from 'react';
import { useResizable } from 'react-resizable-layout';
// import HistoryModal from './components/Modals/History';
import HistoryModal from '@/components/History';
import VendorModal from './MainPanel/Modals/Vendor';
import RightPanel from './RightPanel';
import MainPanel from './MainPanel';

const THistoryColumns = [
  {
    title: <FormattedMessage id="component.table.column.editTime" />,
    dataIndex: 'time',
    key: 'editTime',
  },
  {
    title: <FormattedMessage id="component.table.column.vendor" />,
    dataIndex: 'vendor',
    key: 'vendor',
  },
  {
    title: <FormattedMessage id="component.table.column.changedValues" />,
    dataIndex: 'value',
    key: 'changedValues',
  },
];

export default function () {
  const [modalOpen, setModal] = useState('');
  const { selectedVendor, vendorHistory, createVendor, updateVendor, getVendorList, setSelectedVendor } = useModel('vendor');

  const {
    isDragging: isRightDragging,
    position: RightW,
    separatorProps: rightDragBarProps,
  } = useResizable({
    axis: 'x',
    initial: 280,
    min: 50,
    reverse: true,
  });

  const vendorHistoryRows = useMemo(() => vendorHistory.map((_item) => ({ ..._item, key: _item.id })), [vendorHistory]);

  return (
    <div className="flex h-screen">
      <div className="grow">
        <MainPanel setModal={setModal} />
      </div>

      <SampleSplitter isDragging={isRightDragging} {...rightDragBarProps} />

      <div className={cn('shrink-0 contents right-panel', isRightDragging && 'dragging')} style={{ width: RightW }}>
        <div className="w-full">
          <RightPanel setModal={setModal} />
        </div>
      </div>

      {/* Modals */}
      <VendorModal
        isOpen={modalOpen === modalType.New || modalOpen === modalType.Edit}
        onSave={(values: IVendor) => {
          if (modalOpen === modalType.New) {
            createVendor(values);
            getVendorList();
          } else if (modalOpen === modalType.Edit) {
            updateVendor({ id: selectedVendor.id, ...values });
            setSelectedVendor(null);
          }
          setModal(modalType.Close);
        }}
        onClose={() => setModal(modalType.Close)}
      />

      {/* <HistoryModal
        isOpen={modalOpen === modalType.History}
        onSave={() => setModal(modalType.Close)}
        onClose={() => setModal(modalType.Close)}
      /> */}

      <HistoryModal
        isOpen={modalOpen === modalType.History}
        TColumns={THistoryColumns}
        TRows={vendorHistoryRows}
        title={<FormattedMessage id="pages.settings.vendors.history.title" />}
        onClose={() => setModal(modalType.Close)}
      />
    </div>
  );
}
