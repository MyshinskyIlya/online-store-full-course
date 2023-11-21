import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./components/AppRouter";
import { MyNavbar } from "./components/Navbar/Navbar";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Context } from ".";
import { check } from "./http/userApi";
import { Spinner } from "react-bootstrap";
import { fetchBrands, fetchDevices, fetchTypes } from "./http/deviceApi";

const App = observer(() => {
    const { user, devices } = useContext(Context);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        try {
            setTimeout(() => {
                fetchTypes().then((data) => devices?.setTypes(data));
                fetchBrands().then((data) => devices?.setBrands(data));
                fetchDevices(null!, null!, 1, 3).then((data) => {
                    devices?.setDevices(data.rows);
                    devices?.setTotalCount(data.count);
                });

                check()
                    .then((data) => {
                        user?.setUser(data);
                        user?.setIsAuth(true);
                    })
                    .finally(() => setLoading(false));
            }, 1000);
        } catch (e) {
            console.log(e);
        }
    }, []);

    if (loading) {
        return <Spinner animation="grow"></Spinner>;
    }
    return (
        <BrowserRouter>
            <MyNavbar></MyNavbar>
            <AppRouter></AppRouter>
        </BrowserRouter>
    );
});

export default App;
