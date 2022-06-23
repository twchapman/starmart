import { Mongo } from "meteor/mongo";

export interface User {
    id: string;
    starCitizenHandle: string;
}

export const UserCollection = new Mongo.Collection<User>('users');