import { useCallback, useState } from 'react';

export default () => {
  const [orderImportSettings, setOrderImportSettings] = useState<any[]>([]);
  const [editableImportSetting, setEditableImportSetting] = useState(null);

  const addOrderImportSettings = useCallback((_newSettings) => {
    console.log(_newSettings);
    setOrderImportSettings((prevState) => [...prevState, _newSettings]);
  }, []);

  const updateOrderImportSettings = useCallback((_updatedSetting) => {
    setOrderImportSettings((prevState) => prevState.map((_item) => (_item.key == _updatedSetting.key ? _updatedSetting : _item)));
  }, []);

  const removeOrderImportSettings = useCallback((_index) => {
    setOrderImportSettings((prevState) => prevState.filter((_item, _curIndex) => _index !== _curIndex));
  }, []);

  return {
    orderImportSettings,
    editableImportSetting,
    setEditableImportSetting,
    addOrderImportSettings,
    updateOrderImportSettings,
    removeOrderImportSettings,
  };
};
