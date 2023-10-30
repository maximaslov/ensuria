export interface Picture {
 id: number;
 image: string;
 price: string;
}

export interface GetPicturesResponse {
 id: number;
 pictures: Picture[];
}
