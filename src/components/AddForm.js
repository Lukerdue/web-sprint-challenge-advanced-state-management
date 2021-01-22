import React from 'react';
import { postSmurf } from '../actions/index';
import { connect } from 'react-redux';

class AddForm extends React.Component {
    constructor(){
        super();
        this.state={
            newSmurf: {
                name: "",
                nickName: "",
                role: "",
                desc: "",
            }
        }
    }
    

    handleChange = (e)=>{
        this.setState({newSmurf: {
            ...this.state.newSmurf,
            [e.target.id]: e.target.value
        }})
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.postSmurf(this.state.newSmurf);
    }

    render() {
        return(<section>
            <h2>Add Smurf</h2>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label><br/>
                    <input onChange={this.handleChange} name="name" id="name" value={this.state.newSmurf.name}/>
                    <label htmlFor="nickName">NickName:</label><br/>
                    <input onChange={this.handleChange} name="nickName" id="nickName" value={this.state.newSmurf.nickName}/>
                    <label htmlFor="role">Role:</label><br/>
                    <input onChange={this.handleChange} name="role" id="role" value={this.state.newSmurf.role}/>
                    <label htmlFor="desc">Description:</label><br/>
                    <input onChange={this.handleChange} name="desc" id="desc" value={this.state.newSmurf.desc}/>
                </div>

                {this.props.error && <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: </div>}
                <button>Submit Smurf</button>
            </form>
        </section>);
    }
}

const mapStateToProps = (state)=>{
    return{
        error: state.error,
        isFetching: state.isFetching
    }
}

export default connect(mapStateToProps, { postSmurf })(AddForm);

//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATTERN OF SHOWN FOR NAME.
//5. Build eventhandler and listener needed to change the state.
//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.