import axios from "axios";

const guardarProveedor=async(body)=>{
    console.log("entro para obtener  ")
    try{
    const response = await axios.post(`http://localhost:8084/proveedores`,body);
    console.log("===>>>> "+response);
    return response;
    }catch(error){
       console.log("------------------------  "+error)
    }
}


const listarProveedores=async()=>{
   try{
     const response = await axios.get(`http://localhost:8084/proveedores/listar`);
     return response;
   }catch(error){
    console.log("Error listando Proveedores: "+error)
   }
}

export const guardarProveedorFachada = (body)=>{
    return guardarProveedor(body);
}

export const listarProveedoresFachada=()=>{
    return listarProveedores();
}