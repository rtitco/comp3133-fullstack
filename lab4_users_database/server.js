const express = require ('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/UserRoutes.js');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://rtitco:cluster_Password1!@cluster0.amhgt.mongodb.net/comp3133-fullstack?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(userRouter);

app.listen(8081, () => { console.log('Server is running...')});