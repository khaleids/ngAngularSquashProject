export interface ICenter {
    centerId: number;
    centerName: string;
    centerAddress: string;
    courts: ICourts[];
    description: string;
    price: number;
    starRating: number;
    imageUrl: string;
}

export interface ICourts {

    courtId: number, status: string
}