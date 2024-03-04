import axios from "axios";

const guardarProveedor=async(body)=>{
    console.log("entro para obtener  ")
    try{
    const response = await axios.post(`http://localhost:8084/proveedores`,body);
    console.log("===>>>> "+response);
    return response;
    }catch(error){
       console.log("Error en guardar proveedor: "+error);
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

const verProveedor=async(identificador)=>{
    try{
  const response = await axios.get(`http://localhost:8084/proveedores/`,identificador);
return response;    
}catch(error){
  console.log("No se puede cargar el proveedor en el cliente");
    }
}

const listarProveedoresPorNombreEmpresa=async()=>{
  try{
        const response = await axios.get('http://localhost:8084/proveedores/empresasNom');
        return response;
  }catch(error){
  console.log(error);
  }
}

const listarPorNombreOIdentifi=async(nom_identifi)=>{
  const param={nom_identi:nom_identifi};
  try{
       const response = await axios.get(`http://localhost:8084/proveedores/listni`,{
        params:param
       });
       return response;
  }catch(error){
  console.log(error);
  }
}


const cargarProveedorPorIdentificacion=async (identificacion)=>{
  const param ={identificacion:identificacion}
  try{
    const response = await axios.get(`http://localhost:8084/proveedores/identifi`,{params:param});
     return response;
  }catch(error){
   console.log(error);
  }
}

const editarProveedor=async(proveedor)=>{
   try{
     const response = await axios.put(`http://localhost:8084/proveedores`,proveedor);
     return response;
   }catch(error){
    console.log(error);
   }
}

const eliminarProPorIdentificacion=async(identificacion)=>{
  const param ={identificacion:identificacion};
    try{
      const response = await axios.delete(`http://localhost:8084/proveedores`,{params:param});
      return response;
    }catch(error){
      console.log(error);
    }
}

export const guardarProveedorFachada = (body)=>{
    return guardarProveedor(body);
}

export const listarProveedoresFachada=()=>{
    return listarProveedores();
}


export const cargarListaEmpresasFachada=()=>{
    return listarProveedoresPorNombreEmpresa();
}

export const listarPorNombreOIdentifiFachada=(nom_identifi)=>{
  return listarPorNombreOIdentifi(nom_identifi);
}


export const cargarProveedorPorIdentificacionFachada=(identificacion)=>{
   return cargarProveedorPorIdentificacion(identificacion);
}

export const editarProveedorFachada=(proveedor)=>{
  return editarProveedor(proveedor);
}

export const eliminarProPorIdentificacionFachada=(identificacion)=>{
  return eliminarProPorIdentificacion(identificacion);
}