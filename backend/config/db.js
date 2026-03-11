        const Pool = require('pg').Pool
        const pool = new Pool({
            connectionString: 'postgres://login:password@db:5432/stan',
        })

        module.exports = pool
