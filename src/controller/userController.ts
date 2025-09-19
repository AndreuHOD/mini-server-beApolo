import { Body, Controller, Get, Path, Post, Route } from "tsoa";
import { user } from "@prisma/client";
import { getUser, getUsers, createUser } from "../services/userService";
import { UserDto } from "../dto/userDto";
import { get } from "http";

@Route("users")
export class UserController extends Controller {
  @Get("/")
  public async getAllUsers(): Promise<user[]> {
    return getUsers();
  }

  @Get("{userId}")
  public async getUser(@Path() userId: number): Promise<user | null> {
    return getUser(userId);
  }

  @Post("/")
  public async createUser(@Body() userData: user): Promise<user> {
    return createUser(userData);
  }

  @Get("/aaa")
  public async getAAA(): Promise<null> {
    return null;
  }
}

