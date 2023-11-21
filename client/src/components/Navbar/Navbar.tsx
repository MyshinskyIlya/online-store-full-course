import { FC, useContext } from "react";
import { Context } from "../..";
import Navbar from "react-bootstrap/Navbar";
import { Button, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { observer } from "mobx-react-lite";
import {
    ADMIN_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE,
} from "../../utils/consts";

export const MyNavbar: FC = observer(() => {
    const { user, devices } = useContext(Context);

    const logOut = () => {
        user?.setUser({});
        user?.setIsAuth(false);
        localStorage.removeItem("token");
    };

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <NavLink
                        style={{ color: "white", textDecoration: "none" }}
                        to="/"
                    >
                        MyStore
                    </NavLink>
                    {user?.isAuth ? (
                        <Nav className="ml-auto">
                            <Link to={ADMIN_ROUTE}>
                                <Button variant="outline-light">
                                    Админ панель
                                </Button>
                            </Link>
                            <Link to={LOGIN_ROUTE}>
                                <Button
                                    variant="outline-light"
                                    style={{ marginLeft: "0.5rem" }}
                                    onClick={() => logOut()}
                                >
                                    Выйти
                                </Button>
                            </Link>
                        </Nav>
                    ) : (
                        <Nav className="ml-auto">
                            <Link to={LOGIN_ROUTE}>
                                <Button variant="outline-light">
                                    Авторизация
                                </Button>
                            </Link>
                        </Nav>
                    )}
                </Container>
            </Navbar>
        </>
    );
});
