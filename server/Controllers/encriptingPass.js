const mongoose = require('mongoose');
const User = mongoose.model('User');


const encriptingPass = async ( req, res )=>{
    const { email, password } = req.body;
    console.log("clg 1", email, password);

    if( ! email || ! password ){
        console.log("clg 2 sin email o pass");
        return res.status(401).send({ message:"must provide email or password"});
    } 
        

    const user = await User.findOne({email:email})
    console.log("ussser",user)
    if( ! user ) {
        console.log("clg3 usuario no existe")
        return res.status(401).send({ message:"must login with an existing user"});
    }
    try {
        await user.comparePassword(password);
        res.send(user);
    } catch (error) {
        return res.status(401).send({ message:"sds"});
    }
}

module.exports = {
    encriptingPass,
}