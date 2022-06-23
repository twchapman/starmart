import { Mongo } from "meteor/mongo";

export type ListingType = "sell" | "buy";

export type ListingState = "active" | "complete" | "canceled";

export interface Listing {
    userId: string;
    type: ListingType;
    state: ListingState;
    itemId: string;
    variant: string;
    quantity: number;
    price: number;
}

export const ListingCollection = new Mongo.Collection<Listing>('listings');