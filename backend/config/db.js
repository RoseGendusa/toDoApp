// const { connect } = require('mongoose');

// module.exports = async () => {
//   let url =
//     process.env.ENV === 'DOCKER'
//       ? process.env.MONGODOCKER
//       : process.env.MONGOLOCAL;

//   if (!url) url = 'mongodb://localhost:27017/todo';
//   try {
//     const res = await connect(url);
//     console.log(`Connect with ${res.connection.host}`.yellow.underline);
//   } catch (err) {
//     console.log(`DB Not connect : ${err.message}`.red);
//   }
// };






// connecting database

const mongoose = require('mongoose');
const uri = `mongodb+srv://gulfidanozturk34:hellodreamjob@cluster0.forhwbv.mongodb.net/TodoApi`;

// example ==> const uri = `mongodb+srv://${username}:${password}@cluster0.mongodb.net/${databaseName}?retryWrites=true&w=majority`;
MONGODB_URL = process.env.MONGODB_URL;

exports.ToDoDataBase = ()=>
{
    mongoose.connect(uri).then(
        console.log("Connection to MongoDB Successfull!")
    ).catch((error) =>{

        console.log(error);
        console.log("Connection to MongoDB Failed!");
        process.exit(1);
    })
}