require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const fs = require('fs');
const https = require('https');
const app = express();
app.use(cors());
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({success: false, message: 'Something broken!'});
});

require('./routes')(app);

app.all('*', (req, res) => {
  res.status(404).send({success: false, message: '404'});
});

const PORT = process.env.PORT || 8080;

https
  .createServer(
    {
      key: fs.readFileSync('./security/key.pem'),
      cert: fs.readFileSync('./security/cert.pem'),
    },
    app
  )
  .listen(PORT, function () {
    console.log(`Server is running on port ${PORT}.`);
  });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
// });

const db = require('./models');

db.sequelize
  .authenticate()
  .then(() => console.log('db authen successed!'))
  .catch((e) => console.error(e));
