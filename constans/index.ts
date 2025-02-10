export const categories: { title: string; href: string; description: string }[] = [
  {
    title: "T-Shirts",
    href: "/shop/t-shirts",
    description: "Explore our wide range of stylish and comfortable t-shirts.",
  },
  {
    title: "Jeans",
    href: "/shop/jeans",
    description: "Find the perfect pair of jeans for any occasion.",
  },
  {
    title: "Dresses",
    href: "/shop/dresses",
    description: "Discover our collection of beautiful and elegant dresses.",
  },
  {
    title: "Jackets",
    href: "/shop/jackets",
    description: "Stay warm and stylish with our selection of jackets.",
  },
  {
    title: "Shoes",
    href: "/shop/shoes",
    description: "Browse our variety of shoes for every style and need.",
  },
  {
    title: "Accessories",
    href: "/shop/accessories",
    description: "Complete your look with our range of accessories.",
  },
];

interface SSStype {
  id: string;
  title: string;
  description: string;

}


export const sss : SSStype[] = [ 
  {
    id: "1",
    title: "What is your return policy?",
    description: "You can return any item within 30 days of purchase for a full refund."
    },
    {
    id: "2",
    title: "Do you offer international shipping?",
    description: "Yes, we ship to most countries worldwide. Shipping fees may apply."
    },
    {
    id: "3",
    title: "How can I track my order?",
    description: "Once your order has shipped, you will receive an email with a tracking number."
    },
    {
    id: "4",
    title: "Can I change or cancel my order?",
    description: "You can change or cancel your order within 24 hours of placing it."
    },
    {
    id: "5",
    title: "What payment methods do you accept?",
    description: "We accept all major credit cards, PayPal, and Apple Pay."
  }
]



export interface SliderType {
  title: string;
  description: string;
  image: string;
}

export const sliders = [{
  title: "New Arrivals",
  description: "Discover the latest trends in fashion and style.",
  image: "/slider/5.jpg",
},
{
  title: "Summer Collection",
  description: "Get ready for summer with our stylish collection.",
  image: "/slider/6.jpg",
},
{
  title: "Sale",
  description: "Shop our sale items and save on your favorite styles.",
  image: "/slider/7.jpg",
},

]


export interface ProductType {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
}

export const products: ProductType[] = [
  {
    id: "1",
    title: "Classic T-Shirt",
    price: 15,
    description: "A comfortable and stylish classic t-shirt.",
    image: "/products/1.jpg",
  },
  {
    id: "2",
    title: "Slim Fit Jeans",
    price: 35,
    description: "Slim fit jeans that offer both style and comfort.",
    image: "/products/2.jpg",
  },
  {
    id: "3",
    title: "Floral Dress",
    price: 45,
    description: "A beautiful floral dress perfect for any occasion.",
    image: "/products/3.jpg",
  },
  {
    id: "4",
    title: "Leather Jacket",
    price: 60,
    description: "A stylish leather jacket to keep you warm.",
    image: "/products/4.jpg",
  },
  {
    id: "5",
    title: "Sneakers",
    price: 25,
    description: "Comfortable sneakers for everyday wear.",
    image: "/products/5.jpg",
  },
  {
    id: "6",
    title: "Leather Bag",
    price: 50,
    description: "A high-quality leather bag for all your essentials.",
    image: "/products/6.jpg",
  },
  {
    id: "7",
    title: "Sunglasses",
    price: 10,
    description: "Stylish sunglasses to protect your eyes.",
    image: "/products/7.jpg",
  },
  {
    id: "8",
    title: "Watch",
    price: 20,
    description: "A classic watch to keep you on time.",
    image: "/products/8.jpg",
  },
  {
    id: "9",
    title: "Hoodie",
    price: 30,
    description: "A warm and comfortable hoodie for casual wear.",
    image: "/products/9.jpg",
  },
  {
    id: "10",
    title: "Cap",
    price: 12,
    description: "A stylish cap to complete your look.",
    image: "/products/10.jpg",
  },
  {
    id: "11",
    title: "Scarf",
    price: 15,
    description: "A cozy scarf to keep you warm.",
    image: "/products/11.jpg",
  },
  {
    id: "12",
    title: "Belt",
    price: 18,
    description: "A durable belt to complement your outfit.",
    image: "/products/12.jpg",
  },
  {
    id: "13",
    title: "Gloves",
    price: 22,
    description: "Warm gloves for the winter season.",
    image: "/products/13.jpg",
  },
  {
    id: "14",
    title: "Boots",
    price: 55,
    description: "Stylish boots for any occasion.",
    image: "/products/14.jpg",
  },
  {
    id: "15",
    title: "Sweater",
    price: 40,
    description: "A cozy sweater for chilly days.",
    image: "/products/15.jpg",
  },
  {
    id: "16",
    title: "Shorts",
    price: 20,
    description: "Comfortable shorts for casual wear.",
    image: "/products/16.jpg",
  },
  {
    id: "17",
    title: "Sandals",
    price: 25,
    description: "Lightweight sandals for summer.",
    image: "/products/17.jpg",
  },
  {
    id: "18",
    title: "Backpack",
    price: 35,
    description: "A spacious backpack for all your needs.",
    image: "/products/18.jpg",
  },
  {
    id: "19",
    title: "Blazer",
    price: 70,
    description: "A stylish blazer for formal occasions.",
    image: "/products/19.jpg",
  },
  {
    id: "20",
    title: "Polo Shirt",
    price: 25,
    description: "A classic polo shirt for a smart casual look.",
    image: "/products/20.jpg",
  },
  {
    id: "21",
    title: "Cardigan",
    price: 45,
    description: "A comfortable cardigan for layering.",
    image: "/products/21.jpg",
  },
];
