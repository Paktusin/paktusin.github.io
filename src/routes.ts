import { Apple } from "./apple/Apple";
import { Matrix } from "./matrix/Matrix";
import { Rpg } from "./rpg/Rpg";
import { Vk } from "./vk/Vk";

export const routes = [
  { name: "Apple", path: "/apple", component: Apple },
  { name: "VK", path: "/vk/*", link: "/vk/about", component: Vk },
  { name: "RPG", path: "", component: Rpg },
  {
    name: "Matrix",
    path: "/matrix",
    component: Matrix,
  },
];
