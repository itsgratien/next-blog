import { sequelize } from "@/utils/Sequelize";
import { Post } from "@/utils/Models/PostModel";

const handler = async (req, res) => {
  await sequelize.sync();
  if (req.method === "GET") {
    const find = await Post.findByPk(Number(req.query.id));

    return res.status(200).json({ data: find });
  }

  return res.status(404).json({ message: "Not Found" });
};

export default handler;
