import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Alert, Card, Col, Container, Row } from "react-bootstrap";
import User from "../models/interfaces/User";

const Users = () => {
  const [users, setUSers] = useState<User[]>([]);
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const getUsers = async () => {
      try {
        const response: AxiosResponse<{ data: User[] }> = await axios.get(
          "http://localhost:8080/api/users",
          {
            headers: {
              authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setUSers(response.data.data);
        console.log(response.data.data);
        setIsLogged(true);
      } catch (error: any) {
        console.log(error?.message || error);
        setError(error?.message || error);
        setIsLogged(false);
      }
    };
    getUsers();
  }, []);

  return (
    <div className="mt-5">
      <Container>
        {isLogged ? (
          <Row>
            {users.map((user) => (
              <Col key={user.id}>
                <Card>
                  <Card.Body>
                    <Card.Title>User</Card.Title>
                    <Card.Text>Email : {user.email}</Card.Text>
                    <Card.Text>Encrypted Password</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <div className="mt-5 d-flex justify-content-center">
            <Alert variant="danger">{error}</Alert>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Users;
