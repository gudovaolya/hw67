import React, {Component} from 'react';
import {connect} from 'react-redux';
import './AccessBlock.css';

class AccessBlock extends  Component {

    showCodeInStars = () => {
        return this.props.numbersCode.replace(/[0-9]/g, '*');
    };

    render () {
        return (
            <div className="access-block">
                <div className={this.props.screenClass.join(' ')}>
                    <span>{this.showCodeInStars()}</span>
                    <i>Access Granted</i>
                </div>
                <div className="keyboard">
                    <button onClick={this.props.addNumber}>7</button>
                    <button onClick={this.props.addNumber}>8</button>
                    <button onClick={this.props.addNumber}>9</button>
                    <button onClick={this.props.addNumber}>4</button>
                    <button onClick={this.props.addNumber}>5</button>
                    <button onClick={this.props.addNumber}>6</button>
                    <button onClick={this.props.addNumber}>1</button>
                    <button onClick={this.props.addNumber}>2</button>
                    <button onClick={this.props.addNumber}>3</button>
                    <button onClick={this.props.removeNumber}>&lt;</button>
                    <button onClick={this.props.addNumber}>0</button>
                    <button onClick={this.props.controlEnterCode}>E</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        numbersCode: state.numbersCode,
        screenClass: state.screenClass
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addNumber: (event) => dispatch({type: 'ADD', value: event.target.innerHTML}),
        removeNumber: () => dispatch({type: 'REMOVE'}),
        controlEnterCode: () => dispatch({type: 'CONTROL_ENTER_CODE'})

    }
};

export  default connect(mapStateToProps,mapDispatchToProps)(AccessBlock);