import { DataTypes } from "sequelize";
import sequelize from "../db/dbconfig.js";

const Product = sequelize.define("product",{
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    description:{
        type: DataTypes.STRING,
        allowNull : false
    },
    price:{
        type: DataTypes.INTEGER,
        allowNull : false
    },
    subCategory_ID:{
        type: DataTypes.INTEGER,
        allowNull : false
    },
    category_name:{
        type: DataTypes.STRING,
        allowNull : false
    },
    users_id:{
        type: DataTypes.INTEGER,
        allowNull : false
    },
    bill:{
        type: DataTypes.STRING,
        allowNull : false
    },
    image:{
        type: DataTypes.STRING
    },
    images:{
        type: DataTypes.STRING
    }
  });
  
  sequelize.sync().then(result=>{
    console.log("Products table created successfully....");
  }).catch(err=>{
    console.log(err);
  });

  export default Product;