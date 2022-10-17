import house1 from "./../images/house1.png";
import house2 from "./../images/house2.png";
import house3 from "./../images/house3.png";

import bed from "./../images/bed.svg";
import bath from "./../images/bath.svg";
import car from "./../images/car.svg";
import ruler from "./../images/ruler.svg";

import circleImg1 from "./../images/user1.png";
import circleImg2 from "./../images/user2.png";
import circleImg3 from "./../images/user3.png";

import resize from "./../images/resize.png";
import heart from "./../images/heart.png";

export const data = [
  {
    id: 1,
    url: house1,
    circleImg: circleImg1,
    title: "House for sale",
    adress: "Quincy St, Brooklyn, NY, USA",
    oldPrice: "$7,800/mo",
    price: "$7,500/mo",
    icons: {
      bed,
      bath,
      car,
      ruler,
      heart,
      resize,
    },
    info: {
      beds: "12 Beds",
      baths: "4 Bath",
      garage: "1 Garage",
      sq: "1200 Sq Ft",
    },
  },
  {
    id: 2,
    url: house2,
    circleImg: circleImg2,
    title: "New Apartment Nice Wiew",
    adress: "Airport Road St, Alabama, USA",
    oldPrice: "$8,750/mo",
    price: "$8,300/mo",
    icons: {
      bed,
      bath,
      car,
      ruler,
      heart,
      resize,
    },
    info: {
      beds: "10 Beds",
      baths: "6 Bath",
      garage: "2 Garage",
      sq: "1370 Sq Ft",
    },
  },
  {
    id: 3,
    url: house3,
    circleImg: circleImg3,
    title: "House for sale",
    adress: "Lawrence road, Kings Park, NY, USA",
    oldPrice: "$7,450/mo",
    price: "$7,100/mo",
    icons: {
      bed,
      bath,
      car,
      ruler,
      heart,
      resize,
    },
    info: {
      beds: "9 Beds",
      baths: "4 Bath",
      garage: "1 Garage",
      sq: "1100 Sq Ft",
    },
  },
];
