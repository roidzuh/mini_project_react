import { NavLink } from "react-router-dom";

const MainNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink>Home</NavLink>
        </li>
        <li>
          <NavLink>Users</NavLink>
        </li>
        <li>
          <NavLink>Settings</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
