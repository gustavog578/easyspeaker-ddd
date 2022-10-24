import mongoose from "mongoose";


const options = {
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
  };
  

const uri = "mongodb+srv://develop:Passw0rd123@clusterdb.u0zio.mongodb.net/easyspeaker?retryWrites=true&w=majority";

mongoose.connect(uri , options)
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));
