require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
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


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const db = require('./models');

db.sequelize
  .authenticate()
  .then(() => console.log('db authen successed!'))
  .catch((e) => console.error(e));
