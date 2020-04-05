import { Questions, QuestionsSchema } from "../collection.js";

Meteor.methods({
  "Questions.add"({ author, text }) {
    QuestionsSchema.validate({ author, text });

    Questions.insert({ author, text, userId: Meteor.userId() });
  },
});
