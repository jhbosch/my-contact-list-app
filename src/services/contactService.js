import axios from 'axios';

const fetchContacts = async (filters) => {
    try {
      const data = await axios.get(`${process.env.API}/contact/all?filters=${filters}`);
        
      if(data.status === 200) {
        return data.data;
      }
      
      return {error:data.error};
      
    } catch (err) {
      return {error:err}
    }
    
}


const contactDelete = async (id) => {
  try {
    const data = await axios.delete(`${process.env.API}/contact/${id}`)
    if(data.status === 200){
      return true;
    }
    
    return {error:data.error};
    
  } catch (err) {
    return {error:err}
  }
  
}

const contactUpdate = async (id,contact) => {
  try {
    const data = await axios.patch(`${process.env.API}/contact/${id}`,contact)
    if(data.status === 200){
      return true;
    }
    
    return {error:data.error};
    
  } catch (err) {
    return {error:err}
  }
  
}

export {fetchContacts, contactDelete, contactUpdate};