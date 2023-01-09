import { PageContainer } from '@ant-design/pro-components';
import { Card, Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { Bar, Line } from '@ant-design/charts';
const Dashboard: React.FC = () => {
    const data = [
        { year: '1991', value: 3 },
        { year: '1992', value: 4 },
        { year: '1993', value: 3.5 },
        { year: '1994', value: 5 },
        { year: '1995', value: 4.9 },
        { year: '1996', value: 6 },
        { year: '1997', value: 7 },
        { year: '1998', value: 9 },
        { year: '1999', value: 13 },
    ];

    const config = {
        data,
        width: 800,
        height: 400,
        autoFit: false,
        xField: 'year',
        yField: 'value',
        point: {
            size: 5,
            shape: 'diamond',
        },
        label: {
            style: {
                fill: '#aaa',
            },
        },
    };

    let chart: any;

    // Export Image
    const downloadImage = () => {
        chart?.downloadImage();
    };

    // Get chart base64 string
    const toDataURL = () => {
        console.log(chart?.toDataURL());
    };

    const [barData, setBarData] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/bmw-prod/be63e0a2-d2be-4c45-97fd-c00f752a66d4.json')
            .then((response) => response.json())
            .then((json) => setBarData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };
    const configBar = {
        data,
        yField: '城市',
        xField: '销售额',
        yAxis: {
            label: {
                autoRotate: false,
            },
        },
        scrollbar: {
            type: 'vertical',
        },
    };

    const pieData = [
        {
          type: '分类一',
          value: 27,
        },
        {
          type: '分类二',
          value: 25,
        },
        {
          type: '分类三',
          value: 18,
        },
        {
          type: '分类四',
          value: 15,
        },
        {
          type: '分类五',
          value: 10,
        },
        {
          type: '其他',
          value: 5,
        },
      ];
      const pieconfig = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 0.75,
        label: {
          type: 'spider',
          labelHeight: 28,
          content: '{name}\n{percentage}',
        },
        interactions: [
          {
            type: 'element-selected',
          },
          {
            type: 'element-active',
          },
        ],
      };
    return (
        <PageContainer>
            <Card
                style={{
                    borderRadius: 8,
                }}
                bodyStyle={{
                    backgroundImage:
                        'radial-gradient(circle at 97% 10%, #EBF2FF 0%, #F5F8FF 28%, #EBF1FF 124%)',
                }}
            >
                <Row>
                    <Col span={12}>
                        <div>
                            <div>
                                <button type="button" onClick={downloadImage} style={{ marginRight: 24 }}>
                                    Export Image
                                </button>
                                <button type="button" onClick={toDataURL}>
                                    Get base64
                                </button>
                                <Line {...config} onReady={(chartInstance) => (chart = chartInstance)} />
                            </div>
                        </div>
                    </Col>
                    <Col span={12}>
                        <Bar {...config} />
                    </Col>
                    <Col span={12}>

                    </Col>
                </Row>

            </Card>
        </PageContainer>
    );
};

export default Dashboard;
