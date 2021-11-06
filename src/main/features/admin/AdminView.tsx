import { adminViewClass, actionsGridClass, actionRowClass } from './AdminView.css';

export function AdminView() {
  return (
    <div className={adminViewClass}>
      <h1>To simulate real-world behavior, I've exposed this page</h1>
      <div className={actionsGridClass}>
        <div className={actionRowClass}>
          <div>Email Verification Status</div>
          <div>Verified</div>
          <div>
            <button>Toggle Status</button>
          </div>
        </div>
        <div className={actionRowClass}>
          <div>Phone OTP Code</div>
          <div>1010</div>
          <div>
            <p>Paste this code in Phone Login</p>
          </div>
        </div>
      </div>
    </div>
  );
}
