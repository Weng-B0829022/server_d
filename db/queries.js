const db = require('./index');

const getUsers = async () => {
    const res = await db.query('SELECT * FROM users');
    return res.rows;
};

const getUserById = async (id) => {
    const res = await db.query('SELECT * FROM users WHERE id = $1', [id]);
    return res.rows[0];
};

module.exports = {
    getUsers,
    getUserById,
    query: db.query, // 確保 query 方法已經匯出
};
