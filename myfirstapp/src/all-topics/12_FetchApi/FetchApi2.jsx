import { useEffect } from "react"


const FetchApi2 = () => {
    useEffect(()=>{
        let controller=new AbortController();
       async function getUsers(){
        try{
          let resp=  await fetch("https://jsonplaceholder.typicode.com/users",{signal:controller.signal});
          let data=await resp.json()
          console.log(data);
        } catch(error){
          if(error.name === "AbortError"){
            console.log("API call cancelled");
          } else{
            console.log("API error");
          }
        }

        }
       
        getUsers();
        return ()=>{
            controller.abort(); //cancels API call in unmounting phase
        }
    },[]);
  return (
    <div>FetchApi2</div>
  )
}

export default FetchApi2