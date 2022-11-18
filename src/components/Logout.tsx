import { Button } from "react-bootstrap";

const Logout = () => {
  return (
    <div>
      <Button
        variant="info"
        onClick={() => localStorage.removeItem("accessToken")}
      >
        Logout
      </Button>
    </div>
  );
};

export default Logout;
