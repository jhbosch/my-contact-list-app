import React, { useReducer } from 'react'
import Context from '../components/common/Context'
import filterReducer from './filterReducer'
import contactReducer from './contactReducer'

export default ({ children }) => {
  
  const [contacts, dispatch] = useReducer(contactReducer, [])
  const [filters, dispatchFilter] = useReducer(filterReducer, [])

  return (
    <Context.Provider
      value={{
        dispatch,
        dispatchFilter,
        contacts,
        filters,
      }}
    >
      {children}
    </Context.Provider>
  )
}
