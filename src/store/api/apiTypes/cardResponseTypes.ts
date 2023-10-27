export interface Card {
 id: number;
 image?: string;
 color?: string;
 title?: string;
 text?: string;
 $withCutCorner?: boolean;
 $isLarge?: boolean;
 $isEmpty: boolean;
 $isDoubleSize: boolean;
}

export interface GetCardsResponse {
 id: string;
 topCards: Card[];
 bottomCards: Card[];
}
