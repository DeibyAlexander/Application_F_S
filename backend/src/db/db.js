import mongoose from 'mongoose'


const connectDB = async () => {
    try {
      await mongoose.connect('mongodb+srv://deiby:12345@clusterapplication.y9yk0so.mongodb.net/Application');
      console.log(">>>DB is connected");
    } catch (error) {
      console.error("Error connecting to the database:", error);
      throw error; // Lanza la excepción para detener la ejecución si la conexión falla.
    }
};


export default connectDB