import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [authMessage, setAuthMessage] = useState<string>("");

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken);
    const getAcces = async () => {
      const response = await axios.get("http://localhost:8080/api/user", {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(response.data.message);
      setAuthMessage(response.data.message);
    };
    getAcces();
  }, []);

  return (
    <div className="text-center mt-5">
      <strong>{authMessage}</strong>
      {authMessage === "Congrats, you have access to this page" && (
        <div>You are allowed to see this part</div>
      )}
    </div>
  );
}

export default Home;
