import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { connect } from "react-redux";
import { updateAppointment } from "../store/appointments/actions";

// You can access props using the props parameter
const EditApptForm = props => {
  //creating state for agenda and user
  const [agenda, setAgenda] = useState("");
  const [user, setUser] = useState(props.match.params.id);
  const [appt, setAppt] = useState("");

  useEffect(() => {
    setAgenda(props.appointment);
  }, [props.appointment]);

  function handleSubmit(e) {
    e.preventDefault();
    props.updateAppointment({ agenda, user_id: user, id:props.match.params.id });
  }

  let listOfUsers = props.users.map(user => (
    <option key={user.id} value={user.id}>
      {user.first_name}
    </option>
  ));
  console.log("agenda", agenda);
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for='agenda'>Agenda</Label>
        <Input
          type='text'
          name='agenda'
          id='agenda'
          onChange={e => setAgenda(e.target.value)} //value should reflect the value of agenda we set to state
          value={agenda && agenda.agenda}
        />
      </FormGroup>
      <FormGroup>
        <Label for='selectUser'>Select User</Label>
        <Input
          type='select'
          name='user'
          id='selectUser'
          onChange={e => setUser(e.target.value)}
          value={user}
        >
          {listOfUsers}
        </Input>
      </FormGroup>

      <Button>Submit</Button>
    </Form>
  );
};

//getting all users and appointment with id from url
const mapStateToProps = (state, props) => {
  return {
    users: state.users.all,
    appointment: state.appointments.all.find(
      appt => appt.id == props.match.params.id
    )
  };
};

export default connect(mapStateToProps, { updateAppointment })(EditApptForm);
