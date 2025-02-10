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