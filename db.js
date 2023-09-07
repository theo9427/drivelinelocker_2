import { Sequelize } from "sequelize";

    const sequelize = new Sequelize("it_inventory_db", process.env.DB_USER, process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: "mysql",
        dialectModule: require("mysql2"),
        logging: false
    });

export default sequelize;

// import { Sequelize } from "sequelize";

//     const sequelize = new Sequelize("it_inventory_db", "root", "password", {
//         host: "172.16.3.230",
//         port: 3306,
//         dialect: "mysql",
//         dialectModule: require("mysql2"),
//         logging: false
//     });

// export default sequelize;