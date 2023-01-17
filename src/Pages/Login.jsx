import { GreetingWraper } from "components/GreetingBox/GreetingBox.styled";
import { LoginForm } from "components/LoginForm/LoginForm";



export default function Login() {
    
    return (
        <GreetingWraper>
            <LoginForm />
        </GreetingWraper>
        
    );
};