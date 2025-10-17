import express from 'express'
import {listing_index} from '../controllers/listingController.js';

const router = express.Router();

// all the postings 
router.get('/', listing_index);

// how do i post a single posting again 

export {router};