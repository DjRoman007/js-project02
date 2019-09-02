/*for (let i = 100; i >= 0; i--) {
    if(i % 2 === 0 && i % 10 !== 0);{
    document.write(i + '<br>');
}
}*/
// let i = 0
// while (i < 100) {
//     document.write(i + '<br>');
//     i++;
// }
// let i = 0;
// do{
//     document.write(i + '<br>');
//     i++;
// } while(i<100);

let products = ['Tesla X', 'Tesla S', 'BMW i3'];
products[3] = 'Tesla Y';
products.push('Chevy Corvette');
products.push('BMW i5');
products[6] = 'nissan gtr';
products[10] = 'Toyota';
console.log(products.length);

// for (let i = 0; i < products.length; i++) {
//     if (products[i] !== undefined){
//     console.log(products[i]);
//     }
// }
products.forEach( el => console.log(el) );
// function printElement(element) {
//     console.log(element);
// }

