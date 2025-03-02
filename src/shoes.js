import Adidas from './assets/images/adidas.png';
import runningshoe from './assets/images/runningshoe.jpg';
import convert from './assets/images/convert.jpg';
import puma from './assets/images/puma.jpg';
import vans from './assets/images/vans.jpg';
import asics from './assets/images/asics.jpg';
import newbl from './assets/images/newbl.jpg';
import jordan4rm from './assets/images/jordan4rm.png';
import jordan1mid from './assets/images/jordan1mid.png';
import jordan1midse from './assets/images/jordan1midse.png';
import jordan1lowse from './assets/images/jordan1lowse.png';
import jordannuretro from './assets/images/jordannuretro.png';
import luka3f from './assets/images/luka3f.png';
import airjordanxxxix from './assets/images/airjordanxxxix.png';
import Adidas8ak from './assets/images/Adidas8ak.jpg';
import Adidas1high from './assets/images/Adidas1high.jpg';
import Adidasforce1 from './assets/images/Adidasforce1.jpg';
import dunklow from './assets/images/dunklow.jpg';
import jordan3retro from './assets/images/jordan3retro.jpg';
import blazermid from './assets/images/blazermid.jpg';
import nikepegasus from './assets/images/nikepegasus.png';
import ultraboostlight from './assets/images/ultraboostlight.jpg';
import airforce1 from './assets/images/airforce1.png';
import lebron20 from './assets/images/lebron20.jpg';
import kyrie8 from './assets/images/kyrie8.png';
import kd15 from './assets/images/kd15.jpg';
import yeezyboost from './assets/images/yeezyboost.jpg';
import nb327 from './assets/images/nb327.jpg';
import reebokclubc from './assets/images/reebokclubc.jpg';
import mizunowave from './assets/images/mizunowave.jpg';
export const shoes = [
    {
        id: 1,
        name: "Nike Air Max",
        type: "Sneakers",
        sizes: [38, 39, 40, 41, 42],
        color: "White",
        price: "4.109.000",
        stock: 25,
        image: Adidas
      },
      {
        id: 2,
        name: "Adidas Ultraboost",
        type: "Running Shoes",
        sizes: [39, 40, 41, 42, 43],
        color: "Black",
        price: "1.500.000",
        stock: 18,
        image: runningshoe  
      },
      {
        id: 3,
        name: "Converse Chuck Taylor",
        type: "Casual Shoes",
        sizes: [36, 37, 38, 39, 40],
        color: "Red",
        price: "1.600.000",
        stock: 30,
        image: convert
      },
      {
        id: 4,
        name: "Puma Suede Classic",
        type: "Sneakers",
        sizes: [38, 39, 40, 41],
        color: "Blue",
        price: "1.900.000",
        stock: 20,
        image: puma
      },
      {
        id: 5,
        name: "Vans Old Skool",
        type: "Skate Shoes",
        sizes: [37, 38, 39, 40, 41],
        color: "Black & White",
        price: "2.500.000",
        stock: 15,
        image: vans
      },
      {
        id: 6,
        name: "Asics Gel-Kayano",
        type: "Running Shoes",
        sizes: [39, 40, 41, 42],
        color: "Grey",
        price: "1.500.000",
        stock: 12,
        image: asics
      },
      {
        id: 7,
        name: "New Balance 574",
        type: "Sneakers",
        sizes: [37, 38, 39, 40, 41],
        color: "Green",
        price: "1.800.000",
        stock: 22,
        image: newbl
      },
    {
        id: 8,
        name: "Air Jordan 4 RM",
        type: "Men's Shoes",
        sizes: ["40", "41", "42", "43"],
        color: "Black/Anthracite/Varsity Red",
        price: "4.109.000",
        stock: 100,
        image: jordan4rm
    }, {
        id: 9,
        name: "Air Jordan 1 Mid",
        type: "Men's Shoes",
        sizes: ["40", "41", "42", "43"],
        color: "White/White/White",
        price: "3.669.000",
        stock: 76,
        image: jordan1mid
    }, {
        id: 10,
        name: "Air Jordan 1 Mid SE",
        type: "Men's Shoes",
        sizes: ["40", "41", "42", "43", "44"],
        color: "White/Medium Grey/Cool",
        price: "3.959.000",
        stock: 33,
        image: jordan1midse
    }, {
        id: 11,
        name: "Air Jordan 1 Low SE",
        type: "Men's Shoes",
        sizes: ["40", "41", "42", "43", "44"],
        color: "Medium Grey/White/Cool Grey",
        price: "3.669.000",
        stock: 28,
        image: jordan1lowse
    }, {
        id: 12,
        name: "Jordan NU Retro 1 G",
        type: "Men's Shoes",
        sizes: ["40", "41", "42", "43", "44"],
        color: "Black/University Red/Blue Tint/White",
        price: "4.409.000",
        stock: 96,
        image: jordannuretro
    }, {
        id: 13,
        name: "Luka 3 PF",
        type: "Men's Shoes",
        sizes: ["40", "41", "42", "43"],
        color: "Purple Comet/Midnight Navy/Hydrogen Blue/Hot Punch",
        price: "3.829.000",
        stock: 45,
        image: luka3f
    }, {
        id: 14,
        name: "Air Jordan XXXIX PF",
        type: "Men's Shoes",
        sizes: ["40", "41", "42", "43"],
        color: "Gym Red/White",
        price: "5.869.000",
        stock: 90,
        image: airjordanxxxix
    },
    {
        id: 15,
        name: "Adidas 8 AK",
        type: "Men's Shoes",
        sizes: ["40", "41", "42", "43", "44"],
        color: "Black/Anthracite/Varsity Red",
        price: "4.109.000",
        stock: 100,
        image: Adidas8ak
    }, {
        id: 16,
        name: "Adidas 1 High",
        type: "Men's Shoes",
        sizes: ["40", "40.5", "41", "42", "43", "44"],
        color: "White/White/White",
        price: "3.669.000",
        stock: 100,
        image: Adidas1high
    }, {
        id: 17,
        name: "Adidas Force 1 '07",
        type: "Men's Shoes",
        sizes: ["39", "40", "41", "42", "43", "44", "45"],
        color: "White/White",
        price: "2.799.000",
        stock: 150,
        image: Adidasforce1
    }, {
        id: 18,
        name: "Adidas Dunk Low Retro",
        type: "Men's Shoes",
        sizes: ["40", "41", "42", "43", "44", "45"],
        color: "Black/White",
        price: "3.199.000",
        stock: 120,
        image: dunklow
    }, {
        id: 19,
        name: "Adidas Jordan 3 Retro",
        type: "Men's Shoes",
        sizes: ["40", "41", "42", "43", "44", "45", "46"],
        color: "White/Black/Cement Grey",
        price: "4.500.000",
        stock: 90,
        image: jordan3retro
    }, {
        id: 20,
        name: "Adidas Blazer Mid '77 Vintage",
        type: "Men's Shoes",
        sizes: ["39", "40", "41", "42", "43", "44"],
        color: "White/Black",
        price: "2.299.000",
        stock: 130,
        image: blazermid
    },
    {
      id: 21,
      name: "Nike Pegasus 40",
      type: "Running Shoes",
      sizes: [38, 39, 40, 41, 42, 43],
      color: "Blue/White",
      price: "3.500.000",
      stock: 50,
      image: nikepegasus
  }, {
      id: 22,
      name: "Adidas Ultraboost Light",
      type: "Running Shoes",
      sizes: [39, 40, 41, 42, 43, 44],
      color: "Black/White",
      price: "4.200.000",
      stock: 45,
      image: ultraboostlight
  }, {
      id: 23,
      name: "Nike Air Force 1 '07",
      type: "Sneakers",
      sizes: [39, 40, 41, 42, 43, 44, 45],
      color: "White",
      price: "2.500.000",
      stock: 80,
      image: airforce1
  }, {
      id: 24,
      name: "Nike LeBron 20",
      type: "Basketball Shoes",
      sizes: [40, 41, 42, 43, 44, 45],
      color: "Red/Black",
      price: "5.000.000",
      stock: 35,
      image: lebron20
  }, {
      id: 25,
      name: "Nike Kyrie 8",
      type: "Basketball Shoes",
      sizes: [39, 40, 41, 42, 43, 44],
      color: "Black/Blue",
      price: "4.100.000",
      stock: 40,
      image: kyrie8
  }, {
      id: 26,
      name: "Nike KD 15",
      type: "Basketball Shoes",
      sizes: [40, 41, 42, 43, 44, 45],
      color: "Yellow/Black",
      price: "4.500.000",
      stock: 38,
      image: kd15
  }, {
      id: 27,
      name: "Adidas Yeezy Boost 350 V2",
      type: "Sneakers",
      sizes: [39, 40, 41, 42, 43, 44],
      color: "Grey/White",
      price: "7.500.000",
      stock: 25,
      image: yeezyboost
  }, {
      id: 28,
      name: "New Balance 327",
      type: "Casual Shoes",
      sizes: [37, 38, 39, 40, 41, 42],
      color: "Beige/Brown",
      price: "2.800.000",
      stock: 60,
      image: nb327
  }, {
      id: 29,
      name: "Reebok Club C 85",
      type: "Casual Shoes",
      sizes: [38, 39, 40, 41, 42, 43],
      color: "White/Green",
      price: "2.400.000",
      stock: 55,
      image: reebokclubc
  }, {
      id: 30,
      name: "Mizuno Wave Rider 26",
      type: "Running Shoes",
      sizes: [39, 40, 41, 42, 43, 44],
      color: "Navy/White",
      price: "3.200.000",
      stock: 50,
      image: mizunowave
  }
  ];


  
