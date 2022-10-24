import express from "express";

export default interface ILoginMiddleware {
    handler(req: express.Request, res: express.Response, next: express.NextFunction): void;
}
