import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { connect } from "react-redux";
import { addAppointment } from "../store/appointments/actions";

// You can access props using the props parameter
const AddApptForm = props => {
  //creating state for agenda and user
  const [agenda, setAgenda] = useState("");
  const [user, setUser] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    props.addAppointment({ agenda, user_id: user });
  }

  let listOfUsers = props.users.map(user => (
    <option key={user.id} value={user.id}>
      {user.first_name}
    </option>
  ));

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for='agenda'>Agenda</Label>
        <Input
          type='text'
          name='agenda'
          id='agenda'
          onChange={e => setAgenda(e.target.value)}
          value={agenda}
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

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    users: state.users.all
  };
};

export default connect(mapStateToProps, { addAppointment })(AddApptForm);
