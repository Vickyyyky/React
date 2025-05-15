// types of import and export
// 1. default export
// 2. name export

//default export
function add(n1,n2){
   return n1+n2;
}
export default add;

//named export
const multiply=(n1,n2)=>n1*n2;

function useState(val){
    return [val,()=>{}]
}
export{multiply,useState};