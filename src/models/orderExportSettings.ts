import { uuidv4 } from '@antv/xflow-core';
import { useState } from 'react';

export default () => {
  const [orderExportSettings, setOrderExportSettings] = useState<any[]>([
    {
      id: 1,
      settingName: 'Default Export',
      fileFormat: 'csv',
      date: null,
      delimit_value: '',
      multi_sku: 'multiline',
      wrapDoubleQuote: false,
      includeColumnHeader: false,
      exportFields: [
        {
          key: 63,
          field: 'Carrier Fee',
          name: '',
        },
        {
          key: 1,
          field: 'Order Number',
          name: '',
        },
        {
          key: 59,
          field: 'Buyer Name',
          name: '',
        },
        {
          key: 50,
          field: 'Ship Address1',
          name: '',
        },
        {
          key: 75,
          field: 'Sales Channel Name',
          name: '',
        },
      ],
    },
    {
      id: 2,
      settingName: 'Customers_Phone_Numbers',
      fileFormat: 'csv',
      multi_sku: 'delimit',
      exportFields: [
        {
          key: 81,
          field: 'Product Name',
          name: 'PRODUCT NAME',
        },
        {
          key: 83,
          field: 'Customer Name',
          name: 'CUSTOMER NAME',
        },
        {
          key: 48,
          field: 'Ship to Name',
          name: 'SHIP TO NAME',
        },
        {
          key: 57,
          field: 'Ship to Phone',
          name: 'SHIP TO PHONE',
        },
      ],
    },
  ]);
  const [editableExportSetting, setEditableExportSetting] = useState(null);

  const addOrderExportSettings = (_newSettings) =>
    setOrderExportSettings((prevState) => [
      {
        id: uuidv4(),
        ..._newSettings,
      },
      ...prevState,
    ]);

  const updateOrderExportSettings = (_updatedSetting) => {
    console.log(_updatedSetting);
    setOrderExportSettings((prevState) =>
      prevState.map((_item) => (_item.id === _updatedSetting.id ? _updatedSetting : _item)),
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
