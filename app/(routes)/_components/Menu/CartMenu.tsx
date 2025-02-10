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
import { Menu, MenuIcon, ShoppingBag } from "lucide-react";
import Link from "next/link";


const CartMenu = () => {
  return (
    <div className="cursor-pointer">
    <Sheet>
      <SheetTrigger asChild>
        <ShoppingBag />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="mb-8">
          <SheetTitle className="text-center">Sepetim</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col space-y-4">
          "Sepetinizde ürün bulunmamaktadır."
        </div>
      </SheetContent>
    </Sheet>
  </div>
  )
}

export default CartMenu