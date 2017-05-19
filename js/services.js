angular
  .module("firstApp.firstService", [])
  .factory("firstService", function() {
    // outside of the return block, we can declare private variables and functions

    // we must return an object, everything we return can be accessed externally
    return {
      sayHi: function() {
        return "Hello!"
      },
      sayGoodbye: function() {
        return "Goodbye!"
      },
      getAllUsers: [
        {
          picture: 'http://imgs.xkcd.com/comics/backups.png',
          title: 'Colorado',
          voteTotal: 0,
          author: 'Ned Stark',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          commentsList: [{ name: "Messi", postlet: "great" }, { name: "John", postlet: "totally applies" }],
          date: new Date('08/10/2016')
        },
        {
         picture: 'http://imgs.xkcd.com/comics/suspicion.png',
         title: 'Nevada',
         voteTotal: 0,
         author: 'Parker Posey',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        commentsList: [{ name: "Messi", postlet: "great" }, { name: "John", postlet: "totally applies"}, {name: "Dierdre", postlet: "really funny"}],
         date: new Date('08/10/2016')
        }

        ],
  }
});
