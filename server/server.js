import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import userRouter from './routes/userRoutes.js';
import connectDB from './config/mongodb.js';
import imageRouter from './routes/imageRoutes.js';

const PORT = process.env.PORT || 4001;
const app = express();

app.use(express.json());
app.use(cors());

async function startServer() {
  try {
    await connectDB();
    console.log("Connected to MongoDB successfully");

    app.use('/api/user', userRouter);
    app.use('/api/image', imageRouter);
    
    app.get('/', (req, res) => {
      res.send("API working awesome");
    });

    app.listen(PORT, () => {
      console.log(`Server running at ${PORT}...`);
    });

  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
}

startServer();
