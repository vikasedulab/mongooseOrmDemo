const mongoose = require('mongoose');

async function connect(){

    await mongoose.connect('mongodb://localhost:27017/interns');
    const Cat = mongoose.model('Cat', { name: String , color : String});

    const peppa = new Cat({ name: 'peppa' });
    const kitty = new Cat({ name: 'kitty' ,color: 'black' });
    peppa.save().then(() => console.log('peppa Created'));
    kitty.save().then(() => console.log('kitty Created'));
}

connect();