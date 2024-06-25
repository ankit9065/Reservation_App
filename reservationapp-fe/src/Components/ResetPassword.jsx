// import React from 'react'
// import '../Styles/ResetPassword.css'

// const ResetPassword = (e) => {
//   console.log(e);
//   return (
//     <div>
//       <h1>Reset Password</h1>
//       <div className='resetPassword'>
//         <form action="">
//           <label>Enter New Password: </label>
//           <input type="text" required placeholder='enter new password' />

//           <label>Enter confirm Password:  </label>
//           <input type="password" required placeholder='enter confirm password' />

//           <button>Reset Password</button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default ResetPassword

// ResetPassword.js

import React from 'react';
import '../Styles/ResetPassword.css';

const ResetPassword = (e) => {
    console.log(e);

  return (
    <div className="reset-password-container">
      <h1>Reset Password</h1>
      <div className='resetPassword'>
        <form action="">
          <label>Enter New Password</label>
          <input type="text" required placeholder='Enter new password' />

          <label>Confirm Password</label>
          <input type="password" required placeholder='Confirm new password' />

          <button type="submit">Reset Password</button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
