import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createContext } from "react";
import UserStore, { UserStoreInterface } from "./store/UserStore";
import DeviceStore, { DeviceStoreInterface } from "./store/DeviceStore";

export interface AppContextValue {
    user?: UserStoreInterface;
    devices?: DeviceStoreInterface;
}

export const Context = createContext<AppContextValue>({});

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <Context.Provider
        value={{
            user: new UserStore(),
            devices: new DeviceStore(),
        }}
    >
        <App />
    </Context.Provider>
);
