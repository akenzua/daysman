const Title = require('../../models/title');





module.exports = {
   
   createTitle: async (args) => {
        try{
        const existingTitle = await Title.findOne({ name: args.titleInput.name })
            if(existingTitle){
                throw new Error('Title exist already')
            }
      
    
            const title = new Title({
                name: args.titleInput.name 
           
             })
            const result = await title.save();
       
        
            return {...result._doc};
            }catch(err){
                throw err;
            }
        
    }
};
