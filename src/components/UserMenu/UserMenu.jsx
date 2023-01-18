import { useDispatch, useSelector } from "react-redux";
import { logOut } from "Redux/auth/operations";
import { selectUser } from "Redux/auth/selectors";
import { StyledLogoutBtn, UserName, UserWraper } from "./UserMenu.styled";
import { FaUserCircle } from "react-icons/fa";

export const UserMenu = () => {
    const {name} = useSelector(selectUser);
   const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(logOut());
    }
    return (
        <UserWraper>
            
            <UserName> <FaUserCircle size={25} color={ '#fff'} />{ name }</UserName>
            <StyledLogoutBtn onClick={handleClick}>Logout</StyledLogoutBtn>
        </UserWraper>
    );
};