const Pool = require('pg').Pool
const pool = new Pool({
    user: 'login',
    host: '195.133.197.53',
    database: 'stan',
    password: 'password',
    port: 6543,
})

module.exports = pool










// const { Client } = require('pg');
//
//
//
//
// const connectDb = async () => {
//     try {
//         const client = new Client({
//             user: 'login',
//             host: '195.133.197.53',
//             database: 'stan',
//             password: 'password',
//             port: 6543,
//         })
//
//         await client.connect()
//         const res = await client.query('SELECT * FROM categories')
//         console.log(res)
//         await client.end()
//     } catch (error) {
//         console.log(error)
//     }
// }
//
// connectDb()
