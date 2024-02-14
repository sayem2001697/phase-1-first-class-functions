

function receivesAFunction (callBack){
    callBack();
}

function returnsANamedFunction (){
    return function named(){
        console.log ("i love rim");
    }
}

function returnsAnAnonymousFunction (){
    return function(){
        console.log ("i hate priyoshi");
    }
}