import React, { FC, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { CreateBrand } from "../components/Modals/CreateBrand";
import { CreateDevice } from "../components/Modals/CreateDevice";
import { CreateType } from "../components/Modals/CreateType";

export const Admin: FC = () => {
    const [brandVisible, setBrandVisible] = useState(false);
    const [typeVisible, setTypeVisible] = useState(false);
    const [deviceVisible, setDeviceVisible] = useState(false);

    return (
        <Container className="d-flex flex-column">
            <Button
                variant="outline-dark"
                className="mt-2 p-1"
                onClick={() => setTypeVisible(true)}
            >
                Добавить тип
            </Button>
            <Button
                variant="outline-dark"
                className="mt-2"
                onClick={() => setBrandVisible(true)}
            >
                Добавить бренд
            </Button>
            <Button
                variant="outline-dark"
                className="mt-2"
                onClick={() => setDeviceVisible(true)}
            >
                Добавить устройство
            </Button>
            <CreateBrand
                show={brandVisible}
                onHide={() => setBrandVisible(false)}
            ></CreateBrand>
            <CreateType
                show={typeVisible}
                onHide={() => setTypeVisible(false)}
            ></CreateType>
            <CreateDevice
                show={deviceVisible}
                onHide={() => setDeviceVisible(false)}
            ></CreateDevice>
        </Container>
    );
};
