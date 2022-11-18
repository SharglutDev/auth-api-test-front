import axios, { AxiosResponse } from "axios";
import { FormEvent, useRef, useState } from "react";
import { Alert, Button, Container, FloatingLabel, Form } from "react-bootstrap";
import User from "../models/interfaces/User";

interface AuthDataResponse {
  accessToken?: string;
  refreshToken?: string;
}

interface AuthResponse {
  message: string;
  data?: AuthDataResponse;
}

const Auth = ({ button }: { button: string }) => {
  const [authMessage, setAuthMessage] = useState<string>("");
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const authUser = async () => {
    let message = "";
    if (emailRef.current?.value && passwordRef.current?.value) {
      const user: User = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };
      try {
        const response: AxiosResponse<{
          message: string;
          data: AuthDataResponse;
        }> = await axios.post(
          `http://localhost:8080/api/${
            button === "Login" ? "login" : "register"
          }`,
          user
        );
        console.log(response.data);
        message = response.data.message;
        if (response.data.data.accessToken) {
          localStorage.setItem("accessToken", response.data.data.accessToken);
          console.log(
            "access token saved to localstorage : ",
            response.data.data.accessToken
          );
        }
      } catch (error: any) {
        console.log(error?.message || error);
        message = error?.message || error;
      }
      setAuthMessage(message);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    authUser();
  };

  return (
    <div>
      <Container className="mt-5 mx-auto" style={{ width: "30%" }}>
        <h1 className="text-center mb-5">Authentification</h1>
        <Form onSubmit={handleSubmit}>
          <FloatingLabel
            controlId="email-label"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="name@exemple.com"
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="password-label"
            label="Password"
            className="mb-3"
          >
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="name@exemple.com"
            />
          </FloatingLabel>
          <Button type="submit">{button}</Button>
        </Form>
        {authMessage && (
          <Alert variant="success" className="mt-3 text-center">
            {authMessage}
          </Alert>
        )}
      </Container>
    </div>
  );
};

export default Auth;
