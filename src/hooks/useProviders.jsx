import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";


const useProviders = () => {
  const providers = useContext(AuthContext)
  return providers;
};

export default useProviders;