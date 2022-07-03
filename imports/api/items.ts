import { Mongo } from 'meteor/mongo';

export interface Item {
  _id?: string;
  name: string;
}

export const ItemsCollection = new Mongo.Collection<Item>('items');
