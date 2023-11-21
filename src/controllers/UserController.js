import { UserModel } from "../models/UserModel.js";

export const UserController = {
  index: async (req, res, next) => {
    const users = await UserModel.read();
    return res.render("users/index", { users: users });
  },
};
