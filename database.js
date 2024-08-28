const { Client } = require('pg');

const client = new Client({
    host: '195.133.197.53',
    user: 'login',
    password: 'password',
    database: 'stan',
    port: 6543,
});

client.connect()
    .then(() => console.log('Connected to PostgreSQL'))
    .catch(err => console.error('Connection error', err.stack));

client.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Time:', res.rows[0]);
    client.end();
});