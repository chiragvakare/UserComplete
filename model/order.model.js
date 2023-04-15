import { DataTypes } from "sequelize";
import sequelize from "../db/dbconfig.js";

const Order = sequelize.define("order",{
    username:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull : false  
    },
    address:{
        type: DataTypes.STRING,
        allowNull : false
    },
    contact:{
        type: DataTypes.STRING,
        allowNull : false
    },
    date:{
        type: DataTypes.STRING,
        allowNull : false
    },
    payment_mode:{
        type: DataTypes.STRING,
        allowNull : false
    },
    total_Amount:{
        type: DataTypes.INTEGER,
        allowNull : false
    },
    user_id:{
        type: DataTypes.INTEGER,
        allowNull : false
    },
    total_bill:{
        type: DataTypes.STRING,
        allowNull : false
    }
  });
  
  sequelize.sync().then(result=>{
    console.log("Orders table created successfully....");
  }).catch(err=>{
    console.log(err);
  });

  export default Order;