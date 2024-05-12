import { households, residents, senior, student } from "./icons"
import { news1, news2, news3, news4 } from "./images"

export const header = {
  title: 'Barangay 413',
  subtitle: 'Zone 42',
  phoneNum: '+63 9214045698',
  email: 'barangay413zone42@gmail.com'
}

export const navLinks = [
  {
    id: 0,
    name: 'Home',
    path: '/'
  },
  {
    id: 1,
    name: 'About us',
    path: '/about'
  },
  {
    id: 2,
    name: 'Document Request',
    path: '/request'
  },
  {
    id: 3,
    name: 'Projects & Activity',
    path: '/proj-act'
  },
  {
    id: 4,
    name: 'Feedback',
    path: '/feedback'
  },
  {
    id: 5,
    name: 'Helpline',
    path: '/helpline'
  },
]

export const info = [
  {
    id: 0,
    name: "Residents",
    dataNum: "1024",
    icon: residents
  },
  {
    id: 1,
    name: "Households",
    dataNum: "103",
    icon: households
  },
  {
    id: 2,
    name: "Senior Citizens",
    dataNum: "302",
    icon: senior
  },
  {
    id: 3,
    name: "Students",
    dataNum: "360",
    icon: student
  },
]

export const news = [
  {
    id: 0,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, placeat illum. Fugit.",
    image: news1,
    date: 'February 12, 2024'
  },
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, placeat illum. Fugit.",
    image: news2,
    date: 'February 12, 2024'
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, placeat illum. Fugit.",
    image: news3,
    date: 'February 12, 2024'
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, placeat illum. Fugit.",
    image: news4,
    date: 'February 12, 2024'
  },
]

export const announcements = [
  {
    id: 0,
    title: "Free Dental Check-up",
    date: "March 24, 2024"
  },
  {
    id: 1,
    title: "COVID-19 VACCINE",
    date: "February 12, 2024"
  },
  {
    id: 2,
    title: "COMELEC Registraion",
    date: "February 9, 2024"
  },
  {
    id: 3,
    title: "Single Parents Seminar",
    date: "Janurary 30, 2024"
  },
]