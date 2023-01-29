const dotenv = require('dotenv');
dotenv.config({ path: '/config.env' });
const mongoose = require('mongoose');
const app = require('./app');

console.log(process.env);

mongoose
  .connect('mongodb://localhost:27017/natours', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB connected');
  });

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
