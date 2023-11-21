import { makeAutoObservable } from "mobx";

export interface TypesInterface {
    id?: number;
    name: string;
}

export interface BrandsInterface {
    id?: number;
    name: string;
}

export interface DevicesInterface {
    id: number;
    name: string;
    price: number;
    rating: number;
    img: string;
    brandId: number;
    typeId: number;
    info?: {
        id: number;
        title: string;
        description: string;
    }[];
}

export interface DeviceStoreInterface {
    _types: TypesInterface[] | [];
    _brands: BrandsInterface[] | [];
    _devices: DevicesInterface[] | [];
    _selectedType: TypesInterface | null;
    _selectedBrand: BrandsInterface | null;
    _page: number;
    _totalCount: number;
    _limit: number;

    setTypes: (types: TypesInterface[]) => void;
    setBrands: (brands: BrandsInterface[]) => void;
    setDevices: (devices: DevicesInterface[]) => void;
    setSelectedType: (type: TypesInterface) => void;
    setSelectedBrand: (type: BrandsInterface) => void;
    setPage: (page: number) => void;
    setTotalCount: (totalCount: number) => void;
    setLimit: (limit: number) => void;

    types: TypesInterface[];
    brands: BrandsInterface[];
    devices: DevicesInterface[];
    selectedType: TypesInterface | null;
    selectedBrand: BrandsInterface | null;

    page: number;
    totalCount: number;
    limit: number;
}

export default class DeviceStore implements DeviceStoreInterface {
    _types: TypesInterface[] = [];
    _brands: BrandsInterface[] = [];
    _devices: DevicesInterface[] = [];

    _selectedType: TypesInterface | null = null;
    _selectedBrand: BrandsInterface | null = null;

    _page = 1;
    _totalCount = 0;
    _limit = 3;

    constructor() {
        makeAutoObservable(this);
    }

    setTypes(types: TypesInterface[]) {
        this._types = types;
    }

    setBrands(brands: BrandsInterface[]) {
        this._brands = brands;
    }

    setDevices(devices: DevicesInterface[]) {
        this._devices = devices;
    }

    setSelectedType(type: TypesInterface | null) {
        this.setPage(1);
        this._selectedType = type;
    }

    setSelectedBrand(brand: BrandsInterface | null) {
        this.setPage(1);
        this._selectedBrand = brand;
    }

    setPage(page: number) {
        this._page = page;
    }

    setTotalCount(totalCount: number) {
        this._totalCount = totalCount;
    }

    setLimit(limit: number) {
        this._limit = limit;
    }

    get types() {
        return this._types;
    }

    get brands() {
        return this._brands;
    }
    get devices() {
        return this._devices;
    }
    get selectedType() {
        return this._selectedType;
    }
    get selectedBrand() {
        return this._selectedBrand;
    }

    get page() {
        return this._page;
    }
    get totalCount() {
        return this._totalCount;
    }
    get limit() {
        return this._limit;
    }
}
