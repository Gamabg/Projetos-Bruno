function Header(){
    return(
        <header>
        <nav>
            <div className="logo" style={{display: "flex" , alignItems: "center"}}>
                <span
                    style={{color:"#ffffff" , fontSize:"26px", fontWweight:"bold", letterSpacing: "1px" , marginleft: "20px"}}>BrunoGama</span>
            </div>
            <div className="hamburger">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <ul className="nav-links">
                <li><a href="https://www.web-leb.com/code">Home</a></li>
                <li><a href="https://www.web-leb.com/code">About me</a></li>
                <li><a href="https://www.web-leb.com/code">Skills</a></li>
                <li><a href="https://www.web-leb.com/code">Contact me</a></li>
            </ul>
        </nav>
    </header>
    )
}

export default Header