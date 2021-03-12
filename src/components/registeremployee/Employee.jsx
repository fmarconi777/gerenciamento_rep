import React from 'react';


function Employee(props) {
   
    return (
        <div className="register" >
            <h2>Cadastro de Funcionário</h2>
            {
                props.tipo &&
                <div className={props.tipo === true ? "error" : ""} >
                    <p>{props.error}</p>
                </div>
            }
            <form onSubmit={props.submitForm} >
                <div className="form-grid" >
                    <label className="Nome" >Nome:
                        <input type="text" value={props.Nome} onChange={props.onChangeValue} name="Nome" />
                    </label>
                    <label className="Login" >Login:
                        <input type="text" value={props.Login} onChange={props.onChangeValue} name="Login" />
                    </label>
                    <label className="Area" >Área:
                        <input type="text" value={props.Area} onChange={props.onChangeValue} name="Area" />
                    </label>
                    <label className="Status" >Status:
                        <input type="radio" value={"A"} checked={props.Status === "A"} onChange={props.onChangeValue} name="Status" /> <span>Ativo</span>
                        <input type="radio" value={"I"} checked={props.Status === "I"} onChange={props.onChangeValue} name="Status" /> <span>Inativo</span>
                    </label>
                    <label className="Matricula" >Matrícula:
                        <input type="text" value={props.Matricula} onChange={props.onChangeValue} name="Matricula" />
                    </label>
                    <label className="Senha" >Senha:
                        <input type="password" value={props.Senha} onChange={props.onChangeValue} name="Senha" />
                    </label>
                    <button className="Cadastrar" type="submit" >Cadastrar</button>
                </div>
            </form>
        </div>
    );
}

export default Employee;