import { OInput } from '@/components/Globals/OInput';
import { Card, Form } from 'antd';

const Recipient = () => {
  const formInputs = [
    {
      type: 'text',
      name: 'name',
      label: 'Name',
      placeholder: 'Required',
    },
    {
      type: 'text',
      name: 'company',
      label: 'Company',
    },
    {
      type: 'text',
      name: 'address',
      label: 'Address',
      placeholder: 'Required',
    },
    {
      type: 'text',
      name: 'address2',
    },
    {
      type: 'text',
      name: 'address3',
    },
    {
      type: 'text',
      name: 'city',
      label: 'City',
      placeholder: 'Required',
    },
    [
      {
        type: 'select',
        label: 'State, Zip',
        name: 'state',
        placeholder: 'Select..',
        options: [
          {
            value: 'lucy',
            label: 'lucky',
          },
        ],
      },
      {
        type: 'text',
        name: 'zip',
        placeholder: 'Required',
      },
    ],
    {
      type: 'select',
      name: 'Country',
      label: 'Country',
      placeholder: 'Select..',
      options: [
        {
          value: 'lucy',
          label: 'lucky',
        },
      ],
    },
    {
      type: 'text',
      name: 'phone',
      label: 'Phone',
    },
    {
      type: 'text',
      name: 'email',
      label: 'E-Mail',
    },
  ];

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <Card title="RECIPEINT">
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        {formInputs.map((item, index) =>
          Array.isArray(item) ? (
            <Form.Item label={item[0]?.label}>
              {item.map((groupItem, groupIndex) => (
                <Form.Item
                  key={groupIndex}
                  name={groupItem.name}
                  style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                >
                  <OInput placeholder={groupItem.placeholder} />
                </Form.Item>
              ))}
            </Form.Item>
          ) : (
            <Form.Item
              key={index}
              label={item.label}
              name={item.name}
              style={{ justifyContent: 'flex-end' }}
            >
              <OInput placeholder={item.placeholder} />
            </Form.Item>
          ),
        )}
      </Form>
    </Card>
  );
};

export default Recipient;
