

import { NextApiRequest, NextApiResponse } from 'next';
import mysql from 'mysql';

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'data.cgicw6bycxhj.us-east-2.rds.amazonaws.com',
  user: 'root',
  password: 'advert.123',
  database: '3D_Data',
});

// Define the API route handler function
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Connect to the database
  connection.connect();

  // Query the database for data
  connection.query('SELECT * FROM File_Status', (error, results) => {
    if (error) {
      throw error;
    }

    // Send the fetched data as a response
    res.status(200).json(results);

    // Close the database connection
    connection.end();
  });
}
