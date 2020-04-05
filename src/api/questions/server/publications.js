import { Meteor } from "meteor/meteor";
import { Questions } from "../questions.js";

Meteor.publish("Questions.all", () => {
  return Questions.find({}, {
    sort: { publishedAt: -1 }
  });
});
