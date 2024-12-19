//HANDLE ERRORS IN CALLBACKS

function CheckPassword(password,callback){
    if(typeof password !== 'string'){
        callback(new Error('Password must be a string'));
        return;
    } else {
        if(password.length > 10){
            callback(null, 'Password is valid');
        } else {
            callback(new Error('Password is too short'));
        }
    }
}

CheckPassword(42, function(err, result){
    if(err){
        console.log('Error: ', err.message);
    } else {
        console.log(result);
    }
});

CheckPassword('mysecurepassword', function(err, result){
    if(err){
        console.log('Error: ', err.message);
    } else {
        console.log(result);
    }
});

CheckPassword('short', function(err, result){
    if(err){
        console.log('Error: ', err.message);
    } else {
        console.log(result);
    }
});
