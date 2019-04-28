const { buildSchema } = require('graphql');

module.exports = buildSchema(`
        type Resume {
            _id: ID!
            title: String!
            summary: String!
            creator: User!
        }

        type User {
            _id: ID!
            email: String!
            password: String
            createdResumes: [Resume!]!
        }

        input ResumeInput {
            title: String!
            summary: String!
        }

        input UserInput {
            email: String!
            password: String!
        }

        type RootQuery {
            resumes: [Resume!]!
        }
        type RootMutation {
            createResume(resumeInput: ResumeInput): Resume
            createUser(userInput: UserInput): User
        }
        schema {
            query: RootQuery
            mutation: RootMutation
        }
    `);
    