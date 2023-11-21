import React, { FC, useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Shop, Admin, Auth, DevicePage, Basket } from "../pages";
import { authRoutes, publickRoutes } from "../Routes";
import { Context } from "..";
import { observer } from "mobx-react-lite";

export const AppRouter: FC = observer(() => {
    const { user } = useContext(Context);

    let isAuth = user?._isAuth;

    return (
        <Routes>
            {isAuth &&
                authRoutes.map(({ path, Component }) => {
                    return (
                        <Route
                            key={path}
                            path={path}
                            Component={Component}
                        ></Route>
                    );
                })}
            {publickRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} Component={Component}></Route>
            ))}
            <Route path="*" element={<Shop></Shop>}></Route>
        </Routes>
    );
});

{
    /* <Route path="/" Component={Shop}></Route>
            <Route path="/admin" element={<Admin></Admin>}></Route>
            <Route path="/auth" element={<Auth></Auth>}></Route>
            <Route path="/basket" element={<Basket></Basket>}></Route>
            <Route
                path="/device/:id"
                element={<DevicePage></DevicePage>}
            ></Route> */
}
