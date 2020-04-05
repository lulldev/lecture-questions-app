import { Meteor } from "meteor/meteor";
import { Questions } from "../collection.js";

Meteor.publish("Questions.all", () => {
  return Questions.find({}, {
    sort: { publishedAt: -1 }
  });
});
