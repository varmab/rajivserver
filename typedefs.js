let typeDefs=`
  type ConferenceType {
    _id:String
    title:String
  }
  
  type Query {
    allConferences: [ConferenceType]
  }
  type Mutation {
    createConference(title: String!): ConferenceType
    updateConference(_id: ID! title: String!): ConferenceType
    deleteConference(_id: ID!): ConferenceType
  }
`;

module.exports=typeDefs;