"use client";
import { ProductType } from "@/constans";
import React,{useState} from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ProductModal from "./ProductModal";

interface ProductCardProps {
  product: ProductType;
}

const ProductCard = ({ product }: ProductCardProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };




  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg font-bold">{product.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover mb-4 rounded-2xl"
          width={300}
          height={300}
        />
        <p className="text-gray-700">{product.description}</p>
        <p className="text-lg font-semibold text-green-500">${product.price}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <Button className="bg-blue-500 text-white px-4 py-2 rounded">
          Add to Cart
        </Button>
        <ProductModal/>
      </CardFooter>
    </Card>
    
   )
  
};

export default ProductCard;
