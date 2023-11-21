import React, { FC, useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { TypeBar } from "../components/TypeBar/TypeBar";
import { BrandBar } from "../components/BrandBar/BrandBar";
import { DeviceList } from "../components/DeviceList/DeviceList";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { fetchBrands, fetchDevices, fetchTypes } from "../http/deviceApi";
import { Pages } from "../components/Pages/Pages";

export const Shop: FC = observer(() => {
    const { devices } = useContext(Context);

    useEffect(() => {
        fetchDevices(
            devices?.selectedType?.id!,
            devices?.selectedBrand?.id!,
            devices?.page!,
            2
        ).then((data) => {
            if (data.rows) {
                devices?.setDevices(data?.rows);
            } else {
                devices?.setDevices(data);
            }
            if (data.count) {
                devices?.setTotalCount(data?.count);
            } else {
                devices?.setTotalCount(data);
            }
        });
    }, [devices?.page, devices?.selectedType, devices?.selectedBrand]);

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar></TypeBar>
                </Col>
                <Col md={9}>
                    <BrandBar></BrandBar>
                    <DeviceList></DeviceList>
                    <Pages></Pages>
                </Col>
            </Row>
        </Container>
    );
});
