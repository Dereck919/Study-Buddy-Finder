import mongoose from 'mongoose';
import express from 'express';
import { router } from './routes/listingRoutes.js'

const app = express();

const dbURI = "mongodb+srv://DjRePrincess:test1234@cluster0.aaph9xc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(dbURI)
    .then(result => app.listen(3000))
    .catch(err => console.log(err)) ; 

app.set('view engine', 'ejs');

// listings
app.use('/listings', router);

//404 page 
app.use((req, res) => {
    res.status(404).render('404');
});