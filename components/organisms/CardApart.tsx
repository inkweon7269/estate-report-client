import { Button, Card, Typography } from 'antd';

const { Text } = Typography;

interface IPropsApartCard {
    id: number;
    apart: {
        name: string;
        address1: string;
        address2: string;
        year: number;
        type: string;
        heatType: string;
        corridorType: string;
    };
    totalScore: number;
    isLike: boolean;

    onAddLike: (reportId: number) => void;
    onDeleteLike: (reportId: number) => void;
}

const CardApart = ({ id, apart, totalScore, isLike, onAddLike, onDeleteLike }: IPropsApartCard) => {
    const { name, address1, address2, year, type, heatType, corridorType } = apart;

    return (
        <Card title={name} extra={<Text strong>{totalScore}점</Text>}>
            <p>주소 1 : {address1}</p>
            <p>주소 2 : {address2}</p>
            <p>연식 : {year}</p>
            <p>주택 종류 : {type}</p>
            <p>난방 방식 : {heatType}</p>
            <p>복도 종류 : {corridorType}</p>

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                {isLike ? (
                    <Button
                        danger
                        ghost
                        onClick={(e) => {
                            e.preventDefault();
                            onDeleteLike(id);
                        }}
                    >
                        즐겨찾기 제거
                    </Button>
                ) : (
                    <Button
                        type="primary"
                        ghost
                        onClick={(e) => {
                            e.preventDefault();
                            onAddLike(id);
                        }}
                    >
                        즐겨찾기 추가
                    </Button>
                )}
            </div>
        </Card>
    );
};

export default CardApart;
