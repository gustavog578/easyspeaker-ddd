import express from "express";

export default interface ILoginTeacherMiddleware {
    handler(req: express.Request, res: express.Response, next: express.NextFunction): void;
}
