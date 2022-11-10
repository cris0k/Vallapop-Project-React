import { logout } from "../adverts/auth/service"

const Header = ({isLogged, onLogout }) => {
    const handleLogoutClick = async () => {
        await logout();
        onLogout();
}

    return (
        <header>
            <nav>
                {isLogged ? (
                    <button   className="logout-bttn" onClick={handleLogoutClick}>Log out</button>
                ):(
                    <button className="login-bttn">Log in</button>
                )}
            </nav>
        </header>
        )
}
                
export default Header