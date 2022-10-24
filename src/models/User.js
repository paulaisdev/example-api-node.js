import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

class User {
  initSchema() {
    const schema = new Schema({
      name: {
        type: String,
        required: true,
        unique: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true,
      }
    }, { timestamps: true });
    //Now when you try to save a user, the unique validator will check for duplicate database entries and report them just like any other validation error:
    schema.plugin(uniqueValidator);
    mongoose.model("users", schema);
  }

  getInstance() {
    this.initSchema();
    return mongoose.model("users");
  }
}

export default User;
