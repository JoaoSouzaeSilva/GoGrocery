import { IonHeader, IonTitle, IonToolbar, IonImg, IonText } from "@ionic/react";
import './Header.css'
import headerImg from '../images/header.png'

const Header = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar className="header">
          <tr>
            <td><IonImg className="image" src={headerImg}/></td>
            <td><IonText className="header_text">Have it your way</IonText></td>
          </tr>
        </IonToolbar>
      </IonHeader>
    </>
  );
};

export default Header;
