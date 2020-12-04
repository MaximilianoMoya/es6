require('dotenv').config();

const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;

const express = require('express');
const app = express();



const userData = (name, email, active) => {
    
    //console.log(`User ${name}, email: ${email}, status: ${active}`);

    const status = active === 1 ? 'Active' : 'Deactivated';
    console.log(`User ${name}, email: ${email}, status: ${status}`);
}

userData('Paola Santillan', 'chxnge@hotmail.com', 1);
userData('Julián Casablancas', 'psantillan@indec.gob.ar', 0);


// REST OPERATOR
//...data array with data
/*const userDataES6 = (...data) => {
    //console.log(data);
    data.map(info => console.log(info));
}
//userDataES6('Paola Santillan', 'chxnge@hotmail.com', 1,18,"asads");

//SPREAD OPERATOR
const arraytouserdataes6 = ['Paola Santillan', 'chxnge@hotmail.com', 1];
userDataES6(...arraytouserdataes6);*/


/********************EXAMPLE***************************/
/*const userDataES6 = (...data) => {
    //data.map(info => console.log(info));
    data.map(info => {
        const status = info.active === 1 ? 'Active' : 'Deactivated';
        console.log(`User ${info.name}, email: ${info.email}, status: ${status}`);
    });
}

const arraytouserdataes6json = [{
    "name": "Paola Santillan",
    "email": "chxnge@hotmail.com",
    "active": 1
},{
    "name": "Paola Santillan",
    "email": "chxnge@hotmail.com",
    "active": 0
}];

userDataES6(...arraytouserdataes6json);*/


//MAP Y FOREACH
//Ambas sirven para trabajar con arrays, para iterar sobre ellos, es decir operar sobre cada elemento
/*const userDataMapForeach = (...data) => {
    //data.map(info => console.log(info));
    //data.forEach(info => console.log(info));

    //Foreach no me permite guardar el valor de lo que hice para usarlo después
    //const result_foreach = data.forEach(info => info+'/');
    //console.log(result_foreach);

    //Map si me permite guardar el valor de lo que se trabajó
    //Map devuelve un nuevo array, no es el mismo del inicio
    //Mayor tiempo de ejecución
    const result_map = data.map(info => info+'/');
    console.log(result_map);
}
userDataMapForeach('Paola Santillan', 'chxnge@hotmail.com', 1);*/



//ARROW FUNCTIONS
const serverWorks = () => console.log(`Server works`);
//serverWorks();

app.listen(PORT, () => console.log(`Started at port ${PORT} in ${NODE_ENV} environment`));
/*app.listen(PORT, () => {
    console.log(`Started at port ${PORT} in ${NODE_ENV} environment`);
});*/
//app.listen(PORT, () => serverWorks());
