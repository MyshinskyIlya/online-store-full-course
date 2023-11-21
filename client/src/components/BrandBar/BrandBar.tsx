import { FC, useContext } from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import { Context } from "../..";
import { observer } from "mobx-react-lite";

export const BrandBar: FC = observer(() => {
    const { devices } = useContext(Context);

    return (
        <Row className="d-flex" bsPrefix="col">
            {devices?.brands.map((brand) => (
                <Card
                    border={
                        brand.id === devices.selectedBrand?.id
                            ? "success"
                            : "light"
                    }
                    className="p-3"
                    style={{ cursor: "pointer" }}
                    // active={devices._selectedBrand?.id === brand.id}
                    key={brand.id}
                    onClick={() => devices.setSelectedBrand(brand)}
                >
                    {brand.name}
                </Card>
            ))}
        </Row>
    );
});
