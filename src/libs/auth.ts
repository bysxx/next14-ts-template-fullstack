import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { getServerSession, type NextAuthOptions } from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";
import client from "./client";

if (!process.env.KAKAO_CLIENT_ID || !process.env.KAKAO_CLIENT_SECRET) {
  throw new Error("KAKAO_CLIENT_ID or KAKAO_CLIENT_SECRET is not set");
}

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(client),
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID,
      clientSecret: process.env.KAKAO_CLIENT_SECRET,
    }),
  ],
};

export const getSession = () => getServerSession(authOptions);
