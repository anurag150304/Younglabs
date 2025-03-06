import 'dotenv/config';
import * as http from 'http';
import App from './src/app.js';

const port = process.env.PORT || 8080;
const server = http.createServer(App);

server.listen(port, () => console.log(`Server listining on port ${port}`));