const mongoose = require('mongoose');

async function connect(){

    await mongoose.connect('mongodb://localhost:27017/interns');
    const Cat = mongoose.model('Cat', { name: String });

    const kitty = new Cat({ name: 'peppa' });
    kitty.save().then(() => console.log('meow'));
}

connect();