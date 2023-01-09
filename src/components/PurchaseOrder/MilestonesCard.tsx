import React, {useEffect} from 'react';
import {  
  Card,
  Row,
  Col,
  Checkbox,
} from 'antd';

interface IMilestonesCard {
    data?: any;
}

const MilestonesCard: React.FC<IMilestonesCard> = ({
    data,
}) => {

    useEffect(() => { console.log(data)})

    return (
        <Card title="Milestones">
            <Row>
                <Col span={2}>
                    <Checkbox checked/>
                </Col>
                <Col span={22}>
                    30% Deposit Paid
                </Col>
            </Row>
            <Row>
                <Card style={{ height: '100%', width: '100%', marginTop: '10%', padding: '10%' }}></Card>
            </Row>
        </Card>
    );
};

export default MilestonesCard;
