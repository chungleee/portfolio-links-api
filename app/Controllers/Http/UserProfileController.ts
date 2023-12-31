// import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import prisma from "../../../prisma/prisma";

export default class UserProfileController {
  async store({ request }) {
    const { username, firstName, lastName } = request.body();

    const newUser = await prisma.user.create({
      data: { username, firstName, lastName },
    });

    return { newUser };
  }

  async index() {
    return { msg: "this fetches all users" };
  }
}
