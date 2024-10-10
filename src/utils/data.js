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
    },
    {
      name: "Recipe",
      hasSubmenu: false,
    },
    {
      name: "About Us",
      hasSubmenu: false,
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