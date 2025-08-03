import { Request, Response } from "express";
import { signIn, signUp } from "../services/auth.service";

export const register = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;
  try {
    const user = await signUp(email, password, name);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to register user" });
  }
};

export const login = async (req: Request, res: Response) => {
  const { token } = req.body;
  try {
    const user = await signIn(token);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to log in user" });
  }
};
