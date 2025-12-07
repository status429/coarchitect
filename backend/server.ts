import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import path from 'path';
import DXF_Routes from './routes/DXF_Routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// DXF Routes
app.use('/api/dxf', DXF_Routes);

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
