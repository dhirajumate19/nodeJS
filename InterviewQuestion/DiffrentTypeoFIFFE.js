
//First Method 
(function IFFE(params) {
    console.log("IFFE 1");
}())

//Second Method
(function IFFE(params) {
    console.log("IFFE 2");
})()

//third method
!function IFFE(params) {
    console.log("IFFE 3");
}()

//forth Metod
+function IFFE(params) {
    console.log("IFFE 4");
}()