const Qualification = require('../../models/qualification');





module.exports = {
   
   createQualification: async (args) => {
        try{
        const existingQualification = await Qualification.findOne({ name: args.qualificationInput.name })
            if(existingQualification){
                throw new Error('Qualification exist already')
            }
        
    
            const qualification = new Qualification({
                name: args.qualificationInput.name 
           
             })
            const result = await qualification.save();
       
        
            return {...result._doc};
            }catch(err){
                throw err;
            }
        
    }
};
