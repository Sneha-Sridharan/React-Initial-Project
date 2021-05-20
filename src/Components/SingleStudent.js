import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { students } from '../students';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class SingleStudentDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentsData: students,
            studentName: this.props.match.params.studentName,
            student: null
        }
    }

    componentDidMount(){
        this.getData()
    }

    getData()
    {
        this.setState ({
            student: this.state.studentsData.find(student=>student.name===this.state.studentName)
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
            </Container>
        );
    }
}

export default SingleStudentDetails;