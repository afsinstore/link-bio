const logo = "../assets/logo.jpg";
const ikon = "../assets/ikon.svg";

let settings = {
    profileBio: {
        nama: "AFSIN STORE",
        // ppImg: ikon,
        // ppImg: logo,
        ppImg: "../assets/profile-picture.jpg",
        // pp bebas mau pake mana, asal ganti di assets
        bgImg: "../assets/background.jpg",
        bio: `Afsin Store, adalah penyedia jasa dan berbagai produk digital. Di bawah ini adalah kontak resmi dan sosmed Afsin Store.`
    }
};

// ganti aja asal penulisan lu bnr
settings.WANumber = "6283873123398";
settings.phoneNumber = "6283873123398";
settings.emaill = "afsinstore18@gmail.com";
settings.footer = "Afsin Store";

settings.show_sosmed = true;
settings.show_gc = true;
settings.show_oth = true;
// isi true untuk menampilkan
// isi false untuk menyembunyikan/tidak menampilkan

settings.sosmed = [
    {
        name: "WhatsApp",
        icon: '<i class="fa-brands fa-whatsapp"></i>',
        url: "https://wa.me/6283873123398"
    },
    {
        name: "WhatsApp Bot",
        icon: '<i class="fa-brands fa-whatsapp"></i>',
        url: "https://wa.me/62881027672763"
    },
    {
        name: "Telegram",
        icon: '<i class="fa-brands fa-telegram"></i>',
        url: "https://t.me/afsin_store"
    },
    {
        name: "Instagram",
        icon: '<i class="fa-brands fa-instagram"></i>',
        url: "https://instagram.com/afsin_store"
    },
    {
        name: "TikTok",
        icon: '<i class="fa-brands fa-tiktok"></i>',
        url: "https://tiktok.com/@afsinn_18"
    },
    {
        name: "YouTube",
        icon: '<i class="fa-brands fa-youtube"></i>',
        url: "https://youtube.com/@gamedantechnologi"
    },
    {
        name: "GitHub",
        icon: '<i class="fa-brands fa-github"></i>',
        url: "https://github.com/afsinstore"
    },
    {
        name: "FaceBook",
        icon: '<i class="fa-brands fa-facebook"></i>',
        url: ""
    },
    {
        name: "Discord",
        icon: '<i class="fa-brands fa-discord"></i>',
        url: ""
    },
    {
        name: "LinkedIn",
        icon: '<i class="fa-brands fa-linkedin"></i>',
        url: ""
    }
    // Klo lu gak ada salah satu dari sosmed di atas bree, Lu cukup kosongi ("") aja atau kasih tanda ("_") di url nya bree
];

settings.gc = [
    // bisa lu isi Group&Channel lu
    {
        namaNya: "GROUP JUAL|BELI",
        linkNya: "https://chat.whatsapp.com/IAtyWlNTX0uEHYcee1Lzt0",
        logo: `<img src="${logo}" alt="icon" />`
    },
    {
        namaNya: "GROUP CHAT BOT|AI",
        linkNya: "https://chat.whatsapp.com/BnFv3GODXTmHMFtlvO3uyg",
        logo: `<img src="${logo}" alt="icon" />`
    },
    {
        namaNya: "WhatsApp Community",
        linkNya: "https://chat.whatsapp.com/BVi9g68bQk55WgA05AOGGn",
        logo: `<img src="${logo}" alt="icon" />`
    },
    {
        namaNya: "WhatsApp Channel",
        linkNya: "https://whatsapp.com/channel/0029VaJcJiv3AzNXMOLGBF1F",
        logo: `<img src="${logo}" alt="icon" />`
    },
    {
        namaNya: "Channel for Testimonials",
        linkNya: "https://whatsapp.com/channel/0029Vairxaq2UPB8hO2RPf3x",
        logo: `<img src="${logo}" alt="icon" />`
    }
    // Tambahin aja sepuas lu Bree, copy aja yg di atas itu
];

settings.oth = [
    // other links, serah dah link apa -_-
    {
        myName: "Website Store",
        myLink: "https://afsin.store",
        myIcon: `<img src="${ikon}" alt="icon" />`
    },
    {
        myName: "Catalog Products",
        myLink: "https://wa.me/c/6283873123398",
        myIcon: `<img src="${ikon}" alt="icon" />`
    },
    {
        myName: "Link Tree",
        myLink: "https://linktr.ee/afsin18",
        myIcon: `<img src="${ikon}" alt="icon" />`
    }
];

export default settings;
