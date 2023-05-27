import axios from 'axios'

const traerEquipos = async () =>{
    const {data} = await axios.get("https://1022fs-s-production.up.railway.app/api/v1/ver")
    return data
}
//get y delte funcionan igual
//solo params y querys

const guardarEquipo = async (body) =>{
    const {data} = await axios.post("https://1022fs-s-production.up.railway.app/api/v1/crear",body)
    return data
}
//post put patch funcionan igual
// params querys , body

const traerEquiposToken = async (token) =>{
    const {data} = await axios.get("https://1022fs-s-production.up.railway.app/api/v1/ver",{
        headers:{
            JWToken:token
        }
    })
    return data
}
//get y delte funcionan igual
//solo params y querys

const guardarEquipoToken = async (body,token) =>{
    const {data} = await axios.post("https://1022fs-s-production.up.railway.app/api/v1/crear",body,{
        headers:{
            JWToken:token
        }
    })
    return data
}
//post put patch funcionan igual
// params querys , body

const pokemons = async () =>{
    const {data} = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
    return data
}