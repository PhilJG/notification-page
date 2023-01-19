//  const Head = () => {
//   return (
//     <div className='flex head'>
//       <div className='head__left flex'>
//         <h1>Notifications</h1>
//         <div className='head__count'>3</div>
//       </div>
//       <a className='head__right'>Mark all as read</a>
//     </div>
//   );
// };
// export default Head;
//

import React, { useState } from "react";

export const Head = () => {
  const [state, setState] = useState(false);

  const markRead = (event) => {
    setState((current) => !current);
  };

  return (
    <div className='flex head'>
      <div className='head__left flex'>
        <h1>Notifications</h1>
        <div className={state ? "head__count" : " "}>{state ? "3" : " "}</div>
      </div>
      <a onClick={markRead} className='head__read'>
        Mark all as read
      </a>
    </div>
  );
};
export default Head;
