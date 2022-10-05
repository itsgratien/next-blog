import { DataTypes } from "sequelize";
import { sequelize } from "../Sequelize";

export const Post = sequelize.define("Post", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: "Title can not be null",
      },
      notEmpty: {
        msg: "Title is required",
      },
    },
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notNull: {
        msg: "Description can not be null",
      },
      notEmpty: {
        msg: "Description is required",
      },
    },
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: "Image can not be null",
      },
      notEmpty: {
        msg: "Image is required",
      },
    },
  },
});

export default Post;
