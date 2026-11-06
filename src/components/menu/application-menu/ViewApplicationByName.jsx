import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Table } from "react-bootstrap";

const ViewApplicationByName = () => {
  const [applicationName, setApplicationName] = useState("");
  const [application, setApplication] = useState({
    id: "",
    name: "Application Name",
    createdOn: "Created On",
    description: "Description",
    owner: "Owner",
  });
  const [error, setError] = useState(null);
  const [showTable, setShowTable] = useState(true);

  const handleInputChange = (event) => {
    setApplicationName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowTable(false);
    fetch(`http://localhost:8085/api/v1/applications/name?name=${applicationName}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch application");
        }
        return response.json();
      })
      .then((data) => {
        setApplication(data);
        setShowTable(true);
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>View Application Details by Name</h2>
        <Link to="/" className="btn btn-danger">
          Sign Out
        </Link>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formApplicationName">
          <Form.Label>Enter Application Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter application name"
            value={applicationName}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          View Application
        </Button>
      </Form>
      {error && <p className="text-danger">{error}</p>}
      {showTable && (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Created On</th>
              <th>Description</th>
              <th>Owner</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{application.id}</td>
              <td>{application.name}</td>
              <td>{application.createdOn}</td>
              <td>{application.description}</td>
              <td>{application.owner}</td>
            </tr>
          </tbody>
        </Table>
      )}
      <Button variant="secondary" onClick={() => window.history.back()}>
        Back to Previous Menu
      </Button>
    </div>
  );
};

export default ViewApplicationByName;
