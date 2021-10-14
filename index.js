import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
 
import Routes from './server/route.js';

const app = express();  
app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/users', Routes);

 

// const URL = 'mongodb+srv://user:interview@crudd.8utp9.mongodb.net/PROJECT0?retryWrites=true&w=majority'
const URL = 'mongodb+srv://user:interview@crudd.8utp9.mongodb.net/PROJECT0?retryWrites=true&w=majority'
 
const PORT = process.env.PORT || '8080';  
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(() => { 
      
    app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))
}).catch((error) => {
    console.log('Error:', error.message)
})

 
