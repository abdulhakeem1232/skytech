import thinkpadImage from '../assets/thinkpad_e16.png';
import thinkpad1 from '../assets/Thinkpad_e16_1.jpg';
import thinkpad2 from '../assets/thinkpad_e16_2.jpg';
import thinkpad3 from '../assets/thinkpad_e16_3.jpg';
import thinkpad4 from '../assets/thinkpad_e16_4.jpg';
import hp1 from '../assets/hp250r_1.jpg';
import hp2 from '../assets/hp250r_2.jpg';
import hp3 from '../assets/hp250r_3.jpg';
import hp4 from '../assets/hp250r_4.jpg';
import hp5 from '../assets/hp250r_5.jpg';

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
        name: "Professional Camera Kit",
        price: 1299,
        images: [
            "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80",
            "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&q=80"
        ],
        description: "Capture stunning photos and videos with this professional DSLR camera kit including two lenses and accessories.",
        category: "Photography"
    },
    {
        id: 4,
        name: "Gaming Laptop Pro",
        price: 1499,
        images: [
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80",
            "https://images.unsplash.com/photo-1593642702749-b7d2a81639be?w=500&q=80"
        ],
        description: "High-performance gaming laptop with latest graphics card, fast refresh rate display, and RGB keyboard.",
        category: "Computers"
    },
    {
        id: 5,
        name: "Designer Sunglasses",
        price: 159,
        images: [
            "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80",
            "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80"
        ],
        description: "Stylish and protective sunglasses with UV400 lenses and durable frames for everyday wear.",
        category: "Fashion"
    },
    {
        id: 6,
        name: "Minimalist Backpack",
        price: 89,
        images: [
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80"
        ],
        description: "Water-resistant minimalist backpack with laptop compartment and comfortable padded straps.",
        category: "Accessories"
    },
    {
        id: 7,
        name: "Wireless Earbuds",
        price: 129,
        images: [
            "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80",
            "https://images.unsplash.com/photo-1572569028738-411a1971d6aa?w=500&q=80"
        ],
        description: "True wireless earbuds with crystal clear sound, touch controls, and compact charging case.",
        category: "Audio"
    },
    {
        id: 8,
        name: "Mechanical Keyboard",
        price: 149,
        images: [
            "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80",
            "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500&q=80"
        ],
        description: "Tactile mechanical keyboard with customizable RGB lighting and hot-swappable switches.",
        category: "Computers"
    },
    {
        id: 9,
        name: "Smart Home Hub",
        price: 129,
        images: [
            "https://images.unsplash.com/photo-1558002038-10915571270a?w=500&q=80",
            "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500&q=80"
        ],
        description: "Control all your smart devices from one central hub with voice control and automation features.",
        category: "Smart Home"
    },
    {
        id: 10,
        name: "Portable Bluetooth Speaker",
        price: 79,
        images: [
            "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80",
            "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&q=80"
        ],
        description: "Waterproof portable speaker with deep bass and 20-hour battery life for outdoor adventures.",
        category: "Audio"
    },
    {
        id: 11,
        name: "Analog Classic Watch",
        price: 249,
        images: [
            "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&q=80",
            "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=500&q=80"
        ],
        description: "Timeless analog watch with genuine leather strap and reliable quartz movement.",
        category: "Fashion"
    },
    {
        id: 12,
        name: "Ergonomic Office Chair",
        price: 399,
        images: [
            "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=500&q=80",
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&q=80"
        ],
        description: "Premium ergonomic chair designed for all-day comfort with adjustable lumbar support and mesh back.",
        category: "Furniture"
    },
    {
        id: 13,
        name: "Running Shoes",
        price: 129,
        images: [
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
            "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&q=80"
        ],
        description: "Lightweight running shoes with responsive cushioning and breathable mesh upper.",
        category: "Fashion"
    },
    {
        id: 14,
        name: "Ceramic Coffee Set",
        price: 69,
        images: [
            "https://images.unsplash.com/photo-1578357078586-491e6fb5b53e?w=500&q=80",
            "https://images.unsplash.com/photo-1517260739337-6799d2ff1355?w=500&q=80"
        ],
        description: "Handcrafted ceramic coffee set including pot and four cups, perfect for modern kitchens.",
        category: "Home"
    },
    {
        id: 15,
        name: "Drawing Tablet",
        price: 349,
        images: [
            "https://images.unsplash.com/photo-1563852077-40e1376ce566?w=500&q=80",
            "https://images.unsplash.com/photo-1524350876685-274059332603?w=500&q=80"
        ],
        description: "Professional drawing tablet with pressure-sensitive stylus and customizable express keys.",
        category: "Computers"
    },
    {
        id: 16,
        name: "Drone with 4K Camera",
        price: 799,
        images: [
            "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=500&q=80",
            "https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=500&q=80"
        ],
        description: "Compact drone capable of shooting 4K video with intelligent flight modes and obstacle avoidance.",
        category: "Photography"
    },
    {
        id: 17,
        name: "Electric Toothbrush",
        price: 89,
        images: [
            "https://images.unsplash.com/photo-1559599189-fe84fea4eb8b?w=500&q=80",
            "https://images.unsplash.com/photo-1621251941654-72996962fb4a?w=500&q=80"
        ],
        description: "Smart electric toothbrush with multiple cleaning modes and pressure sensor for optimal oral care.",
        category: "Health"
    },
    {
        id: 18,
        name: "Plant Stand",
        price: 49,
        images: [
            "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&q=80",
            "https://images.unsplash.com/photo-1463320726281-696a413703b6?w=500&q=80"
        ],
        description: "Modern mid-century style plant stand to showcase your indoor plants elegantly.",
        category: "Home"
    },
    {
        id: 19,
        name: "Yoga Mat",
        price: 39,
        images: [
            "https://images.unsplash.com/photo-1592432678010-c59121c2f987?w=500&q=80",
            "https://images.unsplash.com/photo-1518609571773-39b7d303a87b?w=500&q=80"
        ],
        description: "Eco-friendly non-slip yoga mat with alignment lines, suitable for all types of yoga and pilates.",
        category: "Fitness"
    },
    {
        id: 20,
        name: "Lenovo ThinkPad E16 Gen 1",
        price: 4999,
        images: [
            thinkpadImage,
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80"
        ],
        description: "Laptop Lenovo ThinkPad E16 Intel Core Ultra 7-155H Processor, 16GB DDR5, 512GB SSD M.2, Intel Arc Graphics, 16-inch Display WUXGA 1920x1200 IPS.",
        category: "Computers"
    }
];
