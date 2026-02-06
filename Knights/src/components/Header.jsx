import "./Header.css"
export default function Header(props)
{
    return(
        <div>

        <h1>{props.title}</h1>
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