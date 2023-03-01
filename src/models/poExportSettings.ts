import { uuidv4 } from '@antv/xflow-core';
import { useCallback, useState } from 'react';

export default () => {
  const [poExportSettings, setPOExportSettings] = useState<any[]>([
    {
      id: 1,
      settingName: 'Skubana',
      fileFormat: 'csv',
      dateFormat: 'MM/dd/yyyy',
      multiSku: 'multiline',
      delimitValue: '',
      includeColumnHeader: true,
      exportFields: [
        {
          key: 1,
          field: 'Authorizer',
          name: 'AUTHORIZER',
        },
        {
          key: 2,
          field: 'Billed Item Cost',
          name: 'BILLED ITEM COST',
        },
        {
          key: 3,
          field: 'Company City',
          name: 'COMPANY CITY',
        },
        {
          key: 4,
          field: 'Company Email',
          name: 'COMPANY EMAIL',
        },
      ],
    },
  ]);
  const [editableExportSetting, setEditableExportSetting] = useState(null);

  const addPOExportSettings = useCallback(
    (_newSettings) =>
      setPOExportSettings((prevState) => [
        {
          id: uuidv4(),
          ..._newSettings,
        },
        ...prevState,
      ]),
    [],
  );

  const updatePOExportSettings = useCallback((_updatedSetting) => {
    console.log(_updatedSetting);
    setPOExportSettings((prevState) => prevState.map((_item) => (_item.id === _updatedSetting.id ? _updatedSetting : _item)));
  }, []);

  const removePOExportSettings = useCallback((_index) => {
    setPOExportSettings((prevState) => prevState.filter((_item, _curIndex) => _index !== _curIndex));
  }, []);

  return {
    poExportSettings,
    editableExportSetting,
    addPOExportSettings,
    updatePOExportSettings,
    removePOExportSettings,
    setEditableExportSetting,
  };
};
