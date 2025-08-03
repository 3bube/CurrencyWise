import newRequest from "./newRequest";
import { User } from "../types/user";

export const registerUser = async (userData: {
  email: string;
  name: string;
  password: string;
}): Promise<Partial<User>> => {
  try {
    const response = await newRequest.post("/auth/register", userData);
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

export const loginUser = async (token: string): Promise<Partial<User>> => {
  try {
    const response = await newRequest.post("/auth/login", { token });
    return response.data;
  } catch (error) {
    console.error("Error logging in user:", error);
    throw error;
  }
};
