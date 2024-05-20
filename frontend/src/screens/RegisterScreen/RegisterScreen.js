import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/userAction";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  //   const [pic, setPic] = useState(
  //     "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  //   );
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      navigate("/mynotes");
    }
  }, [userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <MainScreen title="REGISTER">
      <div className="loginContainer">
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
        {loading && <Loading />}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label style={{ marginTop: "8px" }}>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label style={{ marginTop: "8px" }}>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Name"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="confirmPassword">
            <Form.Label style={{ marginTop: "8px" }}>
              Confirm Password
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Name"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          {/* <Form.Group controlId="pic">
            <Form.Label style={{marginTop:'8px'}}>Profile Picture</Form.Label>
            <Form.Control
            //   onChange={(e) => postDetails(e.target.files[0])}
             
              type="file"
              label="Upload Profile Picture"
              accept="image/*"
              custom='true'
            />
          </Form.Group> */}

          <Button style={{ marginTop: "8px" }} variant="primary" type="submit">
            Register
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            Have an Account ? <Link to="/login">Login</Link>
          </Col>
        </Row>
      </div>
    </MainScreen>
  );
};

export default RegisterScreen;
