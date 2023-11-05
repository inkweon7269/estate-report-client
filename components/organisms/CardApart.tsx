import { Card, Typography } from 'antd';

const { Text } = Typography;

interface IPropsApartCard {
    apart: {
        name: string;
        address1: string;
        address2: string;
        year: number;
        type: string;
        heatType: string;
        corridorType: string;
    };
    score: number;
}

const CardApart = ({ apart, score }: IPropsApartCard) => {
    const { name, address1, address2, year, type, heatType, corridorType } = apart;

    return (
        <Card title={name} extra={<Text strong>{score}점</Text>}>
            <p>주소 1 : {address1}</p>
            <p>주소 2 : {address2}</p>
            <p>연식 : {year}</p>
            <p>주택 종류 : {type}</p>
            <p>난방 방식 : {heatType}</p>
            <p>복도 종류 : {corridorType}</p>
        </Card>
    );
};

export default CardApart;
