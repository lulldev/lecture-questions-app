import { Accounts } from 'meteor/accounts-base';

Accounts.onLogout(() => {
  window.location.href = '/';
});
