import { signOut } from "next-auth/react";
import { Button } from "../components/ui/button";
import { useRouter } from "next/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import "../public/css/styles.css";
import { Avatar } from "../components/ui/avatar";
import Image from "next/image";
import AvatarImg from "../public/images/Avatar.png";

const Painel = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(); // Faz o logout
    router.push("../"); // Redireciona para outra página após o logout
  };

  return (
    <div className="flex">
      <h1 className="m-6">Painel Interno</h1>
      <div className="w-[70vw] h-[100vh]"></div>
      <div className="h-[100vh] w-[30vw]">
        <Sheet>
          <SheetTrigger className="" asChild>
            <Button className="w-0 h-0">
              <Avatar>
                <Image src={AvatarImg} alt={"avatar"} />
              </Avatar>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" value="Pedro Duarte" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input id="username" value="@peduarte" className="col-span-3" />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
        <Button className="" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Painel;
