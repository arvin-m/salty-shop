import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
}, {
    timestamps: true
})

userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)

}

// Hash the password before createing new user in datatbase
userSchema.pre('save',async function(next){
    // check for if user password is already there ,when u wanna update the user info we dont wanna hash the pass again
    if(!this.isModified('password')){
        next()
    }


    const salt = await bcrypt.genSalt(10)
    this.password= await bcrypt.hash(this.password,salt)



})

const User = mongoose.model('User', userSchema)
export default User