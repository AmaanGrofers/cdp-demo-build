import { Button } from "antd";
import GoogleIcon from "../../common/GoogleIcon.jsx";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const login = () => {
    navigate("/");
  };

  return (
    <div className="w-full h-96 flex flex-col items-center justify-center">
      <h2>Sign in to your account</h2>

      <Button className="px-4 mt-4" variant="filled" onClick={login}>
        <div className="flex items-center justify-center">
          <div className="pr-2 flex items-center">
            <GoogleIcon />
          </div>
          Google
        </div>
      </Button>
    </div>
  );
}

export default Login;
