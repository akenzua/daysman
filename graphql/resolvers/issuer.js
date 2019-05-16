const Issuer = require('../../models/issuer');





module.exports = {
   
   createIssuer: async (args) => {
        try{
        const existingIssuer = await Issuer.findOne({ name: args.issuerInput.name })
            if(existingIssuer){
                throw new Error('Issuer exist already')
            }
        
    
            const issuer = new Issuer({
                name: args.issuerInput.name 
           
             })
            const result = await issuer.save();
       
        
            return {...result._doc};
            }catch(err){
                throw err;
            }
        
    }
};
