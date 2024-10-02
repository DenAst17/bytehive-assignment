import Bell from "../../../assets/icons/bell-01.svg";
import ChevronDown from "../../../assets/icons/chevron-down.svg";
import { UserDto } from "../../../models";
import { useGetUserProfile } from "../../../services/user/user";
import "./user-panel.component.css";

const UserPanelComponent = () => {
  const { data: userProfile, isLoading: isUserLoading } = useGetUserProfile();
  const user = userProfile! as UserDto;

  return (
    <div className="userPanel">
      <img src={Bell} />
      {!isUserLoading ? (
        <div className="avatarContainer">
          <img className="avatarImage" src={user.avatar} />
          <div className="userName">{user.name}</div>
        </div>
      ) : null}
      <img src={ChevronDown} />
    </div>
  );
};

export default UserPanelComponent;
