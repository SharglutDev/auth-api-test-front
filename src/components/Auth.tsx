import { Button, Container, FloatingLabel, Form } from "react-bootstrap";

function Auth({ button }: { button: string }) {
  return (
    <div>
      <Container className="mt-5 mx-auto" style={{ width: "30%" }}>
        <h1 className="text-center mb-5">Authentification</h1>
        <Form>
          <FloatingLabel
            controlId="email-label"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@exemple.com" />
          </FloatingLabel>
          <FloatingLabel
            controlId="password-label"
            label="Password"
            className="mb-3"
          >
            <Form.Control type="password" placeholder="name@exemple.com" />
          </FloatingLabel>
        </Form>
        <Button>{button}</Button>
      </Container>
    </div>
  );
}

export default Auth;
