import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Mazharul Islam",
    email: "mazharul@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "Samiul Haq",
    email: "samiul@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
];


export default users;