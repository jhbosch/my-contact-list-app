
export default (contacts, action) => {
  switch (action.type) {
    case 'Add_NEW_CONTACT':
      return [...contacts, action.payload]
    case 'FETCH_CONTACTS':
      return [...action.payload]
    default:
      return contacts
  }
}
