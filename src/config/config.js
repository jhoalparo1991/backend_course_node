const Config = {
    port: process.env.PORT || 3000,
    enviroment: process.env.NODE_ENV || 'development',
    
    dbPostgresUser: process.env.DB_POSTGRES_USER,
    dbPostgresPassword: process.env.DB_POSTGRES_PASSWORD,
    dbPostgresPort: process.env.DB_POSTGRES_PORT,
    dbPostgresName: process.env.DB_POSTGRES_NAME,
    dbPostgresHostname: process.env.DB_POSTGRES_HOSTNAME,

    dbMysqlUser: process.env.DB_MYSQL_USER,
    dbMysqlPassword: process.env.DB_MYSQL_PASSWORD,
    dbMysqlPort: process.env.DB_MYSQL_PORT,
    dbMysqlName: process.env.DB_MYSQL_NAME,
    dbMysqlHostname: process.env.DB_MYSQL_HOSTNAME,

    dialect: process.env.DB_DIALECT

}


module.exports = {
    Config
}