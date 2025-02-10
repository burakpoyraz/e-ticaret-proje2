"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Footer = () => {
  const router = useRouter();

  return (
    <footer className="bg-gray-100 p-5 text-center">
      <div>
        <h4 className="text-lg font-semibold">Footer</h4>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
        <nav className="mt-2">
          <Button onClick={() => router.push("/")} variant={"link"}>
            Home
          </Button>
          <Button onClick={() => router.push("/about")} variant={"link"}>
            About Us
          </Button>
          <Button onClick={() => router.push("/contact")} variant={"link"}>
            Contacts
          </Button>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
