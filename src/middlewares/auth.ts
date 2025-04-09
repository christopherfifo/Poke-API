import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;

interface JwtPayload {
  id: string;
  // adicione mais campos se necessário
}

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Token não informado" });
  }

  try {
    const decoded = jwt.verify(token.replace("Bearer ", ""), JWT_SECRET) as JwtPayload;
    (req as any).user = decoded; // ou use uma interface customizada para req.user
    next();
  } catch {
    return res.status(401).json({ message: "Token inválido" });
  }
};
