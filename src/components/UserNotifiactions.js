import "./appStyle.css";

export const UserNotification = (props) => {
  return (
    <div className='notification flex'>
      <img
        className='avatar'
        src={`./assets/images/avatar-${props.firstName}-${props.lastName}.webp`}></img>
      <div className='notification__box'>
        <h2>
          {props.firstName} {props.lastName}
        </h2>
        <p>
          {props.activity}
          {props.post}
          <div>{props.circle}</div>
          {props.when}
        </p>
      </div>
    </div>
  );
};
export default UserNotification;
