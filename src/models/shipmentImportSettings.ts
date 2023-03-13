import { useCallback, useState } from 'react';

export default () => {
  const [shipmentImportSettings, setShipmentImportSettings] = useState<any[]>([]);
  const [editableImportSetting, setEditableImportSetting] = useState(null);

  const addShipmentImportSettings = useCallback((_newSettings) => {
    setShipmentImportSettings((prevState) => [...prevState, _newSettings]);
  }, []);

  const updateShipmentImportSettings = useCallback((_updatedSetting) => {
    setShipmentImportSettings((prevState) =>
      prevState.map((_item) => (_item.key == _updatedSetting.key ? _updatedSetting : _item)),
    );
  }, []);

  const removeShipmentImportSettings = useCallback((key) => {
    setShipmentImportSettings((prevState) => prevState.filter((_item) => _item.key !== key));
    setEditableImportSetting(null);
  }, []);

  return {
    shipmentImportSettings,
    editableImportSetting,
    setEditableImportSetting,
    addShipmentImportSettings,
    updateShipmentImportSettings,
    removeShipmentImportSettings,
  };
};
