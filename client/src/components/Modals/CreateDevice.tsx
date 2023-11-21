import React, { FC, useContext, useRef, useState } from "react";
import { Button, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";
import { Context } from "../..";
import { observer } from "mobx-react-lite";
import { createDevice } from "../../http/deviceApi";

interface CreateDeviceProps {
    show: boolean;
    onHide: any;
}

interface InfoInterface {
    title: string;
    description: string;
    number: number;
}

export const CreateDevice: FC<CreateDeviceProps> = observer(
    ({ show, onHide }) => {
        const { devices } = useContext(Context);
        const [info, setInfo] = useState<InfoInterface[] | []>([]);

        const [name, setName] = useState("");
        const [price, setPrice] = useState<number | "">("");
        const [file, setFile] = useState("");

        const addInfo = () => {
            setInfo((prev) => {
                return [
                    ...prev,
                    { title: "", description: "", number: Date.now() },
                ];
            });
        };

        const changeInfo = (key: string, value: string, number: number) => {
            setInfo((prev) =>
                prev.map((i) =>
                    i.number === number ? { ...i, [key]: value } : i
                )
            );
        };

        const addDevice = () => {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("price", `${price}`);
            formData.append("img", file);
            formData.append("brandId", `${devices?.selectedBrand?.id}`);
            formData.append("typeId", `${devices?.selectedType?.id}`);
            formData.append("info", JSON.stringify(info));
            createDevice(formData).then((data) => onHide());
        };

        const removeInfo = (number: number) => {
            setInfo(info.filter((i) => i.number !== number));
        };

        const selectFile = (e: any) => {
            if (e.target.files) {
                setFile(e.target.files[0]);
            }
        };
        return (
            <Modal show={show} onHide={onHide} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Добавить девайс
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="d-flex gap-1">
                        <Dropdown>
                            <Dropdown.Toggle className="w-40">
                                {devices?.selectedType?.name || "Выберите тип"}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {devices?.types.map((type) => (
                                    <Dropdown.Item
                                        onClick={() =>
                                            devices.setSelectedType(type)
                                        }
                                        key={type.id}
                                    >
                                        {type.name}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle className="w-40">
                                {devices?.selectedBrand?.name ||
                                    "Выберите брэнд"}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {devices?.brands.map((brand) => (
                                    <Dropdown.Item
                                        onClick={() =>
                                            devices.setSelectedBrand(brand)
                                        }
                                        key={brand.id}
                                    >
                                        {brand.name}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Form.Control
                            value={name}
                            className="w-40"
                            placeholder="Название"
                            onChange={(e) => setName(e.target.value)}
                        ></Form.Control>
                        <Form.Control
                            value={price === 0 ? "" : price}
                            className="w-80"
                            placeholder="Стоимость"
                            type="number"
                            onChange={(e) => setPrice(+e.target.value)}
                        ></Form.Control>
                        <Form.Control
                            className="w-40"
                            placeholder="Кол-во"
                            type="number"
                        ></Form.Control>
                        <Form.Control
                            className="w-65"
                            type="file"
                            onChange={selectFile}
                        ></Form.Control>
                    </Form>
                    <Button variant="outline-dark mt-2 mb-3" onClick={addInfo}>
                        Добавить новое свойство
                    </Button>
                    <div className="d-flex gap-2 flex-column">
                        {info.map((i) => (
                            <Row className="d-flex" key={i.number}>
                                <Col md={5}>
                                    <Form.Control
                                        placeholder="Введите название"
                                        value={i.title}
                                        onChange={(e) =>
                                            changeInfo(
                                                "title",
                                                e.target.value,
                                                i.number
                                            )
                                        }
                                    ></Form.Control>
                                </Col>
                                <Col md={5}>
                                    <Form.Control
                                        placeholder="Введите описание"
                                        value={i.description}
                                        onChange={(e) =>
                                            changeInfo(
                                                "description",
                                                e.target.value,
                                                i.number
                                            )
                                        }
                                    ></Form.Control>
                                </Col>
                                <Col md={2}>
                                    <Button
                                        variant="outline-dark w-100"
                                        onClick={() => removeInfo(i.number)}
                                    >
                                        Удалить
                                    </Button>
                                </Col>
                            </Row>
                        ))}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="outline-success"
                        onClick={() => addDevice()}
                    >
                        Добавить
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
);
