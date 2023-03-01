import { uuidv4 } from '@antv/xflow-core';
import { useCallback, useState } from 'react';

export default () => {
  const [customBundleKitExportSettings, setCustomBundleKitExportSettings] = useState<any[]>([
    {
      id: 1,
      settingName: 'Bundle / Kit',
      fileFormat: 'csv',
      dateFormat: 'MM/dd/yyyy',
      wrapDoubleQuote: true,
      onlyExportActive: true,
      includeColumnHeader: true,
      exportFields: [
        {
          key: 22,
          field: 'Bundle Active',
          name: 'ACTIVE',
        },
        {
          key: 1,
          field: 'Bundle Master SKU',
          name: 'BUNDLE MASTER SKU',
        },
        {
          key: 6,
          field: 'Bundle UPC',
          name: 'BUNDLE UPC',
        },
        {
          key: 2,
          field: 'Bundle Name',
          name: 'BUNDLE NAME',
        },
        {
          key: 23,
          field: 'Bundle Vendor Cost',
          name: 'BUNDLE COST',
        },
        {
          key: 4,
          field: 'Component Name (Core SKU Name)',
          name: 'CORE SKU NAME',
        },
        {
          key: 5,
          field: 'Component Qty',
          name: 'COMPONENT QTY',
        },
        {
          key: 3,
          field: 'Component SKU (Core SKU)',
          name: 'CORE SKU',
        },
      ],
    },
  ]);
  const [editableCustomBundleKitExportSetting, setEditableBundleKitExportSetting] = useState(null);

  const addCustomBundleKitExportSettings = useCallback(
    (_newSettings) =>
      setCustomBundleKitExportSettings((prevState) => [
        {
          id: uuidv4(),
          ..._newSettings,
        },
        ...prevState,
      ]),
    [],
  );

  const updateCustomBundleKitExportSettings = useCallback((_updatedSetting) => {
    console.log(_updatedSetting);
    setCustomBundleKitExportSettings((prevState) =>
      prevState.map((_item) => (_item.id === _updatedSetting.id ? _updatedSetting : _item)),
    );
  }, []);

  const removeCustomBundleKitExportSettings = useCallback((_index) => {
    setCustomBundleKitExportSettings((prevState) => prevState.filter((_item, _curIndex) => _index !== _curIndex));
  }, []);

  return {
    customBundleKitExportSettings,
    editableCustomBundleKitExportSetting,
    addCustomBundleKitExportSettings,
    updateCustomBundleKitExportSettings,
    removeCustomBundleKitExportSettings,
    setEditableBundleKitExportSetting,
  };
};
