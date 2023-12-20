export function Navibar() {
    return (
        <>
            <header className="header">
            <nav className="nav">
                <a href="/" className="site-title">
                    <div className="font-effect-shadow-multiple">
                      
                     StarBunny Accessories
                     <img src="src\images\websiteImages\logo-star.png" alt="starbunny logo"  className="nav-logo"/>
                     </div>
                     </a>
                <ul>
                    <li>
                    <a href="/login" >Login</a>
                    </li>
                    <li>
                    <a href="/Indkøbskurv">Indkøbskurv</a>
                    </li>
                    <li>
                    <a href="/liked">Farvoritter</a>
                    </li>
                </ul>
            </nav>
            </header>
        </>
    )
}
