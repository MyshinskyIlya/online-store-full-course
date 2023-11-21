import { $host, $authhost } from ".";
import { jwtDecode } from "jwt-decode";
import {
    BrandsInterface,
    DevicesInterface,
    TypesInterface,
} from "../store/DeviceStore";

export const createType = async (type: TypesInterface) => {
    const { data } = await $authhost.post("api/type", type);
    return data;
};

export const fetchTypes = async () => {
    const { data } = await $host.get("api/type");
    return data;
};

export const createBrand = async (brand: BrandsInterface) => {
    const { data } = await $authhost.post("api/brand", brand);
    return data;
};

export const fetchBrands = async () => {
    const { data } = await $host.get("api/brand");
    return data;
};

export const createDevice = async (device: any) => {
    const { data } = await $authhost.post("api/device", device);
    return data;
};

export const fetchDevices = async (
    typeId: number,
    brandId: number,
    page: number,
    limit = 3
) => {
    const { data } = await $host.get("api/device", {
        params: {
            typeId,
            brandId,
            page,
            limit,
        },
    });
    return data;
};

export const fetchOneDevice = async (id: any) => {
    const { data } = await $host.get(`api/device/${id}`);
    return data;
};
