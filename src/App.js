import React, { useEffect } from "react"; //useeffect 90% of lifecycle methos built into one
import { connect } from "react-redux";
import { fetchAllAppointments } from "./store/appointments/actions";

//useEffect requires 2 arguments
//1st argument should be a/k/a componentDidMount
function App(props) {
  useEffect(() => {
    props.fetchAllAppointments();
  }, []);
  return <div></div>;
}

export default connect(
  null,
  { fetchAllAppointments }
)(App);
