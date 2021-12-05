export default function EnquiriesItem({
  establishment,
  name,
  checkInDate,
  checkOutDate,
}) {
  return (
    <div className="enquiryItem">
      <p className="enquiryName">Name: {name}</p>
      <p className="enquiryHotel">{establishment}</p>
      <p className="enquiryDate">Check in Date: {checkInDate}</p>
      <p className="enquiryDate">Check out Date: {checkOutDate}</p>
    </div>
  );
}
