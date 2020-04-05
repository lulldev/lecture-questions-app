import SimpleSchema from "simpl-schema";

export const QuestionsSchema = new SimpleSchema({
  author: {
    type: String,
    max: 200,
  },
  text: {
    type: String,
    label: "Author",
  },
  userId: {
    type: String,
    optional: true,
  },
  publishedAt: {
    type: Date,
    defaultValue: new Date(),
    optional: true,
  },
  viewed: {
    type: Boolean,
    defaultValue: false,
    optional: true,
  },
});

export const Questions = new Mongo.Collection("questions");

Questions.attachSchema(QuestionsSchema);
