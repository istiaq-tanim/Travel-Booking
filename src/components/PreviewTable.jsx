import { useSelector } from "react-redux";
import PreviewTableRow from "./PreviewTableRow";

const PreviewTable = () => {
  const bookings=useSelector((state)=>state.bookings)
  console.log(bookings)
    return (
        <div className="table-container">
        <table className="booking-table">
          { bookings?.length > 0 &&
            <thead className="bg-gray-100/50">
            <tr className="text-black text-left">
              <th>Destination From</th>
              <th>Destination To</th>
              <th className="text-center">Journey Date</th>
              <th className="text-center">Guests</th>
              <th className="text-center">className</th>
              <th className="text-center">Delete</th>
            </tr>
          </thead>
          }
          <tbody className="divide-y divide-gray-300/20" id="lws-previewBooked">
            
            {
              bookings?.map((booking,index) => <PreviewTableRow key={index} booking={booking}></PreviewTableRow>)
            }
          </tbody>
        </table>
      </div>
    );
};

export default PreviewTable;