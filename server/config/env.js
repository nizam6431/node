module.exports = {
  sequelize: {
  //database: "Exponentia_v3",
  //database: "Exponentia_UAT",
  database: "Exponentia_credit",
  username: "exponentia",
  password: "exponentia~",
  conn: {
      retry: {
          max: 1,
          match: ["SequelizeDatabaseError: Timeout: Request", "SequelizeDatabaseError: Timeout: Request failed to complete in 15000ms"]
      },
      connectionTimeout: 15000,
      requestTimeout: 30000,
      dialectOptions: {
          connectionTimeout: 15000,
          requestTimeout: 30000
      },
      // isolationLevel: "Sequelize.Transaction.ISOLATION_LEVELS.READ_UNCOMMITTED",
      host: "10.250.19.221",
      dialect: "mssql",
      pool: {
          evict: 10000,
          acquire: 20000,
          max: 15, // changed wrt to "Resource Request Timeouts"
          min: 0,
          idle: 10000
      },
      autoClose: true, // test props added
      // omitNull: true, // flag that defines if null values should be passed to SQL
      autoReconnect: true, // test props added
      operatorsAliases: false,
      // logging: false // controls logging sql commands to console

      //  define: { //Application wide model options
      //      timestamps: false // true by default
      //  }
  }
}
};