import { ADD, DELETE } from "./actiontypes";

const initialState={
    bookings:[]
}

const bookReducer=(state=initialState,action) =>
{
    switch (action.type) {
        case ADD:
            return {
                ...state,
                bookings:[...state.bookings,action.payload]
            }
        case DELETE:
            return {
                bookings:state.bookings.filter(booking=> booking.id !== action.payload)
            }
        default:
            return state
    }
}

export default bookReducer