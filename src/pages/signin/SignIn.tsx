import { Button } from "@components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { useDispatch } from "react-redux";
import { loginUser, socialLogin } from "../../redux/auth.reducer";
import { googleProvider, appleProvider } from "../../firebase/firebaseConfig";
import { AppDispatch } from "../../redux/store";
import { useState } from "react";

export default function SignIn() {
  const dispatch = useDispatch<AppDispatch>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    dispatch(loginUser({ email, password }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1A1B1D] text-white">
      <Card className="w-full max-w-sm bg-[#f4f1eb] text-black shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-semibold">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <Button
              className="w-full bg-black text-white p-3 rounded-md"
              onClick={handleLogin}
            >
              Login
            </Button>
          </form>
          <div className="mt-6 space-y-3">
            <Button
              className="w-full bg-white text-black border border-gray-300 p-3 rounded-md"
              onClick={() => dispatch(socialLogin(googleProvider))}
            >
              Login with Google
            </Button>
            <Button
              className="w-full bg-black text-white p-3 rounded-md"
              onClick={() => dispatch(socialLogin(appleProvider))}
            >
              Login with Apple
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}