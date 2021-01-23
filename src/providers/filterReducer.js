
export default (filters, action) => {
  switch (action.type) {
    case 'Add_NEW_FILTER':
      return [...filters, action.payload]
    case 'FETCH_FILTER':
      return action.payload
    case 'DEL_FILTER':
      return action.payload;
    default:
      return filters
  }
}
