import express from "express";

export default interface IRegisterMiddleware {
    handler( req: express.Request, res: express.Response, next: express.NextFunction): void;
}