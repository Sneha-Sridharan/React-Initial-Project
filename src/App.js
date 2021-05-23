import './App.css';
import React, { Component } from 'react';
import StudentTable from './Components/Table';
import SingleStudentDetails from './Components/SingleStudent';
import UpdateDetails from './Components/Update';
import { Route, HashRouter, Switch} from "react-router-dom";
import { students } from './students';

class App extends Component {

  componentDidMount(){
    localStorage.setItem('allStudents', JSON.stringify(students));
  }

  render(){
    return(
        <div>
           <HashRouter>
            <Switch>
                <Route exact path="/" component={StudentTable} />
                <Route path={"/student/:studentId"} exact component={SingleStudentDetails}/>
                <Route path={"/update/:studentId"} exact component={UpdateDetails}/>
                <Route path="*" component={() => "404 NOT FOUND"} />
              </Switch>
           </HashRouter>
            
        </div>
      )
    }
  // render() {
  //   return (
  //     <StudentTable />
  //   );
}

export default App;
