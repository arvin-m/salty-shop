import bcrypt from 'bcryptjs'

const users =[
    {
        name:'Admin User',
        email:'admin@example.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name:'Alan Dj',
        email:'alan@example.com',
        password:bcrypt.hashSync('123456',10),
    },
    {
        name:'Scott Gus',
        email:'scott@example.com',
        password:bcrypt.hashSync('123456',10),
    },

]
export default users