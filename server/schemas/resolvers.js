const { Rat, User } = require("../models");

const resolvers = {
  Query: {
    rats: async () => {
      return Rat.find({});
    },
    users: async () => {
      return User.find({});
    }
  },
  Mutation: {
    createRat: async (parent, { name }) => {
      return await Rat.create({ name });
    },

    createUser: async (parent, { name }) => {
      return await User.create({ name })
    },

    addFriend: async (parent, { friendId }, context) => {
        await User.findOneAndUpdate(
          { _id: "6295173ba7682e8b07c9efe4" },
          { $addToSet: { friends: friendId } }
        );

        return
      // throw new AuthenticationError('You need to be logged in!');
    },
  }
};

module.exports = resolvers;
