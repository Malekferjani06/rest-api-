import { FAIL_CONTACTS, GET_CONTACTS, LOAD_CONTACTS } from "../actionsTypes/contact"


const intiale={
    ContactList:[],
    error:null,
    load:false
}

const contactReducer=(state=intiale,{type,payload})=>{
  switch (type) {
      case LOAD_CONTACTS:
          return {...state,load:true}
      case GET_CONTACTS:
          return {...state,load:false,Contact:payload.ContactList}
      case FAIL_CONTACTS:
          return {...state,load:false,error:payload}  
      default:
      return state
  }
}

export default contactReducer;