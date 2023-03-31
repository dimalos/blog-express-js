require("dotenv").config();

const express = require('express');
const app = express();
const port = process.env.NODE_DOCKER_PORT || 8080;

const path = require('path');
const staticPath = path.join(__dirname, '/../public');
console.log(staticPath);
app.use(express.static(staticPath));


require('./routes/all')(app);
// app.get('/', (req, res) => {
//   const responseContent = `
//   <html>
//   <body>
//   <h1>Hello, it's Dima's blog, be careful!</h1>
//   <div>
//   <img src="/img/funny-moose.png">
//   </div>
// </div>
// </body>
//   </html>
//
//   `;
//   res.send(responseContent);
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
