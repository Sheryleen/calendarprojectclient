import React, { useEffect } from "react"; //use effect 90% of lifecycle methos built into one
import { connect } from "react-redux";
import { fetchAllAppointments } from "./store/appointments/actions";
import { fetchAllUsers } from "./store/users/actions";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import AddApptForm from "./components/AddApptForm";
import Dashboard from "./components/Dashboard";
import TopNav from "./components/TopNav";
import EditApptForm from "./components/EditApptForm";

//useEffect requires 2 arguments
//1st argument should be a/k/a componentDidMount
function App(props) {
  useEffect(() => {
    props.fetchAllAppointments();
    props.fetchAllUsers();
  }, []);

  return (
    <Router>
      <div className='App'>
        <TopNav />
        <Container fluid>
          <Row>
            <Col>
              <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route path='/appointments/:id' component={EditApptForm} />
                <Route path='/appointments' component={AddApptForm} />
              </Switch>
            </Col>
            {/* <Col xs='2'>
              <Misc />
            </Col> */}
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default connect(null, { fetchAllAppointments, fetchAllUsers })(App);
