import { useState } from "react";
import From from "../assets/images/Frame.svg"
import Guest from "../assets/images/Vector (1).svg"
import Ticket from "../assets/images/Vector (3).svg"
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Redux/AddBooking/actions";

const Input = () => {
    const [from, setFrom] = useState("")
    const [to, setTo] = useState("")
    const [date, setDate] = useState(new Date());
    const [passenger, setPassenger] = useState(null)
    const [ticketClass, setTicketClass] = useState("")
    const totalBookings = useSelector(state => state.bookings)
    const bookingsLength = totalBookings.length
    console.log(bookingsLength)

    const dispatch = useDispatch()
    const bookings = {
        from, to, date, passenger, ticketClass, id: Date.now().toString()
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(add(bookings))
    }
    return (
        <div className="mt-[160px] mx-4 md:mt-[160px] relative">
            <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
                <form className="first-hero lws-inputform">
                    <div className="des-from">
                        <p>Destination From</p>
                        <div className="flex flex-row">
                            <img src={From} alt="" />
                            <select value={from} onChange={(e) => setFrom(e.target.value)} className="outline-none px-2 py-2 w-full" name="from" id="lws-from" required>
                                <option value="" hidden>Please Select</option>
                                <option>Dhaka</option>
                                <option>Sylhet</option>
                                <option>Saidpur</option>
                                <option>Cox's Bazar</option>
                            </select>
                        </div>
                    </div>

                    <div className="des-from">
                        <p>Destination To</p>
                        <div className="flex flex-row">
                            <img src={From} alt="" />
                            <select className="outline-none px-2 py-2 w-full" value={to} onChange={(e) => setTo(e.target.value)} name="to" id="lws-to" required >
                                <option value="" hidden>Please Select</option>
                                <option>Dhaka</option>
                                <option>Sylhet</option>
                                <option>Saidpur</option>
                                <option>Cox's Bazar</option>
                            </select>
                        </div>
                    </div>


                    <div className="des-from">
                        <p>Journey Date</p>
                        <DatePicker required className="outline-none px-2 py-2 w-full date" name="date" id="lws-date" selected={date} onChange={(date) => setDate(date)} />
                    </div>




                    <div className="des-from">
                        <p>Guests</p>
                        <div className="flex flex-row">
                            <img src={Guest} alt="" />
                            <select className="outline-none px-2 py-2 w-full" value={passenger} name="guests" id="lws-guests" required onChange={(e) => setPassenger(e.target.value)}>
                                <option value="" hidden>Please Select</option>
                                <option value="1">1 Person</option>
                                <option value="2">2 Persons</option>
                                <option value="3">3 Persons</option>
                                <option value="4">4 Persons</option>
                            </select>
                        </div>
                    </div>


                    <div className="des-from !border-r-0">
                        <p>className</p>
                        <div className="flex flex-row">
                            <img src={Ticket} alt="" />
                            <select className="outline-none px-2 py-2 w-full" value={ticketClass} name="ticketclassName" id="lws-ticketclassName" required onChange={(e) => setTicketClass(e.target.value)}>
                                <option value="" hidden>Please Select</option>
                                <option>Business</option>
                                <option>Economy</option>
                            </select>
                        </div>
                    </div>

                    {
                        <button disabled={bookingsLength >= 3 ? true : false} onClick={handleSubmit} className="addCity" type="submit" id="lws-addCity">
                            <svg width="15px" height="15px" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            <span className="text-sm">Book</span>
                        </button>
                    }
                </form>
            </div>
        </div>
    );
};

export default Input;