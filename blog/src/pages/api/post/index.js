import { sequelize } from "@/utils/Sequelize";
import { Post } from "@/utils/Models/PostModel";

const handler = async (req, res) => {
  await sequelize.sync();
  if (req.method === "GET") {
    const find = await Post.findAll();

    return res.status(200).json({ data: find });
  }

  if (req.method === "POST") {
    const create = await Post.create({ ...req.body });

    return res
      .status(200)
      .json({ message: "Saved Successfully", data: create });
  }
  return res.status(404).json({ message: "Not Found" });
};

export default handler;
