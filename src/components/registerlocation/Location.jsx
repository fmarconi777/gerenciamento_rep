import React from 'react';


function Location(props) {
   
    return (
        <div className="register" >
            <h2>Cadastro de Local</h2>
            {
                props.tipo &&
                <div className={props.tipo === true ? "error" : ""} >
                    <p>{props.error}</p>
                </div>
            }
            <form onSubmit={props.submitForm} >
                <div className="form-grid-location" >
                    <label className="Nome" >Nome:
                        <input type="text" value={props.Nome} onChange={props.onChangeValue} name="Nome" />
                    </label>
                    <label className="Sigla" >Sigla:
                        <input type="text" value={props.Sigla} onChange={props.onChangeValue} name="Sigla" />
                    </label>
                    <button className="Cadastrar" type="submit" >Cadastrar</button>
                </div>
            </form>
        </div>
    );
}

export default Location;