const validator = require ("validator");

var array = [
    "dylan@gmail.com",
    "meli.cooinon@",
    "geraintthomas@wales.we",
    "dylan280399@gmail.com"
]

for (var i=0; i< array.length; i++){
    if(validator.isEmail(array[i])){
        console.log(array[i] + " ok");
    }else{
        console.log(array[i] + " ko");
    }
}