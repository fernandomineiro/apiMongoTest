module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      journedHours: String,
      dateHors: String,
      published: Boolean
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Date = mongoose.model("date", schema);
  return Date;
};
