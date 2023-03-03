import { uuidv4 } from '@antv/xflow-core';
import { useCallback, useState } from 'react';

export default () => {
  const [rmaExportSettings, setRmaExportSettings] = useState<any[]>([
    {
      id: 1,
      settingName: 'Name',
      fileFormat: 'csv',
      dateFormat: 'MM/dd/yyyy',
      includeColumnHeader: true,
      exportFields: [
        { key: 1, field: 'Action', name: 'Action' },
        { key: 2, field: 'Blank/Empty', name: 'Blank/Empty' },
        { key: 3, field: 'Carrier Fee', name: 'Carrier Fee' },
        { key: 4, field: 'Customer Name', name: 'Customer Name' },
        { key: 5, field: 'Delivery Status', name: 'Delivery Status' },
        { key: 6, field: 'Item SKU', name: 'Item SKU' },
        { key: 7, field: 'Master SKU', name: 'Master SKU' },
        { key: 8, field: 'Order Date', name: 'Order Date' },
        { key: 9, field: 'Order Item Quantity', name: 'Order Item Quantity' },
        { key: 10, field: 'Order Number', name: 'Order Number' },
      ],
    },
  ]);
  const [editableRmaExportSetting, setEditableRmaExportSetting] = useState(null);

  const addRmaExportSettings = useCallback(
    (_newSettings) =>
      setRmaExportSettings((prevState) => [
        {
          id: uuidv4(),
          ..._newSettings,
        },
        ...prevState,
      ]),
    [],
  );

  const updateRmaExportSettings = useCallback((_updatedSetting) => {
    console.log(_updatedSetting);
    setRmaExportSettings((prevState) => prevState.map((_item) => (_item.id === _updatedSetting.id ? _updatedSetting : _item)));
  }, []);

  const removeRmaExportSettings = useCallback((_index) => {
    setRmaExportSettings((prevState) => prevState.filter((_item, _curIndex) => _index !== _curIndex));
  }, []);

  return {
    rmaExportSettings,
    editableRmaExportSetting,
    addRmaExportSettings,
    updateRmaExportSettings,
    removeRmaExportSettings,
    setEditableRmaExportSetting,
  };
};
