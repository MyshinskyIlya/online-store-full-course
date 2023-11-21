import React, { FC, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { createBrand } from "../../http/deviceApi";

interface CreateBrandProps {
    show: boolean;
    onHide: any;
}

export const CreateBrand: FC<CreateBrandProps> = ({ show, onHide }) => {
    const [value, setValue] = useState("");

    const addBrand = () => {
        createBrand({
            name: value,
        }).then((data) => setValue(""));
        onHide();
    };

    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить Brand
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        placeholder="Введите название типа"
                        onChange={(e) => setValue(e.target.value)}
                    ></Form.Control>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="outline-success"
                    onClick={() => {
                        addBrand();
                    }}
                >
                    Добавить
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
