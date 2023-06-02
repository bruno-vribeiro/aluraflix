import Banner from "../Banner";
import Button from "../Button";
import "./Header.css"


const Header = ({logo, texto})=>{
    return(
        <header className="header">
            <img 
                src={logo} 
                alt="logo" 
            />
            <Banner />
            <Button texto={texto}/>
            
           
        </header>
    )   
}

export default Header;