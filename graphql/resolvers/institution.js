const Institution = require('../../models/institution');





module.exports = {
   
   createInstitution: async (args) => {
        try{
        const existingInstitution = await Institution.findOne({ name: args.institutionInput.name })
            if(existingInstitution){
                throw new Error('Institution exist already')
            }
        
    
            const institution = new Institution({
                name: args.institutionInput.name 
           
             })
            const result = await institution.save();
       
        
            return {...result._doc};
            }catch(err){
                throw err;
            }
        
    }
};
