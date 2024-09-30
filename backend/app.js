// Import required modules
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables
dotenv.config();

// Create application
const app = express();
// Set up middleware to to accept requests from different domains
app.use(cors());
app.use(express.json());

// Set up routes
app.use('/api/v1', require('./routes'));

// Define the port and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
