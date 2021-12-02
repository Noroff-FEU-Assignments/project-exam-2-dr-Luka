export default function MessageItem({ email, name, message, time }) {
  return (
    <div className="message">
      <div className="card-info">
        <h5>{name}</h5>
        <h5>{email}</h5>
        <h5>{time}</h5>
        <p className="card-p">{message}</p>
      </div>
    </div>
  );
}
