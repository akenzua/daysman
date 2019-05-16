const Skill = require('../../models/skill');





module.exports = {
   
   createSkill: async (args) => {
        try{
        const existingSkill = await Skill.findOne({ name: args.skillInput.name })
            if(existingSkill){
                throw new Error('Skill exist already')
            }
        
    
            const skill = new Skill({
                name: args.skillInput.name 
           
             })
            const result = await skill.save();
       
        
            return {...result._doc};
            }catch(err){
                throw err;
            }
        
    }
};
