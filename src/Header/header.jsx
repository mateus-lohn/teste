import logo from '../Header/teste.png'

function Header(){

    return(

        <header className="App-header">
            <img src={logo} alt='aaaa'
            className='App-img'
            />
            <div className='App-a'>
            Home
            </div>
            <a className="App-a" href="https://instagram.com/lami_itm">
            Perfil
            </a>
            
        </header>
        
        

    )

}
export default Header