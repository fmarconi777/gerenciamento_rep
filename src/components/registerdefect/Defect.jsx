import React from 'react';


function Defect(props) {
   
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
                <div className="form-grid-defect" >
                    <label >Defeito:
                        <input type="text" value={props.Defeito} onChange={props.onChangeValue} name="Defeito" />
                    </label>
                    <label className="Descricao" >Descrição:
                        <textarea className="Descricao" value={props.Descricao} onChange={props.onChangeValue} name="Descricao"  rows={5} cols={20} />
                    </label>
                    <button className="Cadastrar" type="submit" >Cadastrar</button>
                </div>
            </form>
        </div>
    );
}

export default Defect;