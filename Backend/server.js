//http server created
const http = require('http');
const app = require('./app/index');
require('dotenv').config();
const port = 8000;
http.createServer(app);
app.listen(port, () => {
  console.log(`server is running At ${port}`);
});
