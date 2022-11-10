import { Link , NavLink } from "react-router-dom";
import { logout } from "../adverts/auth/service"

const Header = ({isLogged, onLogout }) => {
    const handleLogoutClick = async () => {
        await logout();
        onLogout();
}

    return (
        <header>
            <nav className="header-nav">
                <NavLink to="/api/v1/adverts/new" className="nav-link" style={({ isActive }) => (isActive ? {  backgroundColor : 'var(--button-hover)' } : null)}>
                New Advert
                </NavLink>
                {isLogged ? (
                    <button   className="logout-bttn" onClick={handleLogoutClick}>Log out</button>
                ):(
                    <button as={Link} className="login-bttn">Log in</button>
                )}
            </nav>
        </header>
        )
}
                
export default Header