import { useContext } from "react";
import { Link , NavLink } from "react-router-dom";
import AuthContext from "../adverts/auth/Context";
import { logout } from "../adverts/auth/service"

const Header = () => {
    const { isLogged, handleLogout } = useContext(AuthContext);     

    const handleLogoutClick = async () => {
        await logout();
        handleLogout();
    };

    return (
        <header>
            <NavLink to='/' className="main-title">
                <h1 >Vallapop</h1>
            </NavLink>
            <section> 
                <nav className="header-nav">
                    <NavLink to="/api/v1/adverts/new" className="nav-link" style={({ isActive }) => (isActive ? {  backgroundColor : 'var(--disabled)' } : null)}>
                    New Advert
                    </NavLink>
                    {isLogged ? (
                        <button   className="logout-bttn" onClick={handleLogoutClick}>Log out</button>
                    ):(
                        <button as={Link} to='/login' className="login-bttn">Log in</button>
                    )}
                </nav>
            </section>
        </header>
        )
}
                
export default Header