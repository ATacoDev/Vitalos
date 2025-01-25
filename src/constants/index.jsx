import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

import Diel from '../assets/Diel.png';
import Domm from '../assets/Domm.png';
import Oro from '../assets/Oro.png';
import Knight from '../assets/Knight.png';

export const navItems = [
  { label: "Features", href: "#features" },
  { label: "Characters", href: "#characters" },
  { label: "Pricing", href: "#pricing" },
];

export const champTextImage = [
  {
    name: "D'iel of the Twelth Sea", // Added name
    image: Diel, // Resolved URL for Image 1
    bulletPoints: [
      "He is said to have single-handedly taken down a leviathan by launching himself into its mouth, and blowing it up from the inside with barrels of gunpowder!",
      "A legendary pirate who is apart of the Opportunist class",
    ],
  },
  {
    name: "Domm The Soul Engine", // Added name
    image: Domm, // Resolved URL for Image 2
    bulletPoints: [
      "A champion rising from the city of souls. Though ferocious, at his core he is a loving guard to the people of his city",
      "A furious protector who is part of the Stalwart class",
    ],
  },
  {
    name: "Oro of the Wind Fist", // Added name
    image: Oro, // Resolved URL for Image 3
    bulletPoints: [
      "She uses the wind to make fast and decisive strikes against her opponents. She will leave any opponent reeling from her onslaught of devistating blows",
      "A prodigy from the Wind Fist Dojo who is part of the Aggressor class",
    ],
  },
  {
    name: "The Nameless Knight", // Added name
    image: Knight, // Resolved URL for Image 3
    bulletPoints: [
      "No one knows much about this mysterious figure. Some consider the fog that emits from them comforting and protecting, while others see it as haunting...",
      "A bound soul who is apart of the Adept class",
    ],
  },
];




export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Drag-and-Drop Interface",
    description:
      "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
  },
  {
    icon: <ShieldHalf />,
    text: "Built-in Templates",
    description:
      "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Preview",
    description:
      "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
  },
  {
    icon: <PlugZap />,
    text: "Collaboration Tools",
    description:
      "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Vitalos",
    price: "$30",
    features: [
      "Access to the base game",
      "Enjoy classic Vitalos!"
    ],
  },
  {
    title: "Vitalos+",
    price: "$40",
    features: [
      "All features of Vitalos",
      "Added champions and gameplay!"
    ],
  },
  {
    title: "Founder",
    price: "$70",
    features: [
      "All features of Vitalos+",
      "Special Founder game box",
    ],
  },
];

export const resourcesLinks = [
  { href: "https://www.instagram.com/vitalosgame/", text: "Instagram" },
  { href: "https://kadenkigames.godaddysites.com/", text: "Old Website" },
  { href: "https://github.com/ATacoDev", text: "Site Developer" },
  // { href: "#", text: "Tutorials" },
  // { href: "#", text: "API Reference" },
  // { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "<In Development>>" },
  // { href: "#", text: "Supported Devices" },
  // { href: "#", text: "System Requirements" },
  // { href: "#", text: "Downloads" },
  // { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "<In Development>" },
  // { href: "#", text: "Meetups" },
  // { href: "#", text: "Conferences" },
  // { href: "#", text: "Hackathons" },
  // { href: "#", text: "Jobs" },
];
