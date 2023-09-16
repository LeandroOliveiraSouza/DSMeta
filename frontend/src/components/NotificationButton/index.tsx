import "./styles.css";
import notificationIcon from "../../assets/notification.svg";

export default function NotificationButton() {
  return (
    <div className="dsmeta-red-btn">
      <img src={notificationIcon} alt="Notificar" />
    </div>
  );
}
