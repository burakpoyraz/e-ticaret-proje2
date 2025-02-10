import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { categories } from "@/constans";
import { Menu, MenuIcon } from "lucide-react";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <div className="md:hidden cursor-pointer">
      <Sheet>
        <SheetTrigger asChild>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="mb-8">
            <SheetTitle className="text-center">Kategoriler</SheetTitle>
          </SheetHeader>

          <div className="flex flex-col space-y-4">
            {categories.map((component) => (
              <Link key={component.title} href={component.href}>
                {component.title}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
