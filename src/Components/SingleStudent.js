import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { students } from '../students';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class SingleStudentDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentsData: students,
            student: null,
            studentIndex: null
        }
    }

    componentDidMount(){
        this.getData()
    }

    getData()
    {
        let studentName = this.props.match.params.studentName;
        this.setState ({
            studentIndex: this.state.studentsData.findIndex(student=>student.name===studentName),
            student: this.state.studentsData.find(student=>student.name===studentName),
        })
    }

    updateData()
    {
        students[this.state.studentIndex] = {
            "name": "Siya",
            "age": 20,
            "address": "Donec nulla sem, semper ac lacinia ac, viverra sed lectus",
            "phone": 7263767318
        }
        this.setState ({
            student: students[this.state.studentIndex],
        })
    }

    render() {
        return (
            <Container className="header">
                <Row>
                    <Col xs={12} md={12}  className="mt-5">
                        <h2 className="bold">
                            {this.state.student ? this.state.student.name : ''}
                        </h2>
                    </Col>
                 </Row>
                <Container className="table-body">
                    <Row className="pt-10">
                        <Col xs={12} md={12} className="text-align-left">
                            <div  className="font-size-sm">
                                Name: 
                                {this.state.student ? ' '+this.state.student.name : ''}
                            </div>
                        </Col>
                        <Col xs={12} md={12} className="text-align-left">
                            <div  className="font-size-sm">
                                Age:  
                                {this.state.student ? ' '+this.state.student.age : ''}
                            </div>
                        </Col>
                        <Col xs={12} md={12} className="text-align-left">
                            <div  className="font-size-sm">
                                Address: 
                                {this.state.student ? ' '+this.state.student.address : ''}
                            </div>
                        </Col>
                        <Col xs={12} md={12} className="text-align-left">
                            <div  className="font-size-sm">
                                Phone Number: 
                                {this.state.student ? ' '+this.state.student.phone : ''}
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Button onClick = {() => this.updateData()}>Update</Button>
            </Container>
        );
    }
}

export default SingleStudentDetails;