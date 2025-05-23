import mongoose from "mongoose";

const validateMongoDbID = (id) => {
  const isValid = mongoose.Types.ObjectId.isValid(id);
  if (!isValid) throw new Error("This id is not valid or not found");
};

export default validateMongoDbID;
