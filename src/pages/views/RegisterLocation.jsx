import React, { useState, useCallback } from 'react';
import Axios from 'axios';
import { history } from '../../history';
import Location from '../../components/registerlocation/Location';
import LocationTable from '../../components/registerlocation/LocationTable';
import '../../styles/views/viewbackground.css';
import '../../styles/views/registerlocation.css'



function RegisterLocation(props) {

    const initialState = {
        Sigla: '',
        Nome: ''
    };
    const [state, setState] = useState(initialState);
    const [table, setTable] = useState([])


    const isLogged = localStorage.getItem('token')
    const [tipo, setTipo] = useState(null);
    const [error, setError] = useState("");
    const headers = { 'Authorization': isLogged };

    const onChangeValue = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    };

    const cadastrar = async () => {
        const resposta = await Axios.post("http://localhost:8080/local/cadastrar", state, {
            headers: headers
        });
        return resposta.data;
    };

    const submitForm = async (e) => {
        e.preventDefault();
        const resposta = await cadastrar();
        if (resposta.tipo === "sucesso") {
            setTipo(false);
            setState({ ...initialState });
            getLocations();
            history.push('/registerlocation');
        } else {
            setTipo(true)
            setError(resposta.resposta)
        };
    };

    const getLocations = useCallback (function() {
        Axios.get("http://localhost:8080/local/listar", {
            headers: headers
        }).then(resposta => setTable(resposta.data.resposta));
    }, []
    );

    const deleteLocation = useCallback (function(table) {
        Axios.delete(`http://localhost:8080/local/deletar/${table.ID}`, {
            headers: headers  
        }).then(resposta => getLocations());
    }, []
    );

    return (
        <div className="viewbackground" >
            <div className="register-location" >
                <Location onChangeValue={onChangeValue}
                    Sigla={state.Sigla}
                    Nome={state.Nome}
                    submitForm={submitForm}
                    tipo={tipo}
                    error={error}
                />

                <hr />

                <LocationTable table={table}
                getLocations={getLocations}
                deleteLocation={deleteLocation}
                />

            </div>
        </div>
    )
};

export default RegisterLocation;