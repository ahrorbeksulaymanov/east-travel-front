

export interface IBasic<T = any>{
    status: number;
    message: string;
    data: {
        items: T,
        meta: {
            page: number
            size: number
            totalElements: number
            totalPages: number
        }
    }
}

export interface IItineraries {
    id: number;
    description: string;
    day: string;
}

export interface IPrice {
    id: number
    price: number
    priceCondition: {
        ageTo: number;
        ageFrom: number;
        name: string;
        id: number;
    }
}

export interface ITour{
    id: number;
    createdDate: string;
    mainPhoto: string;
    creator: string;
    description: string;
    view: number;
    title: string;
    startDate: string;
    endDate: string;
    slug: string;
    photos: string[];
    prices: IPrice[]
    itineraries: IItineraries[]
}

export interface ICity{
    id: number;
    title: string;
    mainPhoto: string;
    photos: string[];
}

export interface IEmployee{
    id: number;
    email: string;
    firstName: string;
    jobPosition: string;
    lastName: string;
    phone: string;
    photo: string;
}

export interface ITransportType{
    id: number;
    name: string;
}

export interface ITransport{
    id: number;
    title: string;
    brand: string;
    capacity: number;
    description: string;
    mainPhoto: string;
    transportType: ITransportType;
    photos: string[]
}

export interface IDistrict{
    id: number;
    name: string;
    region: {
        id: number;
        name: string;
    }
}

export interface IHotel{
    id: number;
    title: string;
    mainPhoto: string;
    photos: string[];
    district: IDistrict
}

export interface IGallery{
    id: number;
    description: string;
    photo: string;
}

export interface IMice{
    id: number;
    description: string;
    photo: string;
    title: string;
}

export interface IRegion {
    id: number;
    name: string;
    districts: Array<{
        id: number;
        name: string
    }>
}