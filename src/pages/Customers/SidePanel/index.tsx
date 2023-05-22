import { OButton } from '@/components/Globals/OButton';
import { OInput } from '@/components/Globals/OInput';
import httpClient from '@/utils/http-client';
import { FormattedMessage, useModel } from '@umijs/max';
import { Card, Space } from 'antd';
import qs from 'qs';
import { useState } from 'react';

const initailState = {
  phone_number: '',
  name: '',
  city: '',
  state: '',
};

const inputFields = [
  {
    type: 'text',
    name: 'phone_number',
    label: <FormattedMessage id="component.form.label.phoneNumber" />,
  },
  {
    type: 'text',
    name: 'name',
    label: <FormattedMessage id="component.form.label.name" />,
  },
  {
    type: 'select',
    name: 'state',
    label: <FormattedMessage id="component.form.label.stateProvince" />,
  },
  {
    type: 'select',
    name: 'city',
    label: <FormattedMessage id="component.form.label.city" />,
  },
];

export default function SidePanel() {
  const [searchQuery, setSearchQuery] = useState(initailState);
  const { setCustomerList, setSelectedCustomer } = useModel('customer');

  const handleSearchQueryChange = (name: string, value: string) => {
    setSearchQuery((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSearch = (query) => {
    httpClient
      .get('/api/customers?' + qs.stringify(query))
      .then((response) => {
        setSelectedCustomer(null);
        setCustomerList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const clearSearchQuery = () => {
    setSearchQuery(initailState);
    onSearch(initailState);
  };

  return (
    <div className="left-panel">
      <div className="title-row">
        <h1>
          <FormattedMessage id="pages.customers.leftPanel.title" />
        </h1>
      </div>
      <Card>
        <Space direction="vertical" size={VERTICAL_SPACE_SIZE} style={{ display: 'flex' }}>
          {inputFields.map((_inputField, _index) => (
            <div key={_index}>
              <span>{_inputField.label}:</span>
              <OInput
                type={_inputField.type}
                name={_inputField.name}
                value={searchQuery[_inputField.name]}
                onChange={handleSearchQueryChange}
              />
            </div>
          ))}
        </Space>
        <div className="search-button-row space-between">
          <OButton btnText={<FormattedMessage id="component.button.clear" />} onClick={clearSearchQuery} />
          <OButton btnText={<FormattedMessage id="component.button.search" />} onClick={() => onSearch(searchQuery)} />
        </div>
      </Card>
    </div>
  );
}
