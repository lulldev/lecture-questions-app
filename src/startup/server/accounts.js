import { Accounts } from 'meteor/accounts-base';

Accounts.onCreateUser((options, user) => {
  user.profile = {};
  if (user.services.hasOwnProperty('google')) {
    user.profile.name = user.services.google.name;
    user.profile.image = user.services.google.picture;
  }
  return user;
});
