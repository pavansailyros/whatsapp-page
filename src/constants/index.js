import { facebook, instagram,  twitter } from "../assets/icons";




export const navlinks = [
    // { href: "#features", label: "Features" },
    { href: "#privacy", label: "Privacy" },
    { href: "#helpcenter", label: "Help Center"},
    { href: "#blog", label: "Blog"},
    { href: "#forbusiness", label: "For Business"},
    { href: "#whatsweb", label: "WhatsApp Web"},
    { href: "#download", label: "Download"}
];

export const footerLinks = [
    {
    title: "What we do",
    links: [
        { name: "Features", link: "/"},
        { name: "Blog", link: "/"},
        { name: "Security", link: "/"},
        { name: "For Business", link: "/"}, 
    ],
},

{
    title: "Who we are",
    links: [
        { name: "About us", link: "/"},
        { name: "Careers", link: "/"},
        { name: "Brand Center", link: "/"},
        { name: "Privacy", link: "/"},
    ],
},

{
    title: " Use WhatsApp ",
    links: [
        { name: "Android", link: "/"},
        { name: "iPhone", link: "/"},
        { name: "Mac/PC", link: "/"},
        { name: "WhatsApp Web", link: "/"},
    ],
},

{
    title: "Need help?",
    links: [
        { name: "Contact us ", link: "/"},
        { name: "Help Center", link: "/"},
        { name: "Download", link: "/"},
        { name: "Security Adivisories", link: "/"},
    ],
},  
];


export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];