import React, { FC, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { createType } from "../../http/deviceApi";

interface CreateTypeProps {
    show: boolean;
    onHide: any;
}

export const CreateType: FC<CreateTypeProps> = ({ show, onHide }) => {
    const [value, setValue] = useState("");

    const addType = () => {
        createType({
            name: value,
        }).then((data) => setValue(""));
        onHide();
    };
    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        placeholder="Введите название типа"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    ></Form.Control>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={() => addType()}>
                    Добавить
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
