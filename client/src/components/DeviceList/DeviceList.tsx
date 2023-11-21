import { observer } from "mobx-react-lite";
import { FC, useContext } from "react";
import { Row } from "react-bootstrap";
import { Context } from "../..";
import { DeviceItem } from "./DeviceItem/DeviceItem";

export const DeviceList: FC = observer(() => {
    const { devices } = useContext(Context);
    return (
        <Row md={5}>
            {devices?.devices &&
                devices?.devices.map((dev) => (
                    <DeviceItem key={dev.id} device={dev}></DeviceItem>
                ))}
        </Row>
    );
});
