import { FC, useContext, useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { Context } from "..";
import { useParams } from "react-router-dom";
import { IoStarOutline } from "react-icons/io5";
import { observer } from "mobx-react-lite";
import { fetchOneDevice } from "../http/deviceApi";
import { DevicesInterface } from "../store/DeviceStore";

interface descriptionInterface {
    id: number;
    title: string;
    description: string;
}

export const DevicePage: FC = observer(() => {
    const [device, setDevice] = useState<DevicesInterface>({
        id: 0, // Установите здесь значения по умолчанию или оставьте пустыми в зависимости от ваших потребностей
        name: "",
        price: 0,
        rating: 0,
        img: "",
        brandId: 0,
        typeId: 0,
        info: [],
    });

    const { id } = useParams();
    useEffect(() => {
        fetchOneDevice(id).then((data) => setDevice(data));
    }, []);

    // `${process.env.REACT_APP_API_URL}/${device?.img}`
    return (
        <Container className="mt-3">
            <Row>
                {device.img && (
                    <Col md={4}>
                        <Image
                            width={300}
                            height={300}
                            src={`${process.env.REACT_APP_API_URL}/${device.img}`}
                        ></Image>
                    </Col>
                )}
                <Col md={4}>
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <h2>{device?.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center "
                            style={{
                                background: `url(https://upload.wikimedia.org/wikipedia/commons/f/fd/A_star.png) no-repeat center center`,
                                width: 240,
                                height: 240,
                                backgroundSize: "cover",
                                fontSize: 64,
                            }}
                        >
                            <span style={{ marginRight: 8, marginTop: 8 }}>
                                {device?.rating}
                            </span>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-center"
                        style={{
                            width: 300,
                            height: 300,
                            fontSize: 32,
                            border: "5px solid lightgray",
                        }}
                    >
                        <h3>От: {device?.price} руб.</h3>
                        <Button variant="outline-dark">
                            Добавить в корзину
                        </Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex mt-3">
                <h2>Описание</h2>
                {device.info &&
                    device.info.map(
                        (item: descriptionInterface, index: number) => (
                            <Row
                                key={item.id}
                                style={{
                                    background:
                                        index % 2 === 0
                                            ? "lightgray"
                                            : "transparent",
                                    padding: 10,
                                }}
                            >
                                {item.title} : {item.description}
                            </Row>
                        )
                    )}
                {}
            </Row>
        </Container>
    );
});
