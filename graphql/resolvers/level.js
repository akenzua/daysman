const Level = require('../../models/level');





module.exports = {
   
   createLevel: async (args) => {
        try{
        const existingLevel = await Level.findOne({ name: args.levelInput.name })
            if(existingLevel){
                throw new Error('Level exist already')
            }
        
    
            const level = new Level({
                name: args.levelInput.name 
           
             })
            const result = await level.save();
       
        
            return {...result._doc};
            }catch(err){
                throw err;
            }
        
    }
};
