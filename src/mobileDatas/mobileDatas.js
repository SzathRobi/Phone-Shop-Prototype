import huaweiP20 from "./phoneImgs/huaweiP20.png";
import huaweiP30 from "./phoneImgs/huaweiP30.png";
import iphone7plus from "./phoneImgs/iphone7plus.png";
import iphoneX from "./phoneImgs/iphoneX.png";
import iphone11proMax from "./phoneImgs/iphone11proMax.png";
import iphoneSe2020 from "./phoneImgs/iphoneSe2020.png";
import samsungGalaxyNote10 from "./phoneImgs/samsungGalaxyNote10.png";
import samsungGalaxyS20 from "./phoneImgs/samsungGalaxyS20.jpg";
import samsungGalaxyS20Ultra from "./phoneImgs/samsungGalaxyS20Ultra.png";
import honor20 from "./phoneImgs/honor20.png";
import honor30 from "./phoneImgs/honor30.png";

export const mobileDatas = [
  //1
  {
    basic: {
      id: 1,
      name: "Huawei P20",
      type: "Huawei",
      price: 350, //   $  //
      img: huaweiP20,
      isFav: false,
      inCart: false
    },
    body: {
      dimensions: "149.1 x 70.8 x 7.7 mm ",
      weight: 165,
      sim:
        "Single SIM (Nano-SIM) or Dual SIM (Nano-SIM, dual stand-by) Water-repellent coating"
    },

    display: {
      size: "5.8 inches, 84.9 cm2 (~80.4% screen-to-body ratio)",
      resolution: "1080 x 2240 pixels, 18.7:9 ratio (~429 ppi density)"
    },

    platform: {
      os: "Android 8.1 (Oreo), upgradable to Android 9.0 (Pie), EMUI 9.1",
      cpu: "Octa-core (4x2.4 GHz Cortex-A73 & 4x1.8 GHz Cortex-A53)",
      memory: "64GB 4GB RAM / 64GB 6GB RAM / 128GB 4GB RAM / 128GB 6GB RAM"
    },

    misc: {
      colors: "Twilight, Black, Midnight Blue, Pink Gold",
      nfc: "yes",
      radio: "no"
    }
  },
  //2
  {
    basic: {
      id: 2,
      name: "Huawei P30 Lite",
      type: "Huawei",
      price: 180, //   $  //
      img: huaweiP30,
      isFav: false,
      inCart: false
    },
    body: {
      dimensions: "152.9 x 72.7 x 7.4 mm",
      weight: 159,
      sim: "Single SIM (Nano-SIM) or Hybrid Dual SIM (Nano-SIM, dual stand-by)"
    },

    display: {
      size: "6.15 inches, 93.6 cm2 (~84.2% screen-to-body ratio)",
      resolution: "1080 x 2312 pixels (~415 ppi density)"
    },

    platform: {
      os: "Android 9.0 (Pie), upgradable to Android 10, EMUI 10.0",
      cpu: "Octa-core (4x2.2 GHz Cortex-A73 & 4x1.7 GHz Cortex-A53)",
      memory: "128GB 4GB RAM / 128GB 6GB RAM / 128GB 8GB RAM"
    },

    misc: {
      colors: "Peacock Blue, Midnight Black, Pearl White",
      nfc: "yes",
      radio: "FM radio (market dependent)"
    }
  },
  //3
  {
    basic: {
      id: 3,
      name: "Huawei P30 Pro",
      type: "Huawei",
      price: 563, //   $  //
      img: huaweiP30,
      isFav: false,
      inCart: false
    },
    body: {
      dimensions: "158 x 73.4 x 8.4 mm",
      weight: 192,
      sim: "Single SIM (Nano-SIM) or Hybrid Dual SIM (Nano-SIM, dual stand-by)"
    },

    display: {
      size: "6.47 inches, 102.8 cm2 (~88.6% screen-to-body ratio)",
      resolution: "1080 x 2340 pixels, 19.5:9 ratio (~398 ppi density)"
    },

    platform: {
      os: "Android 9.0 (Pie), upgradable to Android 10, EMUI 10",
      cpu:
        "Octa-core (2x2.6 GHz Cortex-A76 & 2x1.92 GHz Cortex-A76 & 4x1.8 GHz Cortex-A55)",
      memory: "128GB 6GB RAM / 128GB 8GB RAM / 256GB 8GB RAM / 512GB 8GB RAM"
    },

    misc: {
      colors: "Peacock Blue, Midnight Black, Pearl White",
      nfc: "yes",
      radio: "no"
    }
  },
  //4
  {
    basic: {
      id: 4,
      name: "Apple iPhone 7 Plus",
      type: "Apple",
      price: 267, //   $  //
      img: iphone7plus,
      isFav: false,
      inCart: false
    },
    body: {
      dimensions: "158.2 x 77.9 x 7.3 mm",
      weight: 188,
      sim: "Nano-SIM, Apple Pay (Visa, MasterCard, AMEX certified)"
    },

    display: {
      size: "5.5 inches, 83.4 cm2 (~67.7% screen-to-body ratio)",
      resolution: "1080 x 1920 pixels, 16:9 ratio (~401 ppi density)"
    },

    platform: {
      os: "iOS 10.0.1, upgradable to iOS 13.6",
      cpu: "Quad-core 2.34 GHz (2x Hurricane + 2x Zephyr)",
      memory: "32GB 3GB RAM / 128GB 3GB RAM / 256GB 3GB RAM"
    },

    misc: {
      colors: "Jet Black, Black, Silver, Gold, Rose Gold, Red",
      nfc: "yes",
      radio: "no"
    }
  },
  //5
  {
    basic: {
      id: 5,
      name: "Apple iPhone X",
      type: "Apple",
      price: 450, //   $  //
      img: iphoneX,
      isFav: false,
      inCart: false
    },
    body: {
      dimensions: "143.6 x 70.9 x 7.7 mm",
      weight: 174,
      sim: "Nano-SIM, Apple Pay (Visa, MasterCard, AMEX certified)"
    },

    display: {
      size: "5.8 inches, 84.4 cm2 (~82.9% screen-to-body ratio)",
      resolution: "1125 x 2436 pixels, 19.5:9 ratio (~458 ppi density)"
    },

    platform: {
      os: "iOS 11.1.1, upgradable to iOS 13.6",
      cpu: "Hexa-core 2.39 GHz (2x Monsoon + 4x Mistral)",
      memory: "64GB 3GB RAM / 256GB 3GB RAM"
    },

    misc: {
      colors: "Space Gray, Silver",
      nfc: "yes",
      radio: "no"
    }
  },
  // 6
  {
    basic: {
      id: 6,
      name: "Apple iPhone SE (2020)",
      type: "Apple",
      price: 379, //   $  //
      img: iphoneSe2020,
      isFav: false,
      inCart: false
    },
    body: {
      dimensions: "138.4 x 67.3 x 7.3 mm",
      weight: 148,
      sim: "Nano-SIM and/or eSIM, Apple Pay (Visa, MasterCard, AMEX certified)"
    },

    display: {
      size: "4.7 inches, 60.9 cm2 (~65.4% screen-to-body ratio)",
      resolution: "750 x 1334 pixels, 16:9 ratio (~326 ppi density)"
    },

    platform: {
      os: "	iOS 13",
      cpu: "Hexa-core (2x2.65 GHz Lightning + 4x1.8 GHz Thunder)",
      memory: "64GB 3GB RAM / 128GB 3GB RAM / 256GB 3GB RAM"
    },

    misc: {
      colors: "Black, White, Red",
      nfc: "yes",
      radio: "no"
    }
  },
  //7
  {
    basic: {
      id: 7,
      name: "Apple iPhone 11 Pro Max",
      type: "Apple",
      price: 1090, //   $  //
      img: iphone11proMax,
      isFav: false,
      inCart: false
    },
    body: {
      dimensions: "158 x 77.8 x 8.1 mm",
      weight: 226,
      sim:
        "Single SIM (Nano-SIM and/or eSIM) or Dual SIM (Nano-SIM, dual stand-by) - for China, Apple Pay (Visa, MasterCard, AMEX certified)"
    },

    display: {
      size: "6.5 inches, 102.9 cm2 (~83.7% screen-to-body ratio)",
      resolution: "	1242 x 2688 pixels, 19.5:9 ratio (~458 ppi density)"
    },

    platform: {
      os: "iOS 13, upgradable to iOS 13.6",
      cpu: "Hexa-core (2x2.65 GHz Lightning + 4x1.8 GHz Thunder)",
      memory: "64GB 4GB RAM / 256GB 4GB RAM / 512GB 4GB RAM"
    },

    misc: {
      colors: "Space Gray, Silver, Gold, Midnight Green (matte colors)",
      nfc: "yes",
      radio: "no"
    }
  },
  //8
  {
    basic: {
      id: 8,
      name: "Samsung Galaxy Note10+",
      type: "Samsung",
      price: 673, //   $  //
      img: samsungGalaxyNote10,
      isFav: false,
      inCart: false
    },
    body: {
      dimensions: "162.3 x 77.2 x 7.9 mm",
      weight: 196,
      sim: "Single SIM (Nano-SIM) or Hybrid Dual SIM (Nano-SIM, dual stand-by)"
    },

    display: {
      size: "6.8 inches, 114.0 cm2 (~91.0% screen-to-body ratio)",
      resolution: "1440 x 3040 pixels, 19:9 ratio (~498 ppi density)"
    },

    platform: {
      os: "Android 9.0 (Pie), upgradable to Android 10, One UI 2",
      cpu:
        "Octa-core (2x2.73 GHz Mongoose M4 & 2x2.4 GHz Cortex-A75 & 4x1.9 GHz Cortex-A55) - EMEA/LATAM",
      memory: "256GB 12GB RAM / 512GB 12GB RAM"
    },

    misc: {
      colors: "Aura Glow, Aura White, Aura Black, Aura Blue",
      nfc: "yes",
      radio: "FM radio (USA & Canada only)"
    }
  },
  //9
  {
    basic: {
      id: 9,
      name: "Samsung Galaxy S20",
      type: "Samsung",
      price: 704, //   $  //
      img: samsungGalaxyS20,
      isFav: false,
      inCart: false
    },
    body: {
      dimensions: "151.7 x 69.1 x 7.9 mm",
      weight: 163,
      sim:
        "Single SIM (Nano-SIM and/or eSIM) or Hybrid Dual SIM (Nano-SIM, dual stand-by)"
    },

    display: {
      size: "6.2 inches, 93.8 cm2 (~89.5% screen-to-body ratio)",
      resolution: "1440 x 3200 pixels, 20:9 ratio (~563 ppi density)"
    },

    platform: {
      os: "Android 10, One UI 2",
      cpu:
        "Octa-core (2x2.73 GHz Mongoose M5 & 2x2.50 GHz Cortex-A76 & 4x2.0 GHz Cortex-A55) - Global",
      memory: "128GB 8GB RAM"
    },

    misc: {
      colors: "Cosmic Grey, Cloud Blue, Cloud Pink, Cloud White, Aura Red",
      nfc: "yes",
      radio: "FM radio (Snapdragon model only; market/operator dependent)"
    }
  },
  //10
  {
    basic: {
      id: 10,
      name: "Samsung Galaxy S20 Ultra",
      type: "Samsung",
      price: 992, //   $  //
      img: samsungGalaxyS20Ultra,
      isFav: false,
      inCart: false
    },
    body: {
      dimensions: "166.9 x 76 x 8.8 mm",
      weight: 220,
      sim:
        "Single SIM (Nano-SIM and/or eSIM) or Hybrid Dual SIM (Nano-SIM, dual stand-by)"
    },

    display: {
      size: "6.9 inches, 114.0 cm2 (~89.9% screen-to-body ratio)",
      resolution: "	1440 x 3200 pixels, 20:9 ratio (~511 ppi density)"
    },

    platform: {
      os: "Android 10, One UI 2",
      cpu:
        "Octa-core (2x2.73 GHz Mongoose M5 & 2x2.50 GHz Cortex-A76 & 4x2.0 GHz Cortex-A55)",
      memory: "128GB 12GB RAM"
    },

    misc: {
      colors: "Cosmic Grey, Cosmic Black, Cloud White",
      nfc: "yes",
      radio: "Unspecified"
    }
  },
  //11
  {
    basic: {
      id: 11,
      name: "Honor 30",
      type: "Honor",
      price: 319, //   $  //
      img: honor30,
      isFav: false,
      inCart: false
    },
    body: {
      dimensions: "160.3 x 74.2 x 8.1 mm",
      weight: 185,
      sim: "Hybrid Dual SIM (Nano-SIM, dual stand-by)"
    },

    display: {
      size: "6.53 inches, 102.9 cm2 (~86.6% screen-to-body ratio)",
      resolution: "	1080 x 2400 pixels, 20:9 ratio (~403 ppi density)"
    },

    platform: {
      os: "Android 10, Magic UI 3, no Google Play Services",
      cpu:
        "Octa-core (1x2.58 GHz Cortex-A76 & 3x2.40 GHz Cortex-A76 & 4x1.84 GHz Cortex-A55)",
      memory: "128GB 6GB RAM / 128GB 8GB RAM / 256GB 8GB RAM"
    },

    misc: {
      colors:
        "Titanium silver, Emerald Green, Midnight Black, Icelandic Frost, Neon purple",
      nfc: "yes",
      radio: "no"
    }
  },
  //12
  {
    basic: {
      id: 12,
      name: "Honor 30 Pro",
      type: "Honor",
      price: 583, //   $  //
      img: honor30,
      isFav: false,
      inCart: false
    },
    body: {
      dimensions: "160.3 x 73.6 x 8.4 mm",
      weight: 186,
      sim: "Hybrid Dual SIM (Nano-SIM, dual stand-by)"
    },

    display: {
      size: "6.57 inches, 106.0 cm2 (~89.8% screen-to-body ratio)",
      resolution: "1080 x 2340 pixels, 19.5:9 ratio (~392 ppi density)"
    },

    platform: {
      os: "Android 10, Magic UI 3, no Google Play Services",
      cpu:
        "Octa-core (2x2.86 GHz Cortex-A76 & 2x2.36 GHz Cortex-A76 & 4x1.95 GHz Cortex-A55)",
      memory: "128GB 8GB RAM / 256GB 8GB RAM"
    },

    misc: {
      colors:
        "Titanium silver, Emerald Green, Midnight Black, Icelandic Frost, Neon purple",
      nfc: "yes",
      radio: "no"
    }
  },
  //13
  {
    basic: {
      id: 13,
      name: "Honor 20",
      type: "Honor",
      price: 267, //   $  //
      img: honor20,
      isFav: false,
      inCart: false
    },
    body: {
      dimensions: "154.3 x 74 x 7.9 mm",
      weight: 174,
      sim: "Dual SIM (Nano-SIM, dual stand-by)"
    },

    display: {
      size: "6.26 inches, 96.2 cm2 (~84.2% screen-to-body ratio)",
      resolution: "1080 x 2340 pixels, 19.5:9 ratio (~412 ppi density)"
    },

    platform: {
      os: "Android 9.0 (Pie), Magic 2.1",
      cpu:
        "Octa-core (2x2.6 GHz Cortex-A76 & 2x1.92 GHz Cortex-A76 & 4x1.8 GHz Cortex-A55)",
      memory: "128GB 6GB RAM / 128GB 8GB RAM / 256GB 8GB RAM"
    },

    misc: {
      colors: "Midnight Black, Sapphire Blue, Icelandic white, Phantom Blue",
      nfc: "yes",
      radio: "no"
    }
  },
  //14
  {
    basic: {
      id: 14,
      name: "Honor 20 Pro",
      type: "Honor",
      price: 360, //   $  //
      img: honor20,
      isFav: false,
      inCart: false
    },
    body: {
      dimensions: "154.6 x 74 x 8.4 mm",
      weight: 182,
      sim: "Dual SIM (Nano-SIM, dual stand-by)"
    },

    display: {
      size: "6.26 inches, 96.2 cm2 (~84.1% screen-to-body ratio)",
      resolution: "1080 x 2340 pixels, 19.5:9 ratio (~412 ppi density)"
    },

    platform: {
      os: "Android 9.0 (Pie), Magic 2.1",
      cpu:
        "Octa-core (2x2.6 GHz Cortex-A76 & 2x1.92 GHz Cortex-A76 & 4x1.8 GHz Cortex-A55)",
      memory: "128GB 8GB RAM / 256GB 8GB RAM"
    },

    misc: {
      colors: "Phantom Blue, Phantom Black, Icelandic Illusion",
      nfc: "Yes (market/region dependent)",
      radio: "no"
    }
  }
];
