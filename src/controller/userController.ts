import { Body, Controller, Get, Path, Post, Route } from "tsoa";
import { user } from "@prisma/client";
import { getUser, getUsers, createUser } from "../services/userService";
import { UserDto } from "../dto/userDto";

@Route("users")
export class UserController extends Controller {
  @Get("/")
  public async getAllUsers(): Promise<user[]> {
    console.log("Fetching all users");
    return getUsers();
  }

  @Get("{userId}")
  public async getUser(@Path() userId: number): Promise<user | null> {
    return getUser(userId);
  }

  @Post("/")
  public async createUser(@Body() userData: UserDto): Promise<user> {
    console.log("Received user data:", userData);
    return createUser(userData);
  }

  @Get("/aaa")
  public async getAAA(): Promise<null> {
    return null;
  }
}

