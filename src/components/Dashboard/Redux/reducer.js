let defaultState = {
    mapCoord:{
        long: null,
        lat: null
    }
}

function reducer(state = {...defaultState}, action)
{
    switch(action.type)
    {
        case 'change-long-lat':
        return {
            ...state,
            mapCoord:{
                long: action.payload.long,
                lat: action.payload.lat
            }
        }
        default:
            return state
    }   
}
export default reducer;