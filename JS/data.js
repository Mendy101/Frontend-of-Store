//all type of smartphone in the store




// let smartphones_arr = [];
// async function loadData() {
//   smartphones_arr = await fetchDataFromServer("smartphones", "Smartphone");
//   console.log(smartphones_arr);
 
// }

// loadData();

const smartphones_arr = [
  {
    id: "40047",
    image: "Smartphone/s_a35.jpg",
    logo: "logo/logo_Samsung.jpg",
    type: "Galaxy A35",
    company: "Samsung",
    color: "Black",
    details:
      "Samsung Galaxy A35 5G 8GB+256GB - Awesome Iceblue - 2 Year Warranty",
    price: "₪3,645",
  },
  {
    id: "40048",
    image: "Smartphone/a_15.jpg",
    logo: "logo/logo_apple.jpg",
    type: "iPhone 15",
    company: "Apple",
    color: "White",
    details:
      "Apple iPhone 15 256GB - Black - 1 Year Warranty by the Official Distributor - Without Charger and Without Headphones",
    price: "₪4,949",
  },
  {
    id: "40049",
    image: "Smartphone/x_a3.jpg",
    logo: "logo/logo_Xiaomi.jpg",
    type: "Redmi A3",
    company: "Xiaomi",
    color: "Green",
    details:
      "Xiaomi Redmi A3 4GB+128GB Forest Green - 2 Years Warranty by Hemilton",
    price: "₪389",
  },
  {
    id: "40050",
    image: "Smartphone/s_s21_fe.jpg",
    logo: "logo/logo_Samsung.jpg",
    type: "Galaxy S21 FE",
    company: "Samsung",
    color: "Silver",
    details:
      "Samsung Galaxy S21 FE 5G 8GB+256GB Graphite SM-G990B2/DS - 2 Year Warranty",
    price: "₪1,490",
  },
  {
    id: "40051",
    image: "Smartphone/a_15_pro _max.jpg",
    logo: "logo/logo_apple.jpg",
    type: "iPhone 15 Pro Max",
    company: "Apple",
    color: "Silver",
    details:
      "Apple iPhone 15 Pro Max 256GB - Black Titanium - 1 Year Warranty by the Official Distributor - Without Charger and Without Headphones",
    price: "₪5,429",
  },
  {
    id: "40052",
    image: "Smartphone/s_s24_ultra.jpg",
    logo: "logo/logo_Samsung.jpg",
    type: "Galaxy S24 Ultra",
    company: "Samsung",
    color: "White",
    details:
      "Samsung Galaxy S24 Ultra 12GB+256GB Titanium Gray (SM-S928B/DS) - 1 Year Official",
    price: "₪4,649",
  },
  {
    id: "40053",
    image: "Smartphone/x_13_pro+.jpg",
    logo: "logo/logo_Xiaomi.jpg",
    type: "Redmi Note 13 pro+",
    company: "Xiaomi",
    color: "Black",
    details:
      "Xiaomi Redmi Note 13 Pro+ 5G 12GB+512GB Aurora Purple - 2 Years Warranty by Hemilton",
    price: "₪1,720",
  },
  {
    id: "40054",
    image: "Smartphone/a_14_plus.jpg",
    logo: "logo/logo_apple.jpg",
    type: "iPhone 14 Plus",
    company: "Apple",
    color: "Red",
    details:
      "Apple iPhone 14 Plus 128GB - Blue - 1 Year Warranty by the Official Distributor - Without Charger and Without Headphones",
    price: "₪2,899",
  },
  {
    id: "40055",
    image: "Smartphone/a_13.jpg",
    logo: "logo/logo_apple.jpg",
    type: "iPhone 13",
    company: "Apple",
    color: "Black",
    details:
      "Apple iPhone 13 128GB Starlight - 1 Year Warranty by The Official Distributor - Without Charger And Without Headphones",
    price: "₪2,499",
  },
  {
    id: "40056",
    image: "Smartphone/s_note_20.jpg",
    logo: "logo/logo_Samsung.jpg",
    type: "Galaxy Note 20 Ultra",
    company: "Samsung",
    color: "Black",
    details: "Samsung -  Galaxy Note20 Ultra 5G 128GB  - Mystic Black",
    price: "₪4,649",
  },
  {
    id: "40057",
    image: "Smartphone/x_12.jpg",
    logo: "logo/logo_Xiaomi.jpg",
    type: "Redmi 12",
    company: "Xiaomi",
    color: "Black",
    details: "Xiaomi Redmi 12 4GB+128GB - Midnight Black",
    price: "₪559",
  },
  {
    id: "40058",
    image: "Smartphone/x_paco_m6.jpg",
    logo: "logo/logo_Xiaomi.jpg",
    type: "Poco M6",
    company: "Xiaomi",
    color: "Silver",
    details: "Xiaomi Poco M6 6GB+128GB Purple - 2 Years Warranty by Hemilton",
    price: "₪699",
  },
];

const props_arr = [
  {
    id: "30025",
    image: "props/AirPodsMax.jpg",
    logo: "logo/logo_apple.jpg",
    type: "AirPods Max",
    company: "Apple",
    color: "Pink",
    details: "Apple - AirPods Max - Pink",
    price: "₪2,500",
  },
  {
    id: "30026",
    image: "props/sony2.jpg",
    logo: "logo/bose.jpg",
    type: "Headphones QuietComfort ",
    company: "Bose",
    color: "Black",
    details:
      "Bose - QuietComfort Wireless Noise Cancelling Over-the-Ear Headphones - Black",
    price: "₪899",
  },
  {
    id: "30027",
    image: "props/sony1.jpg",
    logo: "logo/sony.jpg",
    type: "Headphones WH1000XM4 ",
    company: "Sony",
    color: "Black",
    details:
      "Sony - WH1000XM4 Wireless Noise-Cancelling Over-the-Ear Headphones - Black",
    price: "₪1199",
  },
  {
    id: "30028",
    image: "props/AirPodsPro2.jpg",
    logo: "logo/logo_apple.jpg",
    type: "AirPods Pro 2",
    company: "Apple",
    color: "White",
    details: "Apple - AirPods Pro 2 - White",
    price: "₪1100",
  },
  {
    id: "30029",
    image: "props/mouse1.jpg",
    logo: "logo/logo_logitech.jpg",
    type: "Mouse MX Master 3S",
    company: "Logitech",
    color: "Black",
    details:
      "Logitech - MX Master 3S Wireless Laser Mouse with Ultrafast Scrolling - Black",
    price: "₪169",
  },
  {
    id: "30030",
    image: "props/mouse2.jpg",
    logo: "logo/logo_apple.jpg",
    type: "Magic Mouse Apple",
    company: "Apple",
    color: "White",
    details: "Apple - Magic Mouse - White",
    price: "₪299",
  },
  {
    id: "30031",
    image: "props/mouse3.jpg",
    logo: "logo/logo_Belkin.jpg",
    type: "Gaming Mouse V3",
    company: "Razer",
    color: "Black",
    details:
      "Razer Basilisk V3 X HyperSpeed Customizable Wireless Gaming Mouse - Black",
    price: "₪120",
  },
  {
    id: "30032",
    image: "props/keyboard3.jpg",
    logo: "logo/logo_logitech.jpg",
    type: "Keyboard MX Keys S",
    company: "Logitech",
    color: "Black",
    details:
      "Logitech - MX Keys S Advanced Full-size Wireless Scissor Keyboard for PC and Mac with Backlit keys - Black",
    price: "₪199",
  },
  {
    id: "30033",
    image: "props/Keyboard2.jpg",
    logo: "logo/logo_logitech.jpg",
    type: "Keyboard MX Mechanical",
    company: "Logitech",
    color: "Graphite",
    details:
      "Logitech - MX Mechanical Full size Wireless Mechanical Tactile Switch Keyboard for Windows/macOS with Backlit Keys - Graphite",
    price: "₪239",
  },
  {
    id: "30034",
    image: "props/Keyboard1.jpg",
    logo: "logo/logo_apple.jpg",
    type: "Magic Keyboard Apple",
    company: "Apple",
    color: "Silver",
    details:
      "Apple - Magic Keyboard full size with Numeric Keypad - Silver/White",
    price: "₪369",
  },
  {
    id: "30035",
    image: "props/WirelessChargingPad.jpg",
    logo: "logo/logo_Belkin.jpg",
    type: "Wireless Charging Pad",
    company: "Belkin",
    color: "Black",
    details:
      "Belkin - MagSafe 3-in-1 Wireless Charging Pad - Fast Wireless Charging for Apple Watch, iPhone 15, 14, 13 & 12 series, & AirPods - Black",
    price: "₪350",
  },
  {
    id: "30036",
    image: "props/Apple_Power_Adapter.jpg",
    logo: "logo/logo_apple.jpg",
    type: "Power Adapter 12W USB ",
    company: "Apple",
    color: "White",
    details: "Apple - 12W USB Power Adapter - White",
    price: "₪94",
  },
  {
    id: "30037",
    image: "props/Anker735.jpg",
    logo: "logo/logo_ancer.jpg",
    type: "Charger 65W 735",
    company: "Anker",
    color: "Black",
    details:
      "Anker - 735 65W 3 Port USB Foldable Fast Wall Charger with GaN for iPhone/Samsung/Tablets/Laptops - Black",
    price: "₪125",
  },
  {
    id: "30038",
    image: "props/Cable.jpg",
    logo: "logo/logo_apple.jpg",
    type: "Lightning Charging Cable ",
    company: "Apple",
    color: "White",
    details: "Apple - 6.6' (2M) USB Type C-to-Lightning Charging Cable - White",
    price: "₪69",
  },
];

const tablets_arr = [
  {
    id: "20014",
    image: "Tablets/a_11_air.jpg",
    logo: "logo/logo_apple.jpg",
    type: "iPad 11-inch iPad Air M2",
    company: "Apple",
    color: "Silver",
    details:
      "Apple - 11-inch iPad Air M2 chip Built for Apple Intelligence Wi-Fi 128GB - Starlight",
    price: "₪3,100",
  },
  {
    id: "20024",
    image: "Tablets/LenovoTABPlus.jpg",
    logo: "logo/logo_lenovo.jpg",
    type: "Lenovo TAB Plus",
    company: "Lenovo",
    color: "Silver",
    details: "Lenovo TAB Plus TB351FU 256GB WiFi ZADX0104IL - Silver",
    price: "₪1,799",
  },
  {
    id: "20017",
    image: "Tablets/GalaxyTabS9.jpg",
    logo: "logo/logo_Samsung.jpg",
    type: "Galaxy Tab S9",
    company: "Samsung",
    color: "Black",
    details:
      "Samsung Galaxy Tab S9 Octa Core 3.2GHz 8GB+128GB 11'' Wi-Fi- Graphite (SM-X710) - 1 Year Warranty by the Official Distributor",
    price: "₪3,089",
  },
  {
    id: "20015",
    image: "Tablets/a_13__air.jpg",
    logo: "logo/logo_apple.jpg",
    type: "iPad 13-inch iPad Air M2",
    company: "Apple",
    color: "Blue",
    details:
      "Apple - 13-inch iPad Air M2 chip Built for Apple Intelligence Wi-Fi 128GB - Blue",
    price: "₪2,899",
  },
  {
    id: "20016",
    image: "Tablets/a_10.9.jpg",
    logo: "logo/logo_apple.jpg",
    type: "iPad 10.9-Inch iPad",
    company: "Apple",
    color: "Silver",
    details:
      "Apple - 10.9-Inch iPad - Latest Model - (10th Generation) with Wi-Fi - 64GB - Silver",
    price: "₪2,699",
  },
  {
    id: "20018",
    image: "Tablets/GalaxyTabS9Ultra.jpg",
    logo: "logo/logo_Samsung.jpg",
    type: "Galaxy Tab S9 Ultra",
    company: "Samsung",
    color: "Black",
    details:
      "Samsung Galaxy Tab S9 Ultra Octa Core 3.2GHz 12GB+256GB 14.6'' 5G - Beige (SM-X916) - 1 Year Warranty by the Official ",
    price: "₪4,429",
  },
  {
    id: "20021",
    image: "Tablets/LenovoP12.jpg",
    logo: "logo/logo_lenovo.jpg",
    type: "Lenovo TAB P12 ",
    company: "Lenovo",
    color: "Silver",
    details:
      "Lenovo TAB P12 TB370FU MediaTek Dimensity 256GB ZACH0198IL -Silver",
    price: "₪1,899",
  },
  {
    id: "20019",
    image: "Tablets/GalaxyTabS6Lite.jpg",
    logo: "logo/logo_Samsung.jpg",
    type: " Galaxy Tab S6 Lite",
    company: "Samsung",
    color: "Silver",
    details:
      "Samsung Galaxy Tab S6 Lite 128GB SM-P620 - WiFi - Gray - 1 Year Warranty",
    price: "₪1,599",
  },
  {
    id: "20020",
    image: "Tablets/GalaxyTabA9+.jpg",
    logo: "logo/logo_Samsung.jpg",
    type: "Galaxy Tab A9+",
    company: "Samsung",
    color: "Silver",
    details:
      "Samsung Galaxy Tab A9+ Octa Core 2.2GHz 8GB+128GB 11'' 5G Gray (SM-X216) 1 Year Official",
    price: "₪1,999",
  },
  {
    id: "20022",
    image: "Tablets/LenovoTabP11.jpg",
    logo: "logo/logo_lenovo.jpg",
    type: "Lenovo Tab P11 2nd Gen ",
    company: "Lenovo",
    color: "Silver",
    details: "Lenovo Tab P11 2nd Gen TB350XU 128GB 4G ZABG0039IL -Silver",
    price: "₪2,100",
  },
  {
    id: "20013",
    image: "Tablets/a_pro_m4.jpg",
    logo: "logo/logo_apple.jpg",
    type: "iPad 13-inch iPad Pro M4",
    company: "Apple",
    color: "Black",
    details:
      "Apple - 13-inch iPad Pro M4 chip Built for Apple Intelligence Wi-Fi 512GB with OLED - Space Black",
    price: "₪5,399",
  },
  {
    id: "20023",
    image: "Tablets/LenovoYogaTAB11.jpg",
    logo: "logo/logo_lenovo.jpg",
    type: "Lenovo Yoga TAB 11",
    company: "Lenovo",
    color: "Silver",
    details: "Lenovo Yoga TAB 11 YT-J706F 256GB ZA8W0058IL Silver - WiFi",
    price: "₪1,799",
  },
];

const computers_arr = [
  {
    id: "50087",
    image: "Computers/a_air_13.jpg",
    logo: "logo/logo_apple.jpg",
    type: "MacBook air 13 M2",
    company: "Apple",
    color: "Black",
    details:
      "Apple - MacBook Air 13.6 Laptop - M2 chip Built for Apple Intelligence - 8GB Memory - 256GB SSD - Midnight",
    price: "₪6,299",
  },
  {
    id: "50091",
    image: "Computers/l_yoga_slim_x7.jpg",
    logo: "logo/logo_lenovo.jpg",
    type: "Yoga Slim 7x",
    company: "Lenovo",
    color: "Blue",
    details:
      "Lenovo - Yoga Slim 7x - Copilot+ PC - 14.5 3K OLED Touch-Screen Laptop - Snapdragon X Elite - 16GB Memory - 512GB SSD - Cosmic Blue",
    price: "₪4,229",
  },
  {
    id: "50095",
    image: "Computers/d_xps_13.jpg",
    logo: "logo/logo_dell.jpg",
    type: "XPS 13",
    company: "Dell",
    color: "Silver",
    details:
      "Dell - XPS 13 - Copilot+ PC - 13.4 OLED Touch-Screen Laptop - Snapdragon X Elite w/ Dual Core Boost - 16GB Memory - 512GB SSD - Graphite",
    price: "₪7,300",
  },
  {
    id: "50088",
    image: "Computers/a_pro_14.jpg",
    logo: "logo/logo_apple.jpg",
    type: "MacBook pro 14 M3",
    company: "Apple",
    color: "Silver",
    details:
      "Apple - MacBook Pro 14 Laptop - M3 chip Built for Apple Intelligence - 8GB Memory - 10-core GPU - 1TB SSD - Space Gray",
    price: "₪7,599",
  },
  {
    id: "50097",
    image: "Computers/h_OmniBook.jpg",
    logo: "logo/logo_hp.jpg",
    type: "OmniBook X",
    company: "HP",
    color: "Silver",
    details:
      "HP - OmniBook X - Copilot+ PC - 14 2.2K Touch-Screen Laptop - Snapdragon X Elite - 16GB Memory - 1TB SDD - Meteor Silver",
    price: "₪5,299",
  },
  {
    id: "50089",
    image: "Computers/a_pro_16.jpg",
    logo: "logo/logo_apple.jpg",
    type: "MacBook pro 16 M3",
    company: "Apple",
    color: "Black",
    details:
      "Apple - MacBook Pro 16 Laptop - M3 Max chip Built for Apple Intelligence - 48GB Memory - 40-core GPU - 1TB SSD - Space Black",
    price: "₪9,899",
  },

  {
    id: "50094",
    image: "Computers/l_LOQ.jpg",
    logo: "logo/logo_lenovo.jpg",
    type: "LOQ 15.6 Gaming",
    company: "Lenovo",
    color: "Silver",
    details:
      "Lenovo - LOQ 15.6 Gaming Laptop FHD - AMD Ryzen 7 7435HS with 16GB Memory - NVIDIA GeForce RTX 4060 8GB - 512GB SSD - Luna Grey",
    price: "₪6,429",
  },
  {
    id: "50090",
    image: "Computers/a_air_15.jpg",
    logo: "logo/logo_apple.jpg",
    type: "MacBook air 15 M2",
    company: "Apple",
    color: "Silver",
    details:
      " Apple - MacBook Air 15 Laptop - M2 chip Built for Apple Intelligence - 8GB Memory - 256GB SSD - Starlight",
    price: "₪6,429",
  },
  {
    id: "50092",
    image: "Computers/l_ideapad_1.jpg",
    logo: "logo/logo_lenovo.jpg",
    type: "Ideapad 1",
    company: "Lenovo",
    color: "Silver",
    details:
      "Lenovo - Ideapad 1 15.6 Full HD Touchscreen Laptop - Ryzen 7 5700U with 16GB Memory - AMD Radeon Graphics - 512GB SSD - Cloud Gray",
    price: "₪3,199",
  },
  {
    id: "50098",
    image: "Computers/h_Spectre.jpg",
    logo: "logo/logo_hp.jpg",
    type: "Spectre 2-in-1",
    company: "HP",
    color: "Black",
    details:
      "HP - Spectre 2-in-1 14 2.8K OLED Touch-Screen Laptop - Intel Core Ultra 7 - Intel Evo Edition - 16GB Memory - 1TB SSD - Nightfall Black",
    price: "₪2,999",
  },
  {
    id: "50093",
    image: "Computers/l_Legion_Pro.jpg",
    logo: "logo/logo_lenovo.jpg",
    type: "Legion Pro 5i",
    company: "Lenovo",
    color: "Black",
    details:
      "Lenovo - Legion Pro 5i 16 Gaming Laptop WQXGA - Intel 14th Gen Core i9 with 32GB Memory - NVIDIA GeForce RTX 4070 8GB - 2TB SSD - Onyx Grey",
    price: "₪4,100",
  },
  {
    id: "50096",
    image: "Computers/d_Inspiron.jpg",
    logo: "logo/logo_dell.jpg",
    type: "Inspiron 16 2-in-1",
    company: "Dell",
    color: "Blue",
    details:
      "Dell - Inspiron 16 2-in-1 Mini-LED Touch Laptop Intel Core Ultra 7 Processor - 32GB Memory – 1TB SDD - Intel Arc Graphics - Midnight Blue",
    price: "₪5,699",
  },
];

const allProducts = {
  smartphones_arr,
  props_arr,
  tablets_arr,
  computers_arr,
};

let inventory_DB = [
  { id: "40047", type: "Galaxy A35", amount: 4, image: "Smartphone/s_a35.jpg" },
  { id: "40048", type: "iPhone 15", amount: 5, image: "Smartphone/a_15.jpg" },
  { id: "40049", type: "Redmi A3", amount: 2, image: "Smartphone/x_a3.jpg" },
  {
    id: "40050",
    type: "Galaxy S21 FE",
    amount: 5,
    image: "Smartphone/s_s21_fe.jpg",
  },
  {
    id: "40051",
    type: "iPhone 15 Pro Max",
    amount: 9,
    image: "Smartphone/a_15_pro _max.jpg",
  },
  {
    id: "40052",
    type: "Galaxy S24 Ultra",
    amount: 4,
    image: "Smartphone/s_s24_ultra.jpg",
  },
  {
    id: "40053",
    type: "Redmi Note 13 pro+",
    amount: 8,
    image: "Smartphone/x_13_pro+.jpg",
  },
  {
    id: "40054",
    type: "iPhone 14 Plus",
    amount: 6,
    image: "Smartphone/a_14_plus.jpg",
  },
  { id: "40055", type: "iPhone 13", amount: 10, image: "Smartphone/a_13.jpg" },
  {
    id: "40056",
    type: "Galaxy Note 20 Ultra",
    amount: 1,
    image: "Smartphone/s_note_20.jpg",
  },
  { id: "40057", type: "Redmi 12", amount: 5, image: "Smartphone/x_12.jpg" },
  {
    id: "40058",
    type: "Poco M6",
    amount: 3,
    image: "Smartphone/x_paco_m6.jpg",
  },

  {
    id: "30025",
    type: "AirPods Max",
    amount: 6,
    image: "props/AirPodsMax.jpg",
  },
  { id: "30026", type: "QuietComfort", amount: 2, image: "props/sony2.jpg" },
  { id: "30027", type: "WH1000XM4", amount: 9, image: "props/sony1.jpg" },
  {
    id: "30028",
    type: "AirPods Pro 2",
    amount: 4,
    image: "props/AirPodsPro2.jpg",
  },
  { id: "30029", type: "MX Master 3S", amount: 3, image: "props/mouse1.jpg" },
  { id: "30030", type: "Magic Mouse", amount: 7, image: "props/mouse2.jpg" },
  { id: "30031", type: "Basilisk V3 X", amount: 1, image: "props/mouse3.jpg" },
  { id: "30032", type: "MX Keys S", amount: 5, image: "props/keyboard3.jpg" },
  {
    id: "30033",
    type: "MX Mechanical",
    amount: 8,
    image: "props/Keyboard2.jpg",
  },
  {
    id: "30034",
    type: "Magic Keyboard",
    amount: 2,
    image: "props/Keyboard1.jpg",
  },
  {
    id: "30035",
    type: "Wireless Charging Pad",
    amount: 7,
    image: "props/WirelessChargingPad.jpg",
  },
  {
    id: "30036",
    type: "12W USB",
    amount: 6,
    image: "props/Apple_Power_Adapter.jpg",
  },
  { id: "30037", type: "735 65W", amount: 9, image: "props/Anker735.jpg" },
  {
    id: "30038",
    type: "Lightning Charging Cable",
    amount: 1,
    image: "props/Cable.jpg",
  },

  {
    id: "20013",
    type: "iPad 13-inch iPad Pro M4",
    amount: 5,
    image: "Tablets/a_pro_m4.jpg",
  },
  {
    id: "20014",
    type: "iPad 11-inch iPad Air M2",
    amount: 2,
    image: "Tablets/a_11_air.jpg",
  },
  {
    id: "20015",
    type: "iPad 13-inch iPad Air M2",
    amount: 3,
    image: "Tablets/a_13__air.jpg",
  },
  {
    id: "20016",
    type: "iPad 10.9-Inch iPad",
    amount: 7,
    image: "Tablets/a_10.9.jpg",
  },
  {
    id: "20017",
    type: "Galaxy Tab S9",
    amount: 6,
    image: "Tablets/GalaxyTabS9.jpg",
  },
  {
    id: "20018",
    type: "Galaxy Tab S9 Ultra",
    amount: 1,
    image: "Tablets/GalaxyTabS9Ultra.jpg",
  },
  {
    id: "20019",
    type: "Galaxy Tab S6 Lite",
    amount: 8,
    image: "Tablets/GalaxyTabS6Lite.jpg",
  },
  {
    id: "20020",
    type: "Galaxy Tab A9+",
    amount: 4,
    image: "Tablets/GalaxyTabA9+.jpg",
  },
  {
    id: "20021",
    type: "Lenovo TAB P12",
    amount: 9,
    image: "Tablets/LenovoP12.jpg",
  },
  {
    id: "20022",
    type: "Lenovo Tab P11 2nd Gen",
    amount: 6,
    image: "Tablets/LenovoTabP11.jpg",
  },
  {
    id: "20023",
    type: "Lenovo Yoga TAB 11",
    amount: 7,
    image: "Tablets/LenovoYogaTAB11.jpg",
  },
  {
    id: "20024",
    type: "Lenovo TAB Plus",
    amount: 10,
    image: "Tablets/LenovoTABPlus.jpg",
  },

  {
    id: "50087",
    type: "MacBook Air 13 M2",
    amount: 3,
    image: "Computers/a_air_13.jpg",
  },
  {
    id: "50088",
    type: "MacBook Pro 14 M3",
    amount: 4,
    image: "Computers/a_pro_14.jpg",
  },
  {
    id: "50089",
    type: "MacBook Pro 16 M3",
    amount: 8,
    image: "Computers/a_pro_16.jpg",
  },
  {
    id: "50090",
    type: "MacBook Air 15 M2",
    amount: 5,
    image: "Computers/a_air_15.jpg",
  },
  {
    id: "50091",
    type: "Yoga Slim 7x",
    amount: 2,
    image: "Computers/l_yoga_slim_x7.jpg",
  },
  {
    id: "50092",
    type: "Ideapad 1",
    amount: 6,
    image: "Computers/l_ideapad_1.jpg",
  },
  {
    id: "50093",
    type: "Legion Pro 5i",
    amount: 9,
    image: "Computers/l_Legion_Pro.jpg",
  },
  {
    id: "50094",
    type: "LOQ 15.6 Gaming",
    amount: 7,
    image: "Computers/l_LOQ.jpg",
  },
  { id: "50095", type: "XPS 13", amount: 3, image: "Computers/d_xps_13.jpg" },
  {
    id: "50096",
    type: "Inspiron 16 2-in-1",
    amount: 5,
    image: "Computers/d_Inspiron.jpg",
  },
  {
    id: "50097",
    type: "OmniBook X",
    amount: 6,
    image: "Computers/h_OmniBook.jpg",
  },
  {
    id: "50098",
    type: "Spectre 2-in-1",
    amount: 4,
    image: "Computers/h_Spectre.jpg",
  },
];




// async function getData() {
//   try {
//     const response = await fetch(`http://127.0.0.1:3000/products`);
//     return await response.json()
//   } catch (error) {
//     console.error("Error:", error)
//     return []
//   }
// }

// getData();
// console.log(data)