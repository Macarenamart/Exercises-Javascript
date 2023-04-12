const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];



//El numero sera par si al dividirlo entre 2, su resto es cero.

const agesPar = ages.filter(age =>age%2 === 0);

console.log(agesPar);