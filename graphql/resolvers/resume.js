const Resume = require('../../models/resume');
const User = require('../../models/user');
const { transformResume, resumeOne } = require('./merge');




module.exports = {
   
    resumes: async () => {
        
        try {
        const resumes = await Resume.find()
         .populate('education.institution')
         .populate('education.faculty')
         .populate('education.course')
         .populate('education.qualification')
         .populate('education.level')
         .populate('certification.title')
         .populate('certification.issuer')
         .populate('interest.skill')
            return resumes 
            
            .map(resume => {
                
                return transformResume(resume);
            })
      
    
        } catch (err){
            throw err;
        }
       
    },

    resume: async (args) => {

        try{
            const resume = await Resume.findById(args.id)
         .populate('education.institution')
         .populate('education.faculty')
         .populate('education.course')
         .populate('education.qualification')
         .populate('education.level')
         .populate('certification.title')
         .populate('certification.issuer')
         .populate('interest.skill')
            return transformResume(resume);

        }catch (err){
            throw err;
        }
        
    },
    createResume: async (args, req) => {
        // const authHeader = req.get('authorization')
        // console.log(authHeader)
        if(!req.isAuth){
            throw new Error('Unauthenticated!');
        }

            const resume = new Resume({
            title: args.title,
            summary: args.summary,
            experience: args.experience.map(({position, organisation, start, end, job }) => ({position, organisation, start, end, job})),
            address: args.address.map(({house, street, town, city, country}) => ({house, street, town, city, country})),
            phone: args.phone.map(({number}) => ({number})),
            socials: args.socials.map(({site, account}) => ({site, account})),
            awards: args.awards.map(({title, issuer, start, expires, description}) => ({title, issuer, start, expires, description})),
            education: args.education.map(({institution, faculty, course, qualification, level, start, end}) => ({institution, faculty, course, qualification, level, start, end})),
            certification: args.certification.map(({title, issuer, start, expires, expiry, description}) => ({title, issuer, start, expires, expiry, description})),
            interest: args.interest.map(({skill}) => ({skill})),
            creator: req.userId  
        });
        let createdResume;
        try{ 
        const result = await  resume
        .save()
        let id = resume.id
        createdResume = transformResume(result);

        const creator = await User.findById(req.userId)
    
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
    }
};
