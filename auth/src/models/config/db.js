const mongoose = require("mongoose");
// MongoDB connection and Error handling
const mongoURI = process.env.MONGO_URI

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB connected successfully');
    // Start the server only after successful MongoDB connection
  })
  .catch((error) => {
    console.error('MongoDB connection error: ', error);
  });