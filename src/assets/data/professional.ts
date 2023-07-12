import Image1 from "../img/person1.png";
import Image2 from "../img/person2.png";
import Image3 from "../img/person3.png";
import { Professionals } from "../type";

const professionalData: Professionals[] = [
  {
    id: 1,
    image: Image1,
    position: "Surgeon",
    name: "Briyan Nevalli",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
  },

  {
    id: 2,
    image: Image2,
    position: "Dermatologist",
    name: "Bella sebastian",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
  },

  {
    id: 3,
    image: Image3,
    position: "Stylist expert",
    name: "Lilly Adams",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
  },
];
export default professionalData;
