const express = require('express');
const router = express.Router();
const db = require('../db/queries');

router.get('/users', async (req, res) => {
    try {
        const users = await db.getUsers();
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

router.get('/users/:id', async (req, res) => {
    try {
        const user = await db.getUserById(req.params.id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).send('User not found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

router.get('/check-db', async (req, res) => {
    try {
        await db.query('SELECT 1');
        res.status(200).send('Database connection is OK');
    } catch (err) {
        console.error('Database connection error:', err); 
        res.status(500).send('Database connection error');
    }
});

module.exports = router;
