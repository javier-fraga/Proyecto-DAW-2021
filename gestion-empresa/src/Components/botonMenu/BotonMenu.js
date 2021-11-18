import './botonMenu.scss';

const BotonMenu = ({ toggleMenu }) => {

    return(
        <div className='boton' onClick= {toggleMenu}/>
    )
}

export default BotonMenu;