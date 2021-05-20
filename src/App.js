import './App.css';
import React, { Component } from 'react';
import StudentTable from './Components/Table';
import SingleStudentDetails from './Components/SingleStudent';
import { Route, HashRouter, Switch} from "react-router-dom";

class App extends Component {
  render(){
    return(
        <div>
           <HashRouter>
            <Switch>
                <Route exact path="/" component={StudentTable} />
                <Route path={"/student/:studentName"} exact component={SingleStudentDetails}/>
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
