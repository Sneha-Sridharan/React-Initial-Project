import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class UpdateDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentsData: JSON.parse(localStorage.getItem("allStudents")),
            student: null,
            name: null,
            age: null,
            address: null,
            phone: null,
            studentIndex: null
        }
    }

    componentDidMount(){
        this.getData()
    }

    getData()
    {
        const that = this;
        // eslint-disable-next-line
        this.state.studentsData.map(elem => {
            if(elem.id ===  parseInt(that.props.match.params.studentId)){
                that.setState({
                    student: elem,
                    id: elem.id,
                    name: elem.name,
                    age: elem.age,
                    address: elem.address,
                    phone: elem.phone,
                    studentIndex: that.state.studentsData.indexOf(elem)
                })
            }
        })
    }
    
    updateData()
    {
        this.state.studentsData[this.state.studentIndex] = {
            "id": this.state.id,
            "name": this.state.name,
            "age": this.state.age,
            "address": this.state.address,
            "phone": this.state.phone
        }
        localStorage.setItem('allStudents', JSON.stringify(this.state.studentsData));
    }

    routeToTablePage(){
        let x =  '/';
        this.props.history.push(x);
    }

    changeHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value});
      }

    render() {
        return (
            <div>
                {this.state.student ? 
                    <Container className="leftbody">
                        <Row className="mt-5">
                            <Col xs={12} md={12}>
                                <h2 className="bold text-align-center">
                                    {this.state.student.name}
                                </h2>
                            </Col>
                        </Row>
                        <Container className="mb-5">
                            <Form onSubmit={this.updateData()}>
                            {/* onSubmit={this.updateData()} */}
                                <Row>
                                    <Col xs={12} md={12}>
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" name='name' defaultValue={this.state.student.name || ''} onChange={this.changeHandler}/>
                                    </Col>
                                </Row>
                                <br/>
                                <Row>
                                    <Col xs={12} md={12}>
                                        <Form.Label>Age</Form.Label>
                                        <Form.Control type="text" name='age' defaultValue={this.state.student.age || ''} onChange={this.changeHandler}/> 
                                    </Col>
                                </Row>
                                <br/>
                                <Row>
                                    <Col xs={12} md={12}>
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control type="text" name='address' defaultValue={this.state.student.address || ''} onChange={this.changeHandler}/> 
                                    </Col>
                                </Row>
                                <br/>
                                <Row>
                                    <Col xs={12} md={12}>
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control type="text" name='phone' defaultValue={this.state.student.phone || ''} onChange={this.changeHandler}/> 
                                    </Col>
                                </Row>
                            </Form>
                        </Container>
                        <div className="text-align-center">
                            <Button onClick = {() => this.routeToTablePage()}>Update</Button>
                        </div>
                    </Container> 
                : ''
            }
            </div>
        );
    }
}

export default UpdateDetails;