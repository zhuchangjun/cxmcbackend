import mongoose from "mongoose";

export const  connectDB = async () =>{

//    await mongoose.connect('{ Add your mongodb URI Here }/food-del').then(()=>console.log("DB Connected"));
const uri = "mongodb+srv://czhu80:123Forward@cluster0.ghnzj.mongodb.net/cxmc";

await mongoose.connect(uri).then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.