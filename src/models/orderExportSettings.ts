import { useState } from 'react';

export default () => {
  const [orderExportSettings, setOrderExportSettings] = useState<any[]>([
    {
      key: 1,
      settingName: 'Default Export',
      fileFormat: 'csv',
      multiSku: {
        name: 'multiline',
        value: '',
      },
      exportFields: [
        {
          key: 1,
          field: 'Carrier Fee',
          name: '',
        },
        {
          key: 2,
          field: 'Order Number',
          name: '',
        },
        {
          key: 3,
          field: 'Buyer Name',
          name: '',
        },
        {
          key: 4,
          field: 'Ship To Address 1',
          name: '',
        },
        {
          key: 5,
          field: 'Sales Channel',
          name: '',
        },
      ],
    },
    {
      key: 2,
      settingName: 'Customer_Phone_Number',
      fileFormat: 'csv',
      undefined: '2022-12-28T16:59:05.238Z',
      multiSku: {
        name: 'delimit',
        value: '',
      },
      exportFields: [
        {
          key: 6,
          field: 'Product Name',
          name: 'Product Name',
        },
        {
          key: 7,
          field: 'Customer Name',
          name: 'Customer Name',
        },
        {
          key: 8,
          field: 'Shiop To Name',
          name: 'Shiop To Name',
        },
        {
          key: 9,
          field: 'Ship To Phone',
          name: 'Ship To Phone',
        },
      ],
    },
  ]);
  const [editableExportSetting, setEditableExportSetting] = useState(null);

  const addOrderExportSettings = (_newSettings) =>
    setOrderExportSettings((prevState) => [...prevState, _newSettings]);

  const updateOrderExportSettings = (_updatedSetting) => {
    setOrderExportSettings((prevState) =>
      prevState.map((_item) => (_item.key == _updatedSetting.key ? _updatedSetting : _item)),
    );
  };
  const removeOrderExportSettings = (_index) => {
    setOrderExportSettings((prevState) =>
      prevState.filter((_item, _curIndex) => _index !== _curIndex),
    );
  };

  return {
    orderExportSettings,
    editableExportSetting,
    addOrderExportSettings,
    updateOrderExportSettings,
    removeOrderExportSettings,
    setEditableExportSetting,
  };
};
