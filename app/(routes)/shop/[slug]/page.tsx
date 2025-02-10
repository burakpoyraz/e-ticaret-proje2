import React from "react";

interface ShopDetailProps {
  params: Promise<{ 
    slug: string;
  }>;
}

const ShopDetail = async ({params}:ShopDetailProps) => {
  

  const { slug } = await params;

  return <div>ShopDetail - {slug}</div>;
};

export default ShopDetail;
