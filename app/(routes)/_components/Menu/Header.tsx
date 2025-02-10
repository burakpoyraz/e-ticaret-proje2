"use client";
import { ModeToggle } from "@/components/ModeToggle";
import { Input } from "@/components/ui/input";
import { HeartIcon, SearchIcon, ShoppingBag, User } from "lucide-react";
import { Pacifico } from "next/font/google";
import React,{useState} from "react";
import NavMenu from "./NavMenu";
import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";
import CartMenu from "./CartMenu";
import Link from "next/link";
import { useRouter } from "next/navigation";


const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const Header = () => {

  const router=useRouter();
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    router.push(`/search?q=${encodeURIComponent(query)}`);
    setQuery("");
  }
  



  return (
    <div className="mx-auto bgone shadow-md">
      <div className="w-full flex flex-row justify-between p-5">
        <div className="flex flex-row items-center">
          <h1 className={`${pacifico.className} text-4xl`}>Poyraz Ticaret</h1>
        </div>

        <div className="hidden md:flex relative md:min-w-96 lg:w-1/2">
          <Input className="w-full border-2" value={query} placeholder="Search" onChange={(e)=>setQuery(e.target.value)} />
          <Button onClick={handleSearch} className="absolute right-1 h-full" variant={"link"}>
            <SearchIcon />
          </Button>
        </div>

        <div className="flex flex-row items-center space-x-2">
          <ModeToggle />
          <Link href={"/fav"} className="cursor-pointer">
            <HeartIcon />
          </Link>

          <CartMenu />
          <Link href={"/login"}>
          <User className="cursor-pointer" />
          </Link>
          <MobileMenu />
        </div>
      </div>
      <NavMenu />
    </div>
  );
};

export default Header;
