import validator from 'validator'


//API to register user

const registerUser = async (req, res) => {

    try{

        const { name, email, password} = req.body

        if( !name || !email || !password ) {
            return res.json({success: false, message:"Missing Deatils"})
        }

        if(!validator.isEmail(email)){
            return res.json({success: false, message:"Enter a valid email"})
        }

        if (){

        }
    }
    

         }catch(error){


         

}

