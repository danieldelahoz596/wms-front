import { useMemo } from 'react';
import { OModal } from '@/components/Globals/OModal';
import { Form, Input, InputNumber, Space, Select } from 'antd';
import { CloseOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { OButton } from '@/components/Globals/OButton';
import { FormattedMessage, useModel } from '@umijs/max';

interface INewOrderbotModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const filterOptions = [
  {
    value: 'address1',
    label: 'Address Line 1',
  },
  {
    value: 'address2',
    label: 'Address Line 2',
  },
  {
    value: 'address3',
    label: 'Address Line 3',
  },
  {
    value: 'addressVerified',
    label: 'Address Verified',
  },
  {
    value: 'assignedPickingStock',
    label: 'Assigned Picking stock',
  },
  {
    value: 'assignedUser',
    label: 'Assigned User',
  },
  {
    value: 'availableStockForMasterSKU',
    label: 'Available Stock For Master SKU',
  },
  {
    value: 'availableStockForOrder',
    label: 'Available Stock For Order',
  },
  {
    value: 'buyerEmail',
    label: 'Buyer Email',
  },
  {
    value: 'buyerId',
    label: 'Buyer ID',
  },
  {
    value: 'buyerName',
    label: 'Buyer Name',
  },
  {
    value: 'carrier',
    label: 'Carrier',
  },
  {
    value: 'city',
    label: 'City',
  },
  {
    value: 'country',
    label: 'Country',
  },
  {
    value: 'customField1',
    label: 'Custom Field1',
  },
  {
    value: 'customField2',
    label: 'Custom Field2',
  },
  {
    value: 'customField3',
    label: 'Custom Field3',
  },
  {
    value: 'datePaid',
    label: 'Date Paid',
  },
  {
    value: 'fbaSKU',
    label: 'FBA SKU',
  },
  {
    value: 'giftOrder',
    label: 'Gift Order',
  },
  {
    value: 'internalNotes',
    label: 'Internal Notes',
  },
  {
    value: 'itemName',
    label: 'Item Name',
  },
  {
    value: 'itemSKU',
    label: 'Item SKU',
  },
  {
    value: 'masterSKU',
    label: 'Master SKU',
  },
  {
    value: 'orderDate',
    label: 'Order Date',
  },
  {
    value: 'orderItemNotes',
    label: 'Order Item Notes',
  },
  {
    value: 'orderLabels',
    label: 'Order Labels',
  },
  {
    value: 'orderTotal',
    label: 'Order Total',
  },
  {
    value: 'package',
    label: 'Package',
  },
  {
    value: 'postalCode',
    label: 'Postal Code',
  },
  {
    value: 'postalZone',
    label: 'Postal Zone',
  },
  {
    value: 'recipientCompany',
    label: 'Recipient Company',
  },
  {
    value: 'recipientName',
    label: 'Recipient Name',
  },
  {
    value: 'recipientPhone',
    label: 'Recipient Phone',
  },
  {
    value: 'requestedService',
    label: 'Requested Service',
  },
  {
    value: 'state',
    label: 'State',
  },
  {
    value: 'totalQuantity',
    label: 'Total Quantity',
  },
  {
    value: 'totalWeight',
    label: 'Total Weight',
  },
  {
    value: 'warehouse',
    label: 'Warehouse',
  },
];

const operatorOptions = [
  {
    value: 'small',
    label: 'Is less than...',
  },
  {
    value: 'equal',
    label: 'Is equal to...',
  },
  {
    value: 'big',
    label: 'Is greater than...',
  },
];

const actionOptions = [
  {
    value: 'addLabel',
    label: 'Add a Label',
  },
  {
    value: 'addInternalNote',
    label: 'Add an internal note',
  },
  {
    value: 'addOrderItemtoOrder',
    label: 'Add Order Item to Order',
  },
  {
    value: 'addNoteToTheBuyer',
    label: 'Add note to the buyer',
  },
  {
    value: 'adjustOrderWeight',
    label: 'Add the order weight',
  },
  {
    value: 'allowShipperRelease',
    label: 'Allow shipper release',
  },
  {
    value: 'appendReturnLabel',
    label: 'Append return label to outbound label',
  },
  {
    value: 'applyBestRate',
    label: 'Apply Best Rate',
  },
  {
    value: 'applyCheapestRate',
    label: 'Apply Cheapest Rate',
  },
  {
    value: 'assignToUser',
    label: 'Assign to a user',
  },
  {
    value: 'billDutiesAndTaxes',
    label: 'Bill duties and taxes to payor of shipping charges',
  },
  {
    value: 'billShippingToThirdParty',
    label: 'Bill shipping to third party',
  },
  {
    value: 'breakDownBundles',
    label: 'Break down bundles to core components',
  },
  {
    value: 'holdTheOrderFor',
    label: 'Hold the order for ...',
  },
  {
    value: 'holdUntilShipByDate',
    label: 'Hold until ship by date',
  },
  {
    value: 'setWarehouse',
    label: 'Set Warehouse',
  },
];

const NewOrderbotModal: React.FC<INewOrderbotModal> = ({ isOpen, onClose, onSave }) => {
  const [form] = Form.useForm();
  const { warehouseList } = useModel('warehouse');

  const warehouseOptions = useMemo(
    () => warehouseList.map((warehouse) => ({ value: warehouse.id, label: warehouse.name })),
    [warehouseList],
  );

  const handleSave = () => {
    form.validateFields().then((values) => console.log(values));
    console.log(form.getFieldValue(['filters', '0', 'filter']));
  };

  return (
    <OModal
      title={<FormattedMessage id="pages.settings.orderbots.neworderbot.title" />}
      helpLink=""
      width={1000}
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'cancel',
          type: 'default',
          btnLabel: <FormattedMessage id="component.button.cancel" />,
          onClick: onClose,
        },
        {
          key: 'submit',
          type: 'primary',
          btnLabel: <FormattedMessage id="component.button.save" />,
          onClick: handleSave,
        },
      ]}
    >
      <>
        <Form layout="inline" form={form}>
          <Form.Item label={<FormattedMessage id="component.form.label.name" />} name="name">
            <Input style={{ width: 750 }} />
          </Form.Item>
          <Form.Item label={<FormattedMessage id="component.form.label.rank" />} name="rank">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <InputNumber style={{ marginRight: 10 }} />
              <QuestionCircleOutlined style={{ fontSize: 20, color: 'blue' }} />
            </div>
          </Form.Item>

          <Form.List name="filters">
            {(fields, { add, remove }) => (
              <>
                <div
                  style={{
                    width: '100%',
                    marginTop: 50,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'end',
                  }}
                >
                  <div style={{ fontSize: 14 }}>
                    <b>Filter Orders By...</b>
                  </div>
                  <OButton btnText="Add Filter" onClick={() => add()} />
                </div>
                <hr style={{ width: '100%' }} />

                {fields.map(({ key, name, ...restField }) => (
                  <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                    <CloseOutlined style={{ color: 'blue' }} onClick={() => remove(name)} />
                    <Form.Item
                      {...restField}
                      name={[name, 'filter']}
                      rules={[{ required: true, message: 'Please select the filter' }]}
                    >
                      <Select options={filterOptions} style={{ width: 300 }} />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, 'operator']}
                      rules={[{ required: true, message: 'Please select the options' }]}
                    >
                      <Select options={operatorOptions} style={{ width: 200 }} />
                    </Form.Item>
                    <Form.Item
                      noStyle
                      shouldUpdate={(prevValues, currentValues) => prevValues.filters[name] !== currentValues.filters[name]}
                    >
                      {({ getFieldValue }) => (
                        <Form.Item
                          {...restField}
                          name={[name, 'value']}
                          rules={[{ required: true, message: 'Please input value' }]}
                        >
                          {getFieldValue(['filters', name, 'filter']) === 'warehouse' ? (
                            <Select options={warehouseOptions} style={{ width: 200 }} />
                          ) : (
                            <InputNumber />
                          )}
                        </Form.Item>
                      )}
                    </Form.Item>
                  </Space>
                ))}
              </>
            )}
          </Form.List>
        </Form>
      </>
    </OModal>
  );
};

export default NewOrderbotModal;
