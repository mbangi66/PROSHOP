import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'M B',
    email: 'mb@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'R B',
    email: 'rb@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
