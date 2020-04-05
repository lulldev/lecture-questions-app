import SimpleSchema from "simpl-schema";

const Schemas = {};

Schemas.Questions = new SimpleSchema({
  author: {
    type: String,
    max: 200,
  },
  text: {
    type: String,
    label: "Author",
  },
  publishedAt: {
    type: Date,
  },
  viewed: {
    type: Boolean,
    defaultValue: false,
    optional: true,
  },
});

export const Questions = new Mongo.Collection("questions");

Questions.attachSchema(Schemas.Questions);
