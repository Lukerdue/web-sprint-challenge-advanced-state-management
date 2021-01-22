import axios from 'axios';

export const getSmurfs= () =>dispatch=>{
    dispatch({ type:"API_START" })
    axios.get('http://localhost:3333/smurfs')
    .then(res=>{
        dispatch({ type:"API_GOOD", payload: res.data })
    })
    .catch(drama=>{
        dispatch({ type: "API_BAD", payload: drama})
    })
}

export const postSmurf= (smurf)=> dispatch =>{
    dispatch({ type: "API_START" })
    axios.post("http://localhost:3333/smurfs", smurf)
    .then(res=>{
        getSmurfs();
    })
    .catch(drama=>{
        dispatch({ type: "API_BAD", payload: drama})
    })
}

export const err = (error) =>dispatch=>{
    dispatch({ type: "ERR", payload: error})
}

//Task List:
//1. Add fetch smurfs action: 
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.