import * as express from "express";
import { inject } from "inversify";
import {
    controller,
    httpGet,
    interfaces,
    request,
    requestParam,
    response,
} from "inversify-express-utils";
import { TYPES as TYPES_TEACHER } from "@config/types";
import TeacherService from "../services/TeacherService";
import IGetTeacherUseCase from "../interfaces/IGetTeacherUseCase";
import IGetAllTeacherUseCase from "../interfaces/IGetAllTeachersUseCase";

@controller("/teacher")
export default class TeacherController implements interfaces.Controller {
    private readonly getTeacherUseCase: IGetTeacherUseCase;
    private readonly getAllTeachersUseCase: IGetAllTeacherUseCase;

    constructor(
        @inject(TYPES_TEACHER.TeacherService) teacherService: TeacherService
    ) {
        this.getTeacherUseCase = teacherService.GetTeacherDetail();
        this.getAllTeachersUseCase = teacherService.GetAllTeachers();
    }

    @httpGet("/all")
    public async getAll(@response() res: express.Response) {
        try {
            const user = await this.getAllTeachersUseCase.getAllTeacherDetail();
            if (user) return res.status(200).json({ ok: true, user: user });
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
            const user = await this.getTeacherUseCase.getTeacherDetail(id);
            if (user) return res.status(200).json({ ok: true, user: user });
        } catch (error) {
            return res.status(500).json({ ok: false, msg: error.message });
        }
    }
}
