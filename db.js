import mongoose from 'mongoose';

mongoose.set("strictQuery", false);

export default async function connect() {

    await mongoose.connect("mongodb+srv://leebag7157:0V1uO94FbUXZKjGG@volunteerdb.184clwv.mongodb.net/VolunteerDB"/*process.env.CONN_STRING*/);
};
