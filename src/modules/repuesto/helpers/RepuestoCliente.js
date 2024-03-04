import axios from "axios";

const principalPath = `http://localhost:8084/repuestos`;

const guardarRepuestos=async(lista,idProveedor)=>{
    const param={nomEmpresaProveedor:idProveedor};
      try{
         const response = await axios.post(principalPath,lista,{    
         params:param   
         });
         return response;
      }catch(error){
         console.log("error en guardar lista de repuestos: "+error);
      }
}

const listarRepuestos = async()=>{
    try{
         const response = await axios.get(principalPath);
         return response;
    }catch(error){
 console.log("error carga de repuestos");
    }
}

const verRepuestoPorCodBarras=async(codigoBarras)=>{
    try{
      const response = await axios.get(principalPath+`/${codigoBarras}`);
      return response;
    }catch(error){
    console.log("error al buscar por cod de barras: "+error);
    }
}

const buscarPorCodBarraONombre=async(codBarraONombre)=>{
    console.log("Legando para buscar por codBarraONombre: "+codBarraONombre);
    const param={codBarraONombre:codBarraONombre};
    try{
       const response = await axios.get(principalPath+`/buscarCBN`,{
        params:param
       });
       return response;
    }catch(error){
console.log(error);
    }
}

const actualizarRepuesto=async(repuesto)=>{
    console.log("Llegando el repuesto para editar en cliente: "+repuesto);
     try{
      const response = await axios.put(principalPath,repuesto);
      return response;
     }catch(error){
        console.log(error);
     }
}

const eliminarPorCodBarras=async(codBarras)=>{
    const param = {codBarras:codBarras};
   try{
     const response = await axios.delete(principalPath,{
        params:param
     });

     return response;
   }catch(error){
      console.log(error);
   }
}


export const guardarRepuestosFachada =(lista, idProveedor)=>{
    return guardarRepuestos(lista,idProveedor);
}

export const listarRepuestosFachada=()=>{
    return listarRepuestos();
}

export const verRepuestoPorCodBarrasFachada=(codigoBarras)=>{
return verRepuestoPorCodBarras(codigoBarras);
}

export const buscarPorCodBarraONombreFachada=(codBarraONombre)=>{
    return buscarPorCodBarraONombre(codBarraONombre);
}

export const actualizarRepuestoFachada=(repuesto)=>{
  return actualizarRepuesto(repuesto);
}


export const eliminarPorCodBarrasFachada=(codBarras)=>{
    return eliminarPorCodBarras(codBarras);
}