export const UserNotification = (props) => {
  return (
    <div className='notification__box'>
      <img
        src={`./assets/images/avatar-${props.firstName}-${props.lastName}.webp`}></img>
      <h2>
        {props.firstName} {props.lastName}
      </h2>
    </div>
  );
};
export default UserNotification;
