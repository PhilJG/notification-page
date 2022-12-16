export const Head = () => {
  return (
    <div className='flex head'>
      <div className='head__left flex'>
        <h1>Notifications</h1>
        <div className='head__count'>3</div>
      </div>
      <a className='head__right'>Mark all as read</a>
    </div>
  );
};
export default Head;
