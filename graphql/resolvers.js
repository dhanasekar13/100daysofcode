const { User } = require('../model/user')

const resolver = {
    Query :{
        getUsers:async () => await User.find({}).exec(),
        getUser:async(_,args)=>{
            try{
                console.log(args,'-----the argument---')
                let response = await User.find({email:args.email})
                console.log(response)
                return response
            }catch(e){
                return e.message
            }
        }
    },
    Mutation:{
        addUser:async(_, args)=> {
            try{
                let response = await User.create(args)
                return response
            }catch(e){
                return e.message
            }
        },
      
    }
}

module.exports = resolver