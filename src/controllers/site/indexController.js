const createRoute = require('../../util/createRoute');

const indexAction = (req, res) => {
    const responseContent = `
  <html>
  <body>
  <h1>Hello, it's Dima's blog, be careful!</h1>
  <div>
  <img src="/img/funny-moose.png">
  </div>
  <div>Not surprised? Good :) </div>
</div>
</body>
  </html>
  
  `;
    res.send(responseContent);
};

module.exports = [
    createRoute('get', '/', indexAction),
];