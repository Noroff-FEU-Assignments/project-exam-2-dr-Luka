export default function EnquiriesItem({
  establishment,
  name,
  checkInDate,
  checkOutDate,
  time,
}) {
  return (
    <div className="enquiryItem">
      <h5>{name}</h5>
      <h5>{establishment}</h5>
      <h5>{checkInDate}</h5>
      <h5>{checkOutDate}</h5>
    </div>
  );
}
