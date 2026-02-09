import "./Header.css"
export default function Header({card})
{
    return(
        <div>

        {/* <h1>{title}</h1>
        <h1>{color}</h1>
        <h2>{year}</h2> */}

        {card}

        <header>
        <nav className="nav">
            <a href="#">Home </a>
            <a href="#">Contact us </a>
            <a href="#">Next webpage</a>
        </nav>
        </header>

        <footer className="ok">
            <a href="#">year</a>
            <a href="#"></a>
            <a href="#">Help</a>
        </footer>

        </div>
    )
} 