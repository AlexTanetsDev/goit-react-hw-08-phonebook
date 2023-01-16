import { useAuth } from "Hooks";
import { Navigation } from "../Navigation/Navigation"
import { UserMenu } from "components/UserMenu/UserMenu";
import { StyledHeader } from "./AppBar.styled";

export const AppBar = () => {
 const { isLoggedIn } = useAuth();

    return (
        <StyledHeader>
            <Navigation />
            {isLoggedIn && <UserMenu />}
        </StyledHeader>
    );
};