"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ProductType } from "@/constans";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";

interface ProductModalProps {
  product: ProductType;
}

const ProductModal = ({ product }: ProductModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const {toast} = useToast();

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleToastMessage = () => {
    toast({
      title: "Product Added",
      description: `${product.title} has been added to your cart`,
    });
  };

  return (
    <Dialog>
  <DialogTrigger asChild>
    <Button className="p-2 bg-gray-600 text-white rounded">
      View Detail
    </Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[600px]">
    <DialogHeader>
      <DialogTitle>{product.title}</DialogTitle>
      <div className="flex flex-row"> {/* <div> buraya taşındı */}
        <div className="w-1/2 p-2">
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={300}
            className="object-cover"
          />
        </div>
        <div className="w-1/2 p-2">
          <DialogDescription> {/* DialogDescription sadece metin için kullanıldı */}
            {product.description}
          </DialogDescription>
          <p>Price: ${product.price}</p>
          <div className="flex items-center mt-2">
            <Button onClick={handleDecrease} className="p-2 bg-gray-300">
              -
            </Button>
            <span className="mx-2">{quantity}</span>
            <Button onClick={handleIncrease} className="p-2 bg-gray-300">
              +
            </Button>
          </div>
          <div className="mt-4">
            <div className="absolute bottom-8 right-8">
              <Button onClick={handleToastMessage} className="p-2 bg-gray-600 text-white rounded">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DialogHeader>
  </DialogContent>
</Dialog>
  );
};

export default ProductModal;
