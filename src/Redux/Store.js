import { createStore } from "redux";
import bookReducer from "./AddBooking/bookReducer";

const store=createStore(bookReducer)

export default store