import { useDispatch } from "react-redux";
import { loginUser, socialLogin } from "../../redux/auth.slice";
import { googleProvider, appleProvider } from "../../firebase/firebaseConfig";
import { AppDispatch } from "../../redux/store";

export default function SignIn() {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div>
      <h2>Login</h2>
      <button onClick={() => dispatch(loginUser({ email: "test@gmail.com", password: "Le password" }))}>Login with credentials</button>
      <button onClick={() => dispatch(socialLogin(googleProvider))}>Login with Google</button>
      <button onClick={() => dispatch(socialLogin(appleProvider))}>Login with Apple</button>
    </div>
  );
}
