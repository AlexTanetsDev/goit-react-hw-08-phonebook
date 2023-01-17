import { GreetingWraper } from "components/GreetingBox/GreetingBox.styled";
import { RegisterForm } from "components/RegisterForm/RegisterForm";


export default function Register() {
  return (
    <GreetingWraper>
      <RegisterForm />
    </GreetingWraper>
  );
};