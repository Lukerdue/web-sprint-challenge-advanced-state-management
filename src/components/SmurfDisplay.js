import React from 'react';
import { getSmurfs } from '../actions/index';
import Smurf from './Smurf'
import { connect } from 'react-redux';

export class SmurfDisplay extends React.Component {
    componentDidMount(){
        this.props.getSmurfs()
    }
    render() {
        return(<div>
            {this.props.isFetching ? <p>Loading...</p>:
            this.props.smurfs.map(smurf=>{
                return <Smurf key={Date.now()} smurf={smurf}/>
            })}
        </div>)
    }
}

const mapStateToProps=(state)=>{
    return{
        smurfs: state.smurfs,
        isFetching: state.isFetching
    }
}

export default connect(mapStateToProps, { getSmurfs })(SmurfDisplay);

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.