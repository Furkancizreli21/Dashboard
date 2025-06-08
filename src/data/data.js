import {
  FaCcVisa,
  FaBehance,
  FaSpotify,
  FaGoogle,
  FaApple,
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
  FaSnapchatGhost,
} from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
export const fakemail = [
  {
    id: 1,
    title: "Ayşe Yılmaz",
    description: "Please review the attached document before the meeting.",
    date: "9:15 AM",
  },
  {
    id: 2,

    title: "John Smith",
    description: "The project timeline has been updated. Check the link.",
    date: "10:42 AM",
  },
  {
    id: 3,
    title: "Fatma Kaya",
    description: "Reminder: Your subscription is about to expire.",
    date: "11:30 AM",
  },
  {
    id: 4,
    title: "James Brown",
    description: "New designs are ready for feedback!",
    date: "1:05 PM",
  },
  {
    id: 5,
    title: "Elif Demir",
    description: "Meeting rescheduled to next Monday at 3 PM.",
    date: "2:20 PM",
  },
  {
    id: 6,
    title: "Emily Johnson",
    description: "Can you send me the final draft by tomorrow?",
    date: "3:41 PM",
  },
  {
    id: 7,
    title: "Ali Çetin",
    description: "Invoice for your recent purchase is attached.",
    date: "4:17 PM",
  },
  {
    id: 8,
    title: "Merve Arslan",
    description: "Don't forget our call at 5 PM today.",
    date: "4:55 PM",
  },
];

export const transactions = [
  {
    date: "10 Apr, 2024",
    time: "9:20",
    source: "Paypal",
    plan: "Business Plan",
    status: "Paid",
    amount: "$5938",
    icon: FaCcVisa,
    iconClass: "text-blue-400",
  },
  {
    date: "11 Apr, 2024",
    time: "10:30",
    source: "Visa",
    plan: "Gold Card",
    status: "Paid",
    amount: "$1280",
    icon: FaCcVisa,
    iconClass: "text-blue-600",
  },
  {
    date: "12 Apr, 2024",
    time: "14:15",
    source: "Behance",
    plan: "Pro Plan",
    status: "Pending",
    amount: "$350",
    icon: FaBehance,
    iconClass: "text-blue-500",
  },
  {
    date: "13 Apr, 2024",
    time: "16:50",
    source: "Spotify",
    plan: "Premium",
    status: "Paid",
    amount: "$15",
    icon: FaSpotify,
    iconClass: "text-green-500",
  },
  {
    date: "14 Apr, 2024",
    time: "11:00",
    source: "Google",
    plan: "Workspace",
    status: "Paid",
    amount: "$120",
    icon: FaGoogle,
    iconClass: "text-red-500",
  },
  {
    date: "15 Apr, 2024",
    time: "12:45",
    source: "Apple",
    plan: "Developer Account",
    status: "Cancelled",
    amount: "$99",
    icon: FaApple,
    iconClass: "text-gray-500",
  },
];

export const socialrenevue = [
  {
    icon: FaFacebook,
    name: "Facebook",
    type: "Social Media",
    revenue: "45044",
    profit: "+21.4%",
  },
  {
    icon: FaTwitter,
    name: "Twitter",
    type: "Social Media",
    revenue: "23038",
    profit: "+51.5%",
  },
  {
    icon: AiFillTikTok,
    name: "Tiktok",
    type: "Social Media",
    revenue: "82731",
    profit: "+16.9%",
  },
  {
    icon: FaInstagramSquare,
    name: "Instagram",
    type: "Social Media",
    revenue: "75823",
    profit: "+26.5%",
  },
  {
    icon: FaSnapchatGhost,
    name: "Snapchat",
    type: "Social Media",
    revenue: "39283",
    profit: "+14.2%",
  },
];

export const ordersData = [
  { value: 100 },
  { value: 240 },
  { value: 580 },
  { value: 448 },
  { value: 350 },
  { value: 545 },
];

export const salesData = [
  { value: 100 },
  { value: 400 },
  { value: 200 },
  { value: 60 },
  { value: 210 },
  { value: 140 },
];

export const visitData = [
  { value: 200 },
  { value: 700 },
  { value: 400 },
  { value: 960 },
  { value: 210 },
  { value: 440 },
];

export default fakemail;
