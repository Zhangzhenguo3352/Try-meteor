import { Meteor } from 'meteor/meteor';
Meteor.methods({
  'update/user': function(user) {
    let info = {
      avatar_url: user.avatar_url,
      followers: user.followers,
      login: user.login,
      created_at: user.created_at
    };
    Meteor.users.update(this.userId, {$set: info});
  }
});