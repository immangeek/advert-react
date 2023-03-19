import db from "../../lib/db";

export default function handler(req, res) {
  const sql = "SELECT * FROM users";

  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ message: "Error retrieving users" });
    } else {
      res.status(200).json(results);
    }
  });
}
