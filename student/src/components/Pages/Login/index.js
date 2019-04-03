import React, { Component } from "react";
import axios from 'axios';
import MainForm from "../../Form";
import {
  Title,
  Title1,
  StyledPage,
  StyledBk,
  StyledSpan,
  StyledLink,
  StyledDiv
} from "./index.style";
import bg from "./login-bg.png";

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

//   componentDidMount() {
//     const { history } = this.props;
//     axios.post("/login").then(({ data }) => {
//       if (data.success) {
//         if (data.success) {
//           history.push("/home");
//         } else {
//           this.setState({ error: data.error });
//         }
//     }
//   });
// }
    onSubmitAction = (values) => new Promise ((resolve, reject) => {
      const { username, password } = values;
      const { history } = this.props;
      axios
        .post("/login", { username, password })
        .then(({ data }) => {
          console.log(data);
          if (data.success) {
            history.push("/");
            resolve();
          } else {
            reject(new Error('Username and password is not matched'));
          }
        })
        .catch(error => {
          this.setState({ error: error.message });
          reject();
        });
    });



  render() {
    const initialValues = { name: "", password: "" };
    const fields = [
      {
        type: "text",
        name: "name",
        placeholder: "Name"
      },
      {
        type: "password",
        name: "password",
        placeholder: "Password"
      }
    ];
    return (
      <React.Fragment>
        <StyledPage>
          <StyledBk src={bg} />
          <Title>Great British Money</Title>
          <Title1>Quiz</Title1>
          <MainForm
            fields={fields}
            action={this.onSubmitAction}
            operationName="Login"
            initialValues={initialValues}
          />
          <StyledDiv>
            <StyledSpan>New User ?</StyledSpan>
            <StyledLink> Signup </StyledLink>
          </StyledDiv>
        </StyledPage>
      </React.Fragment>
    );
  }
}

export default Login;
