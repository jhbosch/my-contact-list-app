import React, {  useContext, useEffect } from 'react';
import Contact from "./contact";
import { fetchContacts }  from '../../services/contactService';
import Context from '../common/Context';

const ContactList = () => {

    const { contacts, dispatch, filters } = useContext(Context);

    

    useEffect(() => {
        
        const fetch = async () => {
            const data = await fetchContacts(filters);
    
            if(data && data.error === undefined) {
                await dispatch({ type: 'FETCH_CONTACTS', payload: data });
            }else{
                alert(data.error);
            }
        }
        fetch();

      }, [filters, dispatch ]);



    return (
        <>
            {contacts && (
                <>
                    {contacts.map(({name,_id,address,phone_number,email})=>(
                        <Contact
                            key={_id}
                            id={_id}
                            username={name}
                            address={address}
                            email={email}
                            phone={phone_number}
                        />
                    ))}
                </>
            )}
            {contacts.length === 0 && (<p>No hay Contactos</p>)}
        
        </>
        

    )

}


export default ContactList;