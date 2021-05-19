import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { students } from '../students';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class StudentTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentsData: students
        };
    }

    render() {
        const students = this.state.studentsData.map((student) => {
            return (
                <tr onClick={() => this.selectStudent(student)}>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.address}</td>
                    <td>{student.phone}</td>
                </tr>
            );
        });

        return (
            <Container className="header">
                <Row>
                    <Col xs={12} md={12}  className="mt-5">
                        <h2 className="bold">
                            STUDENT DETAILS
                        </h2>
                    </Col>
                 </Row>
            <Container className="table-body">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students}
                    </tbody>
                </Table>
            </Container>
            </Container>
        );
    }
}

export default StudentTable;