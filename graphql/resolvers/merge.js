const Resume = require('../../models/resume');
const User = require('../../models/user');
const Institution = require('../../models/institution');

const transformResume = resume => {
    return {...resume._doc,
        creator: user.bind(this, resume.creator),
        
        };
}

const resumes = async resumeIds => {
    try{
    const resumes = await Resume.find({_id: {$in: resumeIds}})
        return resumes.map(resume => {
            return transformResume(resume);
        });
        
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



// exports.user = user;
// exports.resumes = resumes;
exports.transformResume = transformResume;
