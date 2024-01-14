import axios from "axios";
export const apicallViaGet= async ()=>{
    try{
     const url="http://localhost:9000/home"
     const res= await axios.get(url,{ 'Authorization': 'ImAuthPerson' })
     console.log(res);
    }catch(e){console.log(e);}
 }