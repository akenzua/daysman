const Resume = require('../../models/resume');
const User = require('../../models/user');
const { transformResume } = require('./merge');




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
                // return resume;
                console.log(resume);
                return transformResume(resume);
            })
      
    
        } catch (err){
            throw err;
        }
       
    },
    createResume: async (args, req) => {
        // if(!req.isAuth){
        //     throw new Error('Unauthenticated!');
        // }

            
            const resume = new Resume({
            title: args.resumeInput.title,
            summary: args.resumeInput.summary,
            experience: args.resumeInput.experience.map(({position, organisation, start, end, job }) => ({position, organisation, start, end, job})),
            address: args.resumeInput.address.map(({house, street, town, city, country}) => ({house, street, town, city, country})),
            phone: args.resumeInput.phone.map(({number}) => ({number})),
            socials: args.resumeInput.socials.map(({site, account}) => ({site, account})),
            awards: args.resumeInput.awards.map(({title, issuer, start, expires, description}) => ({title, issuer, start, expires, description})),
            education: args.resumeInput.education.map(({institution, faculty, course, qualification, level}) => ({institution, faculty, course, qualification, level})),
            certification: args.resumeInput.certification.map(({title, issuer, start, expires, expiry, description}) => ({title, issuer, start, expires, expiry, description})),
            interest: args.resumeInput.interest.map(({skill}) => ({skill})),
            creator: req.userId  
        });
        let createdResume;
        try{ 
        const result = await  resume
        .save()
        
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
