import { uuidv4 } from '@antv/xflow-core';
import { useState } from 'react';

export default () => {
  const [customBundleKitExportSettings, setCustomBundleKitExportSettings] = useState<any[]>([
    {
      id: 1,
      settingName: 'Default Export',
      fileFormat: 'csv',
      date: null,
      delimit_value: '',
      multi_sku: 'multiline',
      wrapDoubleQuote: false,
      includeColumnHeader: false,
      exportFields: [],
    },
    {
      id: 2,
      settingName: 'Customers_Phone_Numbers',
      fileFormat: 'csv',
      multi_sku: 'delimit',
      exportFields: [],
    },
  ]);
  const [editableCustomBundleKitExportSetting, setEditableBundleKitExportSetting] = useState(null);

  const addCustomBundleKitExportSettings = (_newSettings) =>
    setCustomBundleKitExportSettings((prevState) => [
      {
        id: uuidv4(),
        ..._newSettings,
      },
      ...prevState,
    ]);

  const updateCustomBundleKitExportSettings = (_updatedSetting) => {
    console.log(_updatedSetting);
    setCustomBundleKitExportSettings((prevState) =>
      prevState.map((_item) => (_item.id === _updatedSetting.id ? _updatedSetting : _item)),
    );
  };

  const removeCustomBundleKitExportSettings = (_index) => {
    setCustomBundleKitExportSettings((prevState) =>
      prevState.filter((_item, _curIndex) => _index !== _curIndex),
    );
  };

  return {
    customBundleKitExportSettings,
    editableCustomBundleKitExportSetting,
    addCustomBundleKitExportSettings,
    updateCustomBundleKitExportSettings,
    removeCustomBundleKitExportSettings,
    setEditableBundleKitExportSetting,
  };
};
