const { buildSchema } = require('graphql');

module.exports = buildSchema(`
        type Resume {
            _id: ID!
            title: String!
            summary: String!
            address: [Address!]!
            experience: [Experience!]!
            phone: [Phone!]!
            socials: [Socials!]
            awards: [Awards!]
            education: [Education!]!
            certification: [Certification!]
            interest: [Interest!]
            creator: User!
        }

        type Skill {
            _id: ID!
            name: String!
        }


        type Interest {
            _id: ID!
            skill: Skill!
        }

        type Institution {
            _id: ID!
            name: String!
        }

        type Faculty {
            _id: ID!
            name: String!
        }

        type Course {
            _id: ID!
            name: String!
        }

        type Qualification {
            _id: ID!
            name: String!
        }

        type Level {
            _id: ID!
            name: String!
        }

        type Education {
            _id: ID!
            institution: Institution!
            faculty: Faculty!
            course: Course!
            qualification: Qualification!
            level: Level!
        }

        type Title {
            _id: ID!
            name: String!
        }

        type Issuer {
            _id: ID!
            name: String!
        }

        type Certification {
            _id: ID!
            title: Title
            issuer: Issuer
            start: String
            expires: Boolean
            expiry: String
            description: String
        }

        type Phone {
            _id: ID!
            number: String!
        }

        type Socials {
            _id: ID!
            site: String!
            account: String!
        }

        type Awards {
            _id: ID!
            title: String!
            issuer: String!
            start: String!
            expires: String
            description: String!
        }

        type Job {
            _id: ID!
            description: String!
        }

        type Address {
            _id: ID!
            house: String!
            street: String!
            town: String!
            city: String!
            country: String!
        }

        type Experience {
            _id: ID!
            position: String!
            organisation: String!
            start: String!
            end: String!
            job: [Job!]!
        }

        

        type User {
            _id: ID!
            email: String!
            password: String
            createdResumes: [Resume!]!
        }

        type AuthData {
            userId: ID!
            token: String!
            tokenExpiration: Int!
        }

        input JobInput {
            description: String!
        }

        input ExperienceInput {
            position: String!
            organisation: String!
            start: String!
            end: String!
            job: [JobInput!]!
        }

        input AddressInput {
            house: String!
            street: String!
            town: String!
            city: String!
            country: String!
        }

        input PhoneInput {
            number: String!
        }

        input SocialInput{
            site: String!
            account: String!
        }

        input AwardsInput {
            title: String!
            issuer: String!
            start: String!
            expires: String
            description: String!
        }

        input InstitutionInput {
            name: String!
        }

        input FacultyInput {
            name: String!
        }

        input CourseInput {
            name: String!
        }

        input QualificationInput {
            name: String!
        }

        input LevelInput {
            name: String!
        }

        input EducationInput {
            institution: String!
            faculty: String!
            course: String!
            qualification: String!
            level: String!
        }

        input IssuerInput {
            name: String!
        }

        input TitleInput {
            name: String!
        }

        input CertificationInput {
            title: String!
            issuer: String!
            start: String!
            expires: Boolean!
            expiry: String
            description: String!
        }

        input SkillInput {
            name: String!
        }

        input InterestInput {
            skill: String!
        }

        input ResumeInput {
            title: String!
            summary: String!
            experience: [ExperienceInput!]!
            address: [AddressInput!]!
            phone: [PhoneInput!]!
            socials: [SocialInput!]
            awards: [AwardsInput!]
            education: [EducationInput!]!
            certification: [CertificationInput!]
            interest: [InterestInput!]
        }

        input UserInput {
            email: String!
            password: String!
        }

        type RootQuery {
            resumes: [Resume!]!
            login(email: String!, password: String!): AuthData
        }
        type RootMutation {
            createResume(
                title: String!
            summary: String!
            experience: [ExperienceInput!]!
            address: [AddressInput!]!
            phone: [PhoneInput!]!
            socials: [SocialInput!]
            awards: [AwardsInput!]
            education: [EducationInput!]!
            certification: [CertificationInput!]
            interest: [InterestInput!]
            ): Resume
            createUser(userInput: UserInput): User
            createInstitution(institutionInput: InstitutionInput): Institution
            createFaculty(facultyInput: FacultyInput): Faculty
            createCourse(courseInput: CourseInput): Course
            createQualification(qualificationInput: QualificationInput): Qualification
            createLevel(levelInput: LevelInput): Level
            createTitle(titleInput: TitleInput): Title
            createIssuer(issuerInput: IssuerInput): Issuer
            createSkill(skillInput: SkillInput): Skill
            login(email: String!, password: String!): AuthData
        }
        schema {
            query: RootQuery
            mutation: RootMutation
        }
    `);
    