"use client";

import React from "react";
import Image from "next/image";
import LoginImg from "../public/images/login.svg";
import GoogleIcon from "../public/images/google.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import "../public/css/styles.css";

export default function Login() {
  const router = useRouter();
  const handlerLoginClick = async () => {
    const result = await signIn("google");
    if (result?.error) {
      console.error("Erro ao tentar fazer login com o Google", result.error);
    } else {
      router.push("../painel");
    }
  };

  return (
    <div className="flex">
      <div className=" flex w-[50vw] h-[100vh] items-center justify-center">
        <Image className="w-[70vw] h-[70vh]" src={LoginImg} alt="login" />
      </div>
      <div className="bg-green-500 flex justify-center items-center w-[50vw] h-[100vh]">
        <Card className="flex-col justify-center items-center border-none">
          <Card className="flex-wrap gap-6 w-[350px] rounded-2xl text-black">
            <CardHeader>
              <CardTitle>Task Manager</CardTitle>
              <CardDescription>
                Suas tarefas ao seu alcançe com um click!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      className=""
                      id="email"
                      placeholder="user@task.com"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" className="" />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                className="hover:bg-transparent hover:text-green-500 hover:outline"
                variant="outline"
              >
                Forgot Password?
              </Button>
              <Button
                className="hover:bg-transparent hover:text-green-500 hover:outline"
                variant="outline"
              >
                Login
              </Button>
            </CardFooter>
            <h2 className="flex justify-center">or</h2>
            <Card className="flex gap-3 pb-6 pt-6 justify-center items-center border-none ">
              <Button
                onClick={handlerLoginClick}
                className="hover:bg-transparent hover:text-green-500 hover:outline"
                variant="outline"
              >
                Login with Google{" "}
                <Image
                  className="ml-3 w-3.5"
                  alt="Icon Google"
                  src={GoogleIcon}
                ></Image>
              </Button>
            </Card>
          </Card>
          <CardFooter className="flex justify-center items-center">
            <Card className="flex mb-1 mt-6 items-center justify-center hover:bg-transparent hover:text-green-500 hover:outline rounded-2xl">
              <Button className="bg-transparent text-black hover:text-green-500 hover:bg-transparent">
                Não tem uma conta? Cadastre-se
              </Button>
            </Card>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
