import pool from "../db.js";

export const UserModel = {
  read: async () => {
    const results = await pool.query(
      `
        SELECT *
        FROM users;
      `
    );
    return results.rows;
  },
};
