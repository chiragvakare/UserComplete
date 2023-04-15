import { Sequelize } from "sequelize";

const sequelize = new Sequelize("user", "root", "Chirag@123", {
    host: "localhost", dialect: "mysql"
});

sequelize.authenticate().then(() => {
    console.log("Database Connected")
}).catch(err => {
    console.log(err);
});

export default sequelize;