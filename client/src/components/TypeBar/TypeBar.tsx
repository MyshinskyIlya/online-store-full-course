import { observer } from "mobx-react-lite";
import { FC, useContext } from "react";
import { Context } from "../..";
import { ListGroup } from "react-bootstrap";

export const TypeBar: FC = observer(() => {
    const { devices } = useContext(Context);

    return (
        <ListGroup>
            {devices?.types.map((type) => (
                <ListGroup.Item
                    style={{ cursor: "pointer" }}
                    active={devices._selectedType?.id === type.id}
                    key={type.id}
                    onClick={() => devices.setSelectedType(type)}
                >
                    {type.name}
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
});
