
export function pushReduxCoord(lat, long)
{
    return{
        type: 'change-long-lat',
        payload:{
            long: long,
            lat:lat
        }
    }
}