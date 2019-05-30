import { Mongo } from 'meteor/mongo';

// Creates a new Mongo collections and exports it
export const Events = new Mongo.Collection('events');
export const Userrs = new Mongo.Collection('userrs');