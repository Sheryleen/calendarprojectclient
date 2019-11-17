import React from "react";
import { Table, Button } from "reactstrap";
import { connect } from "react-redux";
import { removeAppointment } from "../store/appointments/actions";

const Dashboard = props => {
  console.log("props", props);

  let listOfAppointments = props.appointments.map(appt => (
    <tr>
      <th>{appt.created_at}</th>
      <td>{appt.user_id}</td>
      <td>
        <Button
          onClick={() => props.history.push(`/appointments/${appt.id}`)}
          color='warning'
        >
          Edit
        </Button>
        <Button onClick={() => props.removeAppointment(appt.id)} color='danger'>
          Delete
        </Button>
      </td>
    </tr>
  ));
  return (
    <Table>
      <thead>
        <tr>
          <th>Date/Time</th>
          <th>With Whom?</th>
          <th>Manage</th>
        </tr>
      </thead>
      <tbody>{listOfAppointments}</tbody>
    </Table>
  );
};

// function should return a plain object that contains the data the component needs:
const mapStateToProps = (state /*, ownProps*/) => {
  return {
    appointments: state.appointments.all
  };
};

export default connect(mapStateToProps, { removeAppointment })(Dashboard);
