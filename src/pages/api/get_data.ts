import { NextApiRequest, NextApiResponse } from 'next';
import { createConnection } from 'mysql2/promise';

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const connection = await createConnection({
      host: 'data.cgicw6bycxhj.us-east-2.rds.amazonaws.com',
      user: 'root',
      password: 'advert.123',
      database: '3D_Data',
    });

    // Perform a query to fetch data from the database
    const [rows] = await connection.query("SELECT * FROM File_Status where final_status = 'APPROVED'");

    // Send the results back to the client
    res.status(200).json(rows);

    // Close the database connection
    connection.end();
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching data from the database.');
  }
};

export default handler;
