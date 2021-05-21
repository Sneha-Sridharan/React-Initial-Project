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
        }
    }

    componentDidMount(){
        this.getData()
    }

// localstorage.getItem
// localstorage.setItem
// localstorage.removeItem
// JSON.stringfy()
// JSON.parse()


    getData()
    {
        const that = this;
        // eslint-disable-next-line
        this.state.studentsData.map(elem => {
            if(elem.id ===  parseInt(that.props.match.params.studentId)){
                that.setState({
                    student: elem
                })
            }
        })
    }

    routeToUpdatePage(id){
        let x =  '/update/' + id;
        this.props.history.push(x);
    }

    render() {
        return (
            <div>
                {this.state.student ? 
                  <Container className="centerbody">
                  <Row>
                      <Col xs={12} md={12}  className="mt-5">
                          <h2 className="bold">
                              {this.state.student.name}
                          </h2>
                      </Col>
                   </Row>
                  <Container className="margins">
                      <Row className="pt-10">
                          <Col xs={12} md={12} className="text-align-left">
                              <div  className="font-size-sm">
                                  Name: 
                                   {' '+this.state.student.name }
                              </div>
                          </Col>
                          <Col xs={12} md={12} className="text-align-left">
                              <div  className="font-size-sm">
                                  Age:  
                                  {' '+this.state.student.age}
                              </div>
                          </Col>
                          <Col xs={12} md={12} className="text-align-left">
                              <div  className="font-size-sm">
                                  Address: 
                                  {' '+this.state.student.address}
                              </div>
                          </Col>
                          <Col xs={12} md={12} className="text-align-left">
                              <div  className="font-size-sm">
                                  Phone Number: 
                                  {' '+this.state.student.phone}
                              </div>
                          </Col>
                      </Row>
                  </Container>
                  <Button onClick = {() => this.routeToUpdatePage(this.state.student.id)}>Update</Button>
              </Container>
                : ''}
            </div>
          
        );
    }
}

export default SingleStudentDetails;