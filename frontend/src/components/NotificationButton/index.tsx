import "./styles.css";
import notificationIcon from "../../assets/notification.svg";
import axios from "axios";
import { BASE_URL } from "../../utils/request";
import { toast } from "react-toastify";

type Props = {
  saleId: number;
}

function handleClick(id: number) {
  axios(`${BASE_URL}/sales/${id}/notification`).then(() => {
    toast.info("SMS enviado com sucesso");
  })
}

export default function NotificationButton({ saleId }: Props) {
  return (
    <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
      <img src={notificationIcon} alt="Notificar" />
    </div>
  );
}
