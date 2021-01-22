import React from 'react';
import { connect } from 'react-redux';

class Smurf extends React.Component {
    render() {
        const { smurf } = this.props;
        console.log(smurf)
        return(<div data-testid="smurf" className="card">
            <h3>{this.props.smurf.name}</h3>
            <p>{this.props.smurf.nickname}</p>
            <p>{this.props.smurf.position}</p>
            <p>{this.props.smurf.description}</p>
        </div>);
    }
}

const mapStateToProps= (state, ownProps)=>{
    return{
        smurf: state.smurfs.find(smurf=>{
            if(smurf.id === ownProps.smurf.id){
                return smurf
            }
        })
    }
}

export default connect(mapStateToProps)(Smurf);

//Task List:
//1. Access smurf to be displayed through props.
//2. Display the name, position, nickname and description of the provided smurf as needed.
//3. Style as needed. (feel free to make use of the bootstrap card structure: https://getbootstrap.com/docs/4.0/components/card/)
//4. DO NOT DELETE THE data-testid FIELD! It is used for sprint grading.