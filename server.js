const routes = require('./routes');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose
  .connect(
    'mongodb+srv://megagig:overcomer@cluster0.bqdzwiw.mongodb.net/participants',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(console.log)
  .catch(console.log);

app.use(express.json());
app.use(routes);
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
