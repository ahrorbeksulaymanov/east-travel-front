

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