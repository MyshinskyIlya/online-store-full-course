import React, { FC } from "react";
import { Card, Col, Image } from "react-bootstrap";
import { DevicesInterface } from "../../../store/DeviceStore";
import { IoStarOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

interface DeviceItemProps {
    device: DevicesInterface;
}
export const DeviceItem: FC<DeviceItemProps> = ({ device }) => {
    const navigate = useNavigate();

    return (
        <Col md={3} className="mt-3">
            <Card
                style={{ width: 150, cursor: "pointer" }}
                border="light"
                onClick={() => navigate(`/device/${device.id}`)}
            >
                <Image
                    width={150}
                    height={150}
                    src={`${process.env.REACT_APP_API_URL}/${device.img}`}
                ></Image>
                <div className="d-flex justify-content-between mt-2 text-black-50">
                    <div>Samsung</div>
                    <div className="d-flex align-items-center">
                        <div>{device.rating}</div>
                        <IoStarOutline></IoStarOutline>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
};
