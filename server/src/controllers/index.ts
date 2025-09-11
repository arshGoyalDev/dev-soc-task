import type { Request, Response } from "express";

const getName = (req: Request, res: Response) => {
  res.status(201).json({ name: "Arsh Goyal" });
};

export { getName };
