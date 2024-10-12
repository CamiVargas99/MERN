import express from 'express'; // Importa Express
import mongoose from 'mongoose'; // Importa Mongoose
import cors from 'cors'; // Importa CORS
import dotenv from 'dotenv'; // Importa dotenv
import songRoutes from './routes/songs.js'; 

dotenv.config(); 

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/api/songs', songRoutes); 

// Ruta simple de prueba
app.get('/', (req, res) => {
  res.send('Servidor corriendo correctamente');
});



// Conectar a MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.log('Error al conectar a MongoDB:', err));


// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
