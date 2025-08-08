import { GoogleLogin } from "@react-oauth/google";
import { decodeJWT } from "../../../utils/formUtils";

const GoogleAuth = ({ onLogin }) => {
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        if (credentialResponse.credential) {
          const user = decodeJWT(credentialResponse.credential);
          onLogin(user);
        }
      }}
      onError={() => {
        console.error("Google Login Failed");
        onLogin(null);
      }}
      useOneTap
    />
  );
};

export default GoogleAuth;
