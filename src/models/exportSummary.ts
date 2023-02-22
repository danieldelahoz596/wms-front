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

  const getInventoryImportExportSummary = useCallback(() => {
    setSummary({
      new_sku_created: 0,
      existing_sku_updated: 0,
      errors_count: 2,
      logs: [
        {
          row: 2,
          error_log: 'Stock not processed at row 4 :: No master SKU entered. Master SKU value is required',
          error_level: 'High Priority',
        },
        {
          row: 3,
          error_log: "Stock not processed at row 4 :: No 'Draw Rank' value entered. Draw Rank is required",
          error_level: 'High Priority',
        },
        {
          row: 4,
          error_log: 'Stock not processed at row 4 :: No on hand stock entered. On Hand stock is required',
          error_level: 'High Priority',
        },
        {
          row: 5,
          error_log: 'Stock not processed at row 5 :: No master SKU entered. Master SKU value is required',
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

  return {
    summary,
    getShipmentImportExportSummary,
    getVendorProductImportExportSummary,
    getInventoryImportExportSummary,
  };
};
