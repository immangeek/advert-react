import db from "../../lib/db";

export default function handler(req, res) {
  const sql =
    "SELECT username,count(partner_id) as files,sum(points) as points FROM File_Status where approved_date between '2023-03-01' and '2023-03-31' group by username ORDER BY sum(points)DESC";

  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ message: "Error retrieving users monthly data" });
    } else {
      res.status(200).json(results);
    }
  });
}
