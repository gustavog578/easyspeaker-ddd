import * as express from "express";
import { inject } from "inversify";
import {
    controller,
    httpGet,
    httpPut,
    interfaces,
    request,
    requestParam,
    response,
} from "inversify-express-utils";
import { TYPES } from "@users/domain/types/types";
import UserService from "../services/UserService";
import {
    IGetUserUseCase,
    IGetAllUsersUseCase,
} from "../interfaces/IUserUseCases";
import IUserDto from "../interfaces/IUserDto";
import { ICreateUserUseCase } from "../interfaces/IUserUseCases";

@controller("/user")
export default class UserController implements interfaces.Controller {
    private readonly getUserUseCase: IGetUserUseCase;
    private readonly getAllUserUseCase: IGetAllUsersUseCase;
    private readonly createUserUseCase: ICreateUserUseCase;

    constructor(@inject(TYPES.UserService) userService: UserService) {
        this.getUserUseCase = userService.GetUserDetail();
        this.getAllUserUseCase = userService.GetAllUsers();
    }

    @httpGet("/all")
    public async getAllUsers(@response() res: express.Response) {
        try {
            const users = await this.getAllUserUseCase.getAllUsers();
            return res.status(200).json({ ok: true, data: users });
        } catch (error) {
            return res.status(500).json({ ok: false, msg: error.message });
        }
    }

    @httpGet("/:id")
    public async home(
        @requestParam("id") id: string,
        @response() res: express.Response
    ) {
        try {
            const user = await this.getUserUseCase.getUserDetail(id);
            if (user) return res.status(200).json({ ok: true, user: user });
        } catch (error) {
            return res.status(500).json({ ok: false, msg: error.message });
        }
    }

    @httpPut("/create")
    public async createLanguage(
        @request() req: express.Request,
        @response() res: express.Response
    ) {
        try {
            const newUser: IUserDto = req.body;
            const response = await this.createUserUseCase.createLanguage(
                newUser
            );

            if (!response) {
                return res
                    .status(401)
                    .json({ ok: false, msg: "Error creating a new user" });
            }
            return res
                .status(200)
                .json({ ok: true, msg: "User created successfully" });
        } catch (error) {
            return res.status(500).json({ ok: false, msg: error.message });
        }
    }
}
