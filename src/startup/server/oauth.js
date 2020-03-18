import { Meteor } from 'meteor/meteor';
import { ServiceConfiguration } from 'meteor/service-configuration';

Meteor.startup(() => {
  const { oauth } = Meteor.settings;

  ServiceConfiguration.configurations.upsert({
    service: 'google'
  }, {
    $set: {
      clientId: oauth.google.appId,
      secret: oauth.google.secret
    }
  });
});