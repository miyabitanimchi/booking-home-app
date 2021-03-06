const searchParamsReducer = (state, action) => {
  switch (action.type) {
    case "SET_DESTINATION_ID":
      return {
        ...state,
        destinationId: action.payload
      }
    case "SET_ITINERARY":
      return {
        ...state,
        ...action.payload
      }
    case "CHANGE_SORT_ORDER":
      console.log("sort-order")
      return {
        ...state,
        sortOrder: action.payload
      }
    // case "SET_CHECKIN_DATE':
    //   return {
    //     ...state,
    //     destinationId: action.payload
    //   }
    // case "SET_NUM_OF_GUESTS":
    //   return {
    //     ...state,
    //     destinationId: action.payload
    //   }
    default:
      return state;
  }
}

export default searchParamsReducer;
