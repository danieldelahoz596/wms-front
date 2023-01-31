import { useState } from 'react';
import { Button, Card, Col, Form, Row, Space } from 'antd';
import { OInput } from '@/components/Globals/OInput';
import httpClient from '@/utils/http-client';
import { useModel } from '@umijs/max';
import qs from 'qs';

const initailState = {
  phonenumber: '',
  card_number: '',
  name: '',
  city: '',
  state: '',
  country: '',
};

export default function SearchCustomer() {
  const [searchQuery, setSearchQuery] = useState(initailState);
  const { setCustomerList } = useModel('customer');

  const handleSearchQueryChange = (name: string, value: string) => {
    setSearchQuery((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSearch = (query) => {
    httpClient
      .get('/api/customers?' + qs.stringify(query))
      .then((response) => {
        setCustomerList(response.data.customers);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const clearSearchQuery = () => {
    setSearchQuery(initailState);
    onSearch(initailState);
  };

  const inputFields = [
    {
      type: 'text',
      name: 'phonenumber',
      label: 'Phone Number',
    },
    {
      type: 'text',
      name: 'card_number',
      label: 'Card ID Number',
    },
    {
      type: 'text',
      name: 'name',
      label: 'Name',
    },
    {
      type: 'text',
      name: 'city',
      label: 'City',
    },
    {
      type: 'text',
      name: 'state',
      label: 'State/Province',
    },
    {
      type: 'text',
      name: 'country',
      label: 'Country',
    },
  ];

  return (
    <Row>
      <Col span={24}>
        <Card
          size="small"
          className="horizon-card"
          title={
            <h3
              style={{
                fontSize: '1rem',
                fontWeight: '700',
                color: '#A2A2A2',
              }}
            >
              Search Customers
            </h3>
          }
        >
          <Space direction="vertical">
            <Form>
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
            </Form>
            <div>
              <Button type="ghost" onClick={clearSearchQuery}>
                Clear
              </Button>{' '}
              &nbsp;
              <Button type="primary" onClick={() => onSearch(searchQuery)}>
                Search
              </Button>
            </div>
          </Space>
        </Card>
      </Col>
    </Row>
  );
}
