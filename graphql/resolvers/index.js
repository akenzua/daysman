const bcrypt = require('bcryptjs');

const Resume = require('../../models/resume');
const User = require('../../models/user');

const resumes = async resumeIds => {
    try{
    const resumes = await Resume.find({_id: {$in: resumeIds}})
        resumes.map(resume => {
            return {...resume._doc,
            creator: user.bind(this, resume.creator)
            };
        });
        return resumes;
    } catch (err) {
        throw err;
    }
};

const user =  async userId => {
    try{
        const user = await User.findById(userId)
        
            return {...user._doc, password: null, createdResumes: resumes.bind(this, user._doc.createdResumes)};
    }catch(err){
        throw err;
    }
    
};

module.exports = {
   
    resumes: async () => {
        try {
        const resumes = await Resume.find()
            return resumes
            .map(resume => {
                return {
                    ...resume._doc,
                    creator: user.bind(this, resume._doc.creator)
                };
            })
      
    
        } catch (err){
            throw err;
        }
       
    },
    createResume: async (args) => {
            const resume = new Resume({
            title: args.resumeInput.title,
            summary: args.resumeInput.summary,
            creator:'5cc599c0ffe67e00e4a5ffe8'
        });
        let createdResume;
        try{
        const result = await  resume
        .save()
        
        createdResume = {...result._doc, creator: user.bind(this, result._doc.creator)};

        const creator = await User.findById('5cc599c0ffe67e00e4a5ffe8')
    
            if(!creator){
                throw new Error('User not found')
            }
            creator.createdResumes.push(resume);
            await creator.save();
        
       
            return createdResume;
        } catch(err){
            console.log(err);
            throw err;
        }       
    },

    createUser: async (args) => {
        try{
        const existingUser = await User.findOne({ email: args.userInput.email })
            if(existingUser){
                throw new Error('User exist already')
            }
        const hashedPassword = await bcrypt.hash(args.userInput.password, 12)
       
            const user = new User({
            email: args.userInput.email,
            password: hashedPassword
             })
            const result = await user.save();
       
        
            return {...result._doc, password: null};
            }catch(err){
                throw err;
            }
        
    }
}
