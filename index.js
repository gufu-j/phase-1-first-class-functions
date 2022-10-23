function receivesAFunction(dg){
    return (dg());

}
receivesAFunction( function (){return "Your order should be ready within few minutes."})
// First: notice that function() {""} is the lone argument to our incovation of receivesAFunction 
// Second: the receivesAFunction stored the passed-in function in the local dg variable and then 
// invoked the callback function
// Third: the invoked callback retuned its long string, which was " return (dg());"
// in the receivesAFunction  



 
function returnsANamedFunction(){
   return function myFunction(someParameter) {
        // Do something
    }
}

function returnsAnAnonymousFunction(){
   return  (function () {
        //...
     });
}



