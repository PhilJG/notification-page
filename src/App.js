import "./App.css";
import Head from "./components/Head";
import { UserNotification } from "./components/UserNotifiactions";

function App() {
  return (
    <div>
      <Head />
      <UserNotification firstName='mark' lastName='webber' />
      <UserNotification firstName='angela' lastName='gray' />
      <UserNotification firstName='jacob' lastName='thompson' />
      <UserNotification firstName='rizky' lastName='hassanuddin' />
      <UserNotification firstName='kimberly' lastName='smith' />
      <UserNotification firstName='nathan' lastName='peterson' />
      <UserNotification firstName='anna' lastName='kim' />
    </div>
  );
}

export default App;
