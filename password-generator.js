const generatPass=require ('generate-password');
function generateRanderPassword(){
const password = generatPass.generate({
    length: 10,
    uppercase: true,
    symbols: true,

})
console.log(password);
}
generateRanderPassword()