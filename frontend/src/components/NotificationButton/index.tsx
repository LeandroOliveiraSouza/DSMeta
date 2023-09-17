import "./styles.css";
import notificationIcon from "../../assets/notification.svg";
import axios from "axios";
import { BASE_URL } from "../../utils/request";

type Props = {
  saleId: number;
}

function handleClick(id: number) {
  axios(`${BASE_URL}/sales/${id}/notification`).then(response => {
    console.log("sucesso");
  })
}

export default function NotificationButton({ saleId }: Props) {
  return (
    <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
      <img src={notificationIcon} alt="Notificar" />
    </div>
  );
}
