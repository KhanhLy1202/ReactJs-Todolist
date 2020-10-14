
var initialState = {
  orderBy: 'name',
  orderDir: 'asc'
}

var myReducer = (state = initialState, action) => {
  if(action.type === 'SORT') {
    var {orderBy, orderDir} = action.sort;
    var status = state;
    return {
      status: status,
      sort: {
        orderBy: orderBy,
        orderDir: orderDir
      }
    };
  }
  return state;
}

export default myReducer;