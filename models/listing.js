import mongoose from "mongoose";
import { Schema } from mongoose.Schema;

const listingSchema = new Schema({
    group_owner: {
        type: String,
        required: true,
    },
    preferred_group_size: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },

}, {timestamps: true});

// Listings should be a cluster? collection in mongodb 
const ListingModel = mongoose.model('Listings', listingSchema);
export {ListingModel};