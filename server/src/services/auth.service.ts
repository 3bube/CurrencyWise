import admin from "../config/firebase";
import Prisma from "../config/prismaClient";

export const signUp = async (
  email: string,
  password: string,
  name?: string
) => {
  try {
    // create user in Firebase
    const user = await admin.auth().createUser({
      email,
      password,
      displayName: name,
    });

    // create user in Prisma
    const prismaUser = await Prisma.user.create({
      data: {
        email,
        name,
        firebaseId: user.uid,
      },
    });
    return { message: "User created successfully", user: prismaUser };
  } catch (error) {
    console.error("Error signing up:", error);
    throw new Error("Error signing up");
  }
};

export const signIn = async (token: string) => {
  try {
    // verify token with Firebase
    const decodedToken = await admin.auth().verifyIdToken(token);
    const user = await Prisma.user.findUnique({
      where: { firebaseUid: decodedToken.uid },
    });
    if (!user) throw new Error("User not found");

    return { message: "User signed in successfully", user };
  } catch (error) {
    console.error("Error signing in:", error);
    throw new Error("Error signing in");
  }
};
