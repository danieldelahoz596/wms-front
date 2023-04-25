import DebounceSelect from '@/components/Globals/DebounceSelect';
import type ICustomer from '@/interfaces/ICustomer';
import { useModel } from '@umijs/max';
import { Card, Form, Input, Select, InputNumber } from 'antd';
import { useState, useMemo, useEffect } from 'react';
import qs from 'qs';

interface IRecipient {
  form: any;
}

const Recipient: React.FC<IRecipient> = ({ form }) => {
  const { stateList } = useModel('states');
  const [cityOptions, setCityOptions] = useState<{ label: string; value: string | number }[]>([]);
  const selectedStateId = Form.useWatch('state_id', form);
  const [value, setValue] = useState([]);
  const { getCustomerList } = useModel('customer');

  const stateOptions = useMemo(() => stateList.map((state) => ({ value: state.id, label: state.name })), [stateList]);

  useEffect(() => {
    setCityOptions(
      stateList.find((item) => item.id === selectedStateId)?.cities.map((city) => ({ label: city.name, value: city.id })),
    );
  }, [selectedStateId, stateList, form]);

  const fetchCustomerList = (s) => {
    return getCustomerList(qs.stringify({ name: s, phone_number: s, address: s })).then(({ data }) => {
      return data.map((customer: ICustomer) => ({
        label: `${customer.name} - ${customer.phone_number} - ${customer.address}`,
        value: customer.id,
        ...customer,
      }));
    });
  };

  return (
    <Card title="Recipient">
      <DebounceSelect
        value={value}
        placeholder="Select users"
        fetchOptions={fetchCustomerList}
        onChange={(newValue, option) => {
          setValue(newValue);
          form.setFieldsValue(option);
        }}
        style={{ width: '100%' }}
      />
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        labelAlign="left"
        initialValues={{ remember: true }}
        autoComplete="off"
        form={form}
        style={{ marginTop: 10 }}
        onFieldsChange={(changedFields) => {
          if (changedFields.length > 0 && changedFields[0].name[0] === 'state_id') form.setFieldValue('city_id', null);
        }}
      >
        <Form.Item name="id" label="id" hidden={true}>
          <Input />
        </Form.Item>
        <Form.Item name="phone_type" label="Phone Type">
          <Select
            placeholder="Phone Type"
            options={[
              { value: 'mobile', label: 'Mobile' },
              { value: 'home', label: 'Home' },
            ]}
            size="small"
          />
        </Form.Item>
        <Form.Item name="phone_number" label="Phone Number">
          <Input placeholder="Phone Number" size="small" />
        </Form.Item>
        <Form.Item label="Name" name="name">
          <Input size="small" />
        </Form.Item>
        <Form.Item label="State" name="state_id">
          <Select size="small" options={stateOptions} />
        </Form.Item>
        <Form.Item label="City" name="city_id">
          <Select size="small" options={cityOptions} />
        </Form.Item>
        <Form.Item label="Address" name="address">
          <Input size="small" />
        </Form.Item>
        <Form.Item name="age" label="Age">
          <InputNumber style={{ width: '100%' }} placeholder="Age" size="small" min={0} />
        </Form.Item>
        <Form.Item name="sex" label="Sex">
          <Select
            options={[
              { value: 1, label: 'Male' },
              { value: 0, label: 'Female' },
            ]}
            size="small"
          />
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Recipient;
