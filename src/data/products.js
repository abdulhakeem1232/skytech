import thinkpad1 from '../assets/thinkpad_e16_1.jpg';
import thinkpad2 from '../assets/thinkpad_e16_2.jpg';
import thinkpad3 from '../assets/thinkpad_e16_3.jpg';
import thinkpad4 from '../assets/thinkpad_e16_4.jpg';
import hp1 from '../assets/hp250r_1.jpg';
import hp2 from '../assets/hp250r_2.jpg';
import hp3 from '../assets/hp250r_3.jpg';
import hp4 from '../assets/hp250r_4.jpg';
import hp5 from '../assets/hp250r_5.jpg';
import lenovagaming1 from '../assets/lenovagaming1.jpg'
import lenovagaming2 from '../assets/lenovagaming2.jpg'
import lenovagaming3 from '../assets/lenovagaming3.jpg'
import lenovagaming4 from '../assets/lenovagaming4.jpg'
import lenovagaming5 from '../assets/lenovagaming5.jpg'
import desktopDellTower1 from '../assets/desktopdelltower1.jpg'
import desktopDellTower2 from '../assets/desktopdelltower2.jpg'
import desktopDellTower3 from '../assets/desktopdelltower3.jpg'
import desktopDellTower4 from '../assets/desktopdelltower4.jpg'
import desktopLenova1 from '../assets/desktoplenova1.jpg'
import desktopLenova2 from '../assets/desktoplenova2.jpg'
import desktopLenova3 from '../assets/desktoplenova3.jpg'
import desktopLenova4 from '../assets/desktoplenova4.jpg'
import desktopLenova5 from '../assets/desktoplenova5.jpg'
import desktopDell1 from '../assets/desktopdell1.jpg'
import desktopDell2 from '../assets/desktopdell2.jpg'
import desktopDell3 from '../assets/desktopdell3.jpg'
import desktopDell4 from '../assets/desktopdell4.jpg'
import desktopDell5 from '../assets/desktopdell5.jpg'
import desktopDell56 from '../assets/desktopdell6.jpg'
import monitorDell1 from '../assets/monitordell1.jpg';
import monitorDell2 from '../assets/monitordell2.jpg';
import monitorDell3 from '../assets/monitordell3.jpg';
import monitorDell4 from '../assets/monitordell4.jpg';
import monitorDell5 from '../assets/monitordell5.jpg';
import monitorDell6 from '../assets/monitordell6.jpg';
import laserjetPrint1 from '../assets/laserjetprinter1.jpg';
import laserjetPrint2 from '../assets/laserjetprinter2.jpg';
import laserjetPrint3 from '../assets/laserjetprinter3.jpg';
import thinkpad_gen3_1 from '../assets/thinkpad_gen3_1.jpg';
import thinkpad_gen3_2 from '../assets/thinkpad_gen3_2.jpg';
import thinkpad_gen3_3 from '../assets/thinkpad_gen3_3.jpg';
import thinkpad_gen3_4 from '../assets/thinkpad_gen3_4.jpg';
import thinkpad_gen3_5 from '../assets/thinkpad_gen3_5.jpg';
import thinkpad_gen3_6 from '../assets/thinkpad_gen3_6.jpg';
import thinkpad_gen3_7 from '../assets/thinkpad_gen3_7.jpg';






export const products = [
    {
        id: 1,
        name: "Lenovo ThinkPad E16 Gen 2",
        price: 3899,
        images: [
            thinkpad1,
            thinkpad2,
            thinkpad3,
            thinkpad4
        ],
        description: "Laptop Lenovo ThinkPad E16 Intel Core Ultra 7-155H Processor, 16GB DDR5, 512GB SSD M.2, Intel Arc Graphics, 16-inch Display WUXGA 1920x1200 IPS, Free Dos - Black",
        category: "Laptops"
    },
    {
        id: 2,
        name: "HP 250R G10",
        price: 1899,
        images: [
            hp1,
            hp2,
            hp5,
            hp3,
            hp4
        ],
        description: "Laptop HP 250R G10 Intel Core 5-120U Processor, 8GB Ram, 512GB SSD M.2, Intel Graphics, 15.6-inch Full HD Display 1920x1080, Free Dos - Turbo silver",
        category: "Laptops"
    },
    {
        id: 3,
        name: "Lenovo Gaming LOQ 15AHP10",
        price: 4449,
        images: [
            lenovagaming1,
            lenovagaming2,
            lenovagaming3,
            lenovagaming4,
            lenovagaming5    
        ],
        description: "Laptop Lenovo Gaming LOQ 15AHP10 AMD Ryzen 7-250 Processor, 32GB Ram, 1TB SSD M.2, NVIDIA GeForce RTX 5050 8GB Graphics, 15.6-inch Full HD 1920x1080, IPS, 100% sRGB, 144Hz, G-SYNC, 24-Zone RGB Backlit, FreeDos - Luna Grey",
        category: "Laptops"
    },
    {
        id: 4,
        name: "Dell Tower ECT1250",
        price: 1999,
        images: [
           desktopDellTower1,
           desktopDellTower2,
           desktopDellTower3,
           desktopDellTower4
        ],
        description: "Desktop Dell Tower Intel Core i5-14400 Processor, 8GB Ram, 512GB SSD M.2, Intel UHD Graphics 730, USB Keyboard & Mouse, Free Dos - Black",
        category: "Desktop tower"
    },
    {
        id: 5,
        name: "ThinkCentre neo 50a 27",
        price: 2649,
        images: [
            desktopLenova1,
            desktopLenova2,
            desktopLenova3,
            desktopLenova4,
            desktopLenova5           
        ],
        description: "Desktop Lenovo ThinkCentre neo 50a 27 All in one Intel core i5-13420H Processor, 8GB Ram, 512GB SSD M.2, Intel UHD Graphics, 27-inch Full HD 1920x1080 Display IPS, Wireless Keyboard + Mouse, Free Dos - Luna Grey",
        category: "Desktop all in one"
    },
    {
        id: 6,
        name: "Dell 27 All-in-One EC27250",
        price: 5299,
        images: [
           desktopDell1,
            desktopDell2,
            desktopDell3,
            desktopDell4,
            desktopDell5,
            desktopDell56
        ],
        description: "Desktop Dell 27 All-in-One Intel Core 7-150U Processor, 16GB Ram, 1TB SSD M.2, NVIDIA GeForce MX570A 2GB GDDR6, 27-inch Touch Full HD Display 1920x1080, Wireless Dell Keyboard & Mouse, Windows 11 Professional - White",
        category: "Desktop all in one"
    },
    {
        id: 7,
        name: " Dell S2721HN",
        price: 549,
        images: [
            monitorDell1,
            monitorDell2,
            monitorDell3,
            monitorDell4,
            monitorDell5,
            monitorDell6
        ],
        description: "Dell S2721HN Computer Monitor 27-Inch Full HD 1920x1080 Resolution, LED Backlight Technology, IPS Panel Type, 75Hz Refresh Rate, 4ms Response Time, HDMI Port - Gray",
        category: "Monitors"
    },
    {
        id: 8,
        name: " HP Color LaserJet Pro MFP 3303sdw",
        price: 1399,
        images: [
            laserjetPrint1,
            laserjetPrint2,
            laserjetPrint3
        ],
        description: "HP Color LaserJet Pro MFP 3303sdw Printer Multi-function, Print, Copy, Scan - 499M6A",
        category: "LaserJet Printer"
    },
    {
        id: 9,
        name: " Lenovo ThinkPad E16 Gen 3",
        price: 4249,
        images: [
            thinkpad_gen3_1,
            thinkpad_gen3_2,
            thinkpad_gen3_3,
            thinkpad_gen3_4,
            thinkpad_gen3_5,
            thinkpad_gen3_6,
            thinkpad_gen3_7
        ],
        description: "Laptop Lenovo ThinkPad E16 Intel Core Ultra 7-255H Processor, 16GB DDR5, 1TB SSD M.2, Integrated Intel Arc 140T GPU, 16-inch Display WUXGA 1920x1200 IPS, Free Dos - Black",
        category: "Laptops"
    }
];
