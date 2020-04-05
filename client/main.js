import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { routes } from 'startup/routes';

import 'startup/client';

Meteor.startup(() => {
  render(routes(), document.getElementById('root'));
});
