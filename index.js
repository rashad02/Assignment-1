function customPrint(n, message) {
    //  Add your code here
    if(n > 0) {
        console.log(message);
        n -= 1;
        customPrint(n,message);
    }
    return;
}

customPrint(5, "Hello, World!");