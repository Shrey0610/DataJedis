const mongoose = require('mongoose');

const URL = "mongodb+srv://vrajchaudhary05:SuperData@datajedis.blv5g0d.mongodb.net/?retryWrites=true&w=majority";
mongoose.set('strictQuery', false);

//  Creating a database
mongoose.connect(URL,{
    useUnifiedTopology: true
}).then(()=>{
    console.log("Connection Created45");
}).catch((err)=>{
    console.log("Error: " + err);
});
