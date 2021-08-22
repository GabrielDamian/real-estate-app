const express = require('express')
const app = express();
const PORT = process.env.PORT || 4000;
const mongoose = require('mongoose')
const dotenv = require('dotenv');
//Import routers
const authRoute = require('./routes/auth'); 
const postRoute = require('./routes/posts');
const postNew = require('./routes/postNew');
const fetchProperty = require('./routes/fetchProperty');
const otherSection = require('./routes/otherSection');
const filterProps = require('./routes/filterProps');

const cors = require('cors')
app.use(cors())

dotenv.config();

//Connect to db
// mongoose.connect(process.env.DB_CONNECT,
//     {useNewUrlParser: true},
//     ()=>{
//     console.log("Connected to db!")
// })

let connect_to_mongose = async ()=>{
    try {
        let ceva_pola = await mongoose.connect(process.env.DB_CONNECT, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log('MongoDB connected!!');
    } catch (err) {
        console.log('Failed to connect to MongoDB', err);
    }
}
connect_to_mongose();


//MiddleWare
app.use(express.json());



//Route MiddleWares
//anythin in authRoute will have '/api/user prefix => /api/user/register
app.use('/api/user',authRoute);
app.use('/api/posts',postRoute);
app.use('/api/newpost',postNew);
app.use('/api/fetchProperty', fetchProperty);
app.use('/api/otherSection',otherSection);
app.use('/api/filterProps',filterProps);

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`)
})
