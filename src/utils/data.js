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
      link: ""
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

export const AboutData = {
  data: "<p>Lorem ipsum sit amet consectetur, adipisicing elit. Maiores qui sunt non, nemo accusantium assumenda iure nulla itaque a unde. Veniam exercitationem ratione placeat eum dolorum rem maiores voluptatem, doloremque eligendi eaque modi perspiciatis ab. Natus illo commodi praesentium magni consectetur iste ex, quis quaerat est deserunt dolore officia culpa aspernatur deleniti? Nulla est reiciendis tempore molestias maiores dolores officia quos fugit voluptatibus, esse exercitationem laboriosam provident harum ullam veniam ratione perspiciatis incidunt eligendi? Facere quisquam tempore et natus ipsam,</br></br> non laboriosam aspernatur quasi, a ullam molestiae. Explicabo rerum quos, eaque saepe ab, tempore, repudiandae labore sunt est culpa dignissimos libero obcaecati pariatur repellendus tempora quibusdam. Reiciendis, aperiam? Dolor dignissimos quibusdam itaque provident placeat dolorum, eligendi ea pariatur? Enim adipisci utem natus accusantium! Dolore magni quam ipsum pariatur earum rerum ab, sint, molestias maiores qui nobis, quis mollitia dicta fuga deserunt non sunt blanditiis omnis libero et in molestiae laboriosam nulla! Quis sequi voluptates placeat dolorem repudiandae perferendis ad fuga non reiciendis quae sed necessitatibus nam deserunt provident dolor aut, odio repellendus! Quo, illo molestiae eos expedita maiores hic porro blanditiis vel, aliquam odit, maxime doloribus dignissimos magnam ratione laudantium animi dolorem enim. Qui dolor nobis fugit nihil cum enim voluptas, ipsum fugiat quidem vitae ut omnis laborum. Eius tenetur ex tempora </br></br> error aliquid ullam corporisem voluptate quo numquam eos earum illum provident cumque rerum, obcaecati a nulla ab error hic alias quod aliquid harum, vero commodi adipisci quam. Ea vitae id eaque? Nihil voluptatem quas quod, nam mollitia vel obcaecati nemo aut temporibus maiores blanditiis dolor minima quibusdam fugiat et quasi enim! Totam?</p>",
};

export const ImageArticleData = {
  title: "We make <span>every moment</span> special",
  description: `
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus praesentium dolor molestias fuga error ipsam amet officiis!<br />
    Deleniti distinctio autem eius, magnam fuga molestiae quo molestias Voluptatum,.
  `,
};