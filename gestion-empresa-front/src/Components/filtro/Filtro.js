import './filtro.scss';

const Filtro = ({ filterText, filter, placeholder , index}) => {


    return(
        <div className='filtro'>
            <input className= 'filtro_input' placeholder = { placeholder } value= { filterText[index].text } onChange={e => filter(e.target.value, index)}/>
            <button className = 'filtro_boton' onClick = {()=>filter('', index)}>X</button>
        </div>
    )
    
}

export default Filtro;