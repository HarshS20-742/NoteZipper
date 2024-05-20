import React, {useEffect, useState} from "react";
import MainScreen from "../../components/MainScreen";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { listNotes } from "../../actions/notesAction";
import Loading from "../../components/Loading"
import ErrorMessage from './../../components/ErrorMessage';

const MyNotes = () => {
  const dispatch = useDispatch();
const navigate = useNavigate();
  const noteList = useSelector((state) => state.noteList);
  const { loading, error, notes } = noteList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete")) {
    }
  };

  

  useEffect(() => {
    dispatch(listNotes());

    if(!userInfo){
      navigate('/');
    }
  }, [dispatch]);
  
  return (
    <MainScreen title={`welcome back ${userInfo?.name}..`}>
      <Link to="/createnotes">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {loading && <Loading />}
      {notes?.map((note) => (
        <Accordion key={note._id} defaultActiveKey='0'>
           <Card style={{ margin: 10 }}>
          <Card.Header style={{ display: "flex" }}>
            <span
              style={{
                color: "black",
                textDecoration: "none",
                flex: 1,
                alignSelf: "center",
                fontSize: 18,
              }}
            >
              <Accordion.Item>    </Accordion.Item>
              <Accordion.Header  as={Card.Text}
                      variant="link"
                      eventkey="0">{note.title}</Accordion.Header>
              
            </span>

            <div>
              <Button href={`/note/${note._id}`}>Edit</Button>
              <Button
                variant="danger"
                className="mx-2"
                onClick={() => deleteHandler(note._id)}
              >
                Delete
              </Button>
            </div>
          </Card.Header>
      
          <Accordion.Body>
             <Card.Body eventkey="0">
            <h4>
              <Badge variant="success">Category - {note.category}</Badge>
            </h4>
            <blockquote className="blockquote mb-0">
              <p>{note.content}</p>
              <footer className="blockquote-footer">
                        Created on{" "}
                        <cite title="Source Title">
                          {note.createdAt.substring(0, 10)}
                        </cite>
                      </footer>
            </blockquote>
          </Card.Body>
          </Accordion.Body>
         
        </Card>
        </Accordion>
       
      ))}
    </MainScreen>
  );
};

export default MyNotes;
