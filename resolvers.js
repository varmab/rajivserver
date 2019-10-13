var gql=require('graphql');
var db=require('./db')

const resolvers = {
  Query: {
    allConferences: () => {
      return new Promise((resolve,reject)=>{
      	db.Conference.find({},(err,conferences)=>{
      		if(err) reject(err);
      		resolve(conferences);
      	})
      })
    }
  },
  Mutation: {
    createConference: (_, { title }) => {
      return new Promise((resolve,reject)=>{
      	var newConference=new db.Conference({
      		title
      	});
      	newConference.save((err,conference)=>{
      		if(err) reject(err);
      		resolve(conference);
      	})
      })
    },
    updateConference: (_, { _id, name}) => {
      const input = { _id, name};
      return input;
    },
    deleteConference: (_, { id }) => {
      const input = { id };
      return input;
    }
  }
};

module.exports=resolvers;
