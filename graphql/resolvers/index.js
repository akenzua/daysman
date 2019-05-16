const authResolver = require('./auth');
const resumeResolver = require('./resume');
const institutionResolver = require('./institution');
const facultyResolver = require('./faculty');
const courseResolver = require('./course');
const qualificationResolver = require('./qualification');
const levelResolver = require('./level');
const titleResolver = require('./title');
const issuerResolver = require('./issuer');
const skillResolver = require('./skill');

const rootResolver = {
    ...authResolver,
    ...resumeResolver,
    ...institutionResolver,
    ...facultyResolver,
    ...courseResolver,
    ...qualificationResolver,
    ...levelResolver,
    ...titleResolver,
    ...issuerResolver,
    ...skillResolver 
}

module.exports = rootResolver;