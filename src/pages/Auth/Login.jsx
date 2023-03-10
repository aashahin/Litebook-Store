import "./Login.css";

export function Login() {
  return (
    <div className="login">
      <form>
        <h1>Login</h1>
        <label>Email</label>
        <input type="email" placeholder="Enter your email address" required />
        <label>Password</label>
        <input type="password" placeholder="Enter your password" required />
        <button>Login</button>
        <a href="##">Forget Password?</a>
      </form>
    </div>
  );
}
