import { NavLink } from 'react-router-dom'
import type { navObjType } from '../pages/HomePage';
import { memo } from 'react';
type objType = {
    currNav: navObjType;
}

const NavigationCard = ({ currNav }:objType) => {
    return (
      <li>
            <NavLink to={currNav.link}>
          <img src={currNav.img} alt="currNav.name" className= "h-40 w-60 object-cover shadow-xl rounded-md" />
        </NavLink>
      </li>
    );
}
export default memo(NavigationCard);