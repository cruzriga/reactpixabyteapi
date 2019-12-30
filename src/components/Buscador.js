import React from 'react'
import Error from "./Error";
function Buscador({setParentQuery}) {
    const [query,setQuery] = React.useState('');
    const [error,setError] = React.useState(false);
    const buscarImagen = e=>{
        e.preventDefault();
        if(query === '') {
            setError(true);
            return;
        }
        setParentQuery(query);
        setError(false);
    };
    return(<form action="" onSubmit={buscarImagen}>
            <div className="row">
                <div className="form-group col-md-8">
                    <input type="text"
                        className="form-control form-control-lg"
                        placeholder="Buscar imagen: Ej, Futbol, cafe..."
                        onChange={e => {setQuery(e.target.value)}}
                    />
                </div>
                <div className="form-group col-md-4">
                    <input type="submit"
                        className="btn btn-lg btn-danger btn-block"
                        value="Buscar"
                    />
                </div>
            </div>
            {(error)? <Error mensaje="Agrega algo para buscar" /> : '' }
        </form>);
}
export default Buscador;