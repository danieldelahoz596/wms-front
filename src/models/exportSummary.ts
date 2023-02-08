import { useCallback, useState } from 'react';

export default () => {
  const [summary, setSummary] = useState(null);

  const getShipmentImportExportSummary = useCallback(() => {
    setSummary({
      new_sku_created: 0,
      existing_sku_updated: 0,
      errors_count: 2,
      logs: [
        {
          row: 2,
          error_log: "SKU not processed at row 2 :: Product not found for Master SKU '123456'",
          error_level: 'High Priority',
        },
        {
          row: 3,
          error_log: "SKU not processed at row 3 :: Product not found for Master SKU '123456'",
          error_level: 'High Priority',
        },
        {
          row: 4,
          error_log: "SKU not processed at row 4 :: Product not found for Master SKU '123456'",
          error_level: 'High Priority',
        },
      ],
    });
  }, []);

  const getVendorProductImportExportSummary = useCallback(() => {
    setSummary({
      new_sku_created: 0,
      existing_sku_updated: 0,
      errors_count: 2,
      logs: [
        {
          row: 2,
          error_log: "SKU not processed at row 2 :: Product not found for Master SKU '123456'",
          error_level: 'High Priority',
        },
        {
          row: 3,
          error_log: "SKU not processed at row 3 :: Product not found for Master SKU '123456'",
          error_level: 'High Priority',
        },
        {
          row: 4,
          error_log: "SKU not processed at row 4 :: Product not found for Master SKU '123456'",
          error_level: 'High Priority',
        },
      ],
    });
  }, []);

  return { summary, getShipmentImportExportSummary, getVendorProductImportExportSummary };
};
