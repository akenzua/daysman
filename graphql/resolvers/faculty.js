const Faculty = require('../../models/faculty');





module.exports = {
   
   createFaculty: async (args) => {
        try{
        const existingFaculty = await Faculty.findOne({ name: args.facultyInput.name })
            if(existingFaculty){
                throw new Error('Faculty exist already')
            }
        
    
            const faculty = new Faculty({
                name: args.facultyInput.name 
           
             })
            const result = await faculty.save();
       
        
            return {...result._doc};
            }catch(err){
                throw err;
            }
        
    }
};
