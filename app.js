require('dotenv').config();

const user = require('./queries/user');

async function main (){
    try {

        const getdata = await user.get();
        console.log(getdata);

        // const res = await user.create('hadi', 'hadi@gmail.com', 'Password123');

        // const res = await user.delete(2);
        // const res = await user.update (5, 'joyo', 'andi@gmail.com');
        // console.log(res);

    }catch(err){
        if(err.message){
            console.log(err.message);
            return;
        }
        console.log(err);
    }
}
main()