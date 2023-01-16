import { GreetingBox } from "components/GreetingBox/GreetingBox";
import { HomeView } from "components/HomeView/HomeView";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "Redux/auth/selectors";

export default function Home() {
    const isLoggedIn = useSelector(selectIsLoggedIn);
   

    return (
        <>
            { !isLoggedIn ? (<GreetingBox/>) : (<HomeView/>)} 
        </>
       
       
    );
    
};