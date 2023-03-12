import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToLoginPage } from "../../routes/coordinator";

export default function HomePage() {
  const navigate = useNavigate();
  
  useEffect(() => {
    goToLoginPage(navigate)
  }, []);

  return (
    <>
      HomePage
    </>
  )
}
