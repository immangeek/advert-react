import { useEffect, useState } from 'react';
import axios from 'axios';
const [data, setData] = useState([]);

useEffect(() => {
  axios.get('/api/get-data').then((response) => {
    setData(response.data);
  });
}, []);

return (
  <div>
    <h1>About Page</h1>
    {data.map((item) => (
      <div key={item.partner_id}>
        <h2>{item.username}</h2>
        <p>{item.final_status}</p>
      </div>
    ))}
  </div>
);
