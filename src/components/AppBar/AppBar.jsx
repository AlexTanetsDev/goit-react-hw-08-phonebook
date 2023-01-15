import { useAuth } from "Hooks";
import { Navigation } from "../Navigation/Navigation"
import { UserMenu } from "components/UserMenu/UserMenu";
import { AuthNav } from "components/AuthNav/AuthNav";
import { StyledHeader } from "./AppBar.styled";

export const AppBar = () => {
 const { isLoggedIn } = useAuth();

    return (
        <StyledHeader>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </StyledHeader>
    );
};