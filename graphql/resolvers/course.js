const Course = require('../../models/course');





module.exports = {
   
   createCourse: async (args) => {
        try{
        const existingCourse = await Course.findOne({ name: args.courseInput.name })
            if(existingCourse){
                throw new Error('Course exist already')
            }
      
    
            const course = new Course({
                name: args.courseInput.name 
           
             })
            const result = await course.save();
       
        
            return {...result._doc};
            }catch(err){
                throw err;
            }
        
    }
};
