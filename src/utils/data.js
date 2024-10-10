import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";

export const NavbarData = {
  header: {
    title: "Delights Table",
    iconSize: 27,
  },
  menuItems: [
    {
      name: "Home",
      hasSubmenu: false,
      link: "/"
    },
    {
      name: "Recipe",
      hasSubmenu: false,
      link: "recipe"
    },
    {
      name: "About Us",
      hasSubmenu: false,
      link: "aboutus"
    },
  ],
  search: {
    placeholder: "Search Recipe",
    icon: "BsSearch",
    iconSize: 17,
    opacity: 0.6,
  },
};

export const RecentRecipesData = [
  {
    id: 1,
    title: "Donut",
    description: "Irresistible homemade Cool and tasty recipe to eat with friends in the morning.",
    image: "/images/Donut.jpg",
  },
  {
    id: 2,
    title: "Cereal",
    description: "Crispy and tasty cereal, perfect for a breakfast or quick snack. A delicious and nutritious option to start the day with energy.",
    image: "/images/Cereal.jpg",
  },
  {
    id: 3,
    title: "Cookies",
    description: "Irresistible homemade cookies with soft dough and generous pieces of chocolate.",
    image: "/images/Cookies.jpg",
  },
];

export const socialIcons = [
  { icon: TiSocialFacebook, size: 20, color: "white" },
  { icon: TiSocialLinkedin, size: 20, color: "white" },
  { icon: TiSocialTwitter, size: 20, color: "white" },
  { icon: TiSocialYoutube, size: 20, color: "white" },
];

export const recipeData = [
  {
    id: 1,
    title: "Waffles",
    description: "Cool recipe to eat with friends in the morning.",
    image: "/images/Featured-image-1.jpg",
  },
  {
    id: 2,
    title: "Coffees",
    description: "Tasty coffee perfect for the breakfast.",
    image: "/images/Featured-image-2.jpg",
  },
  {
    id: 3,
    title: "Omelette",
    description: "A quick and easy omelette recipe.",
    image: "/images/Featured-image-3.jpg",
  },
  {
    id: 4,
    title: "Coffees",
    description: "Tasty coffee perfect for the breakfast.",
    image: "/images/Featured-image-2.jpg",
  },
  {
    id: 5,
    title: "Omelette",
    description: "A quick and easy omelette recipe.",
    image: "/images/Featured-image-3.jpg",
  },
  {
    id: 6,
    title: "Waffles",
    description: "Cool recipe to eat with friends in the morning.",
    image: "/images/Featured-image-1.jpg",
  },
];