import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Must Ber',
    email: 'mb@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Ree Ben',
    email: 'rb@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
