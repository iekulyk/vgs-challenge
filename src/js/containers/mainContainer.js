import React from 'react';
import { connect } from 'react-redux';
import MainView from '../components/mainView';
import MainGridContainer from './mainGridContainer';
import { childViewNames } from '../constants';

const childFromState = (state) => {
    return <MainGridContainer/>;
};

const mapStateToProps = (state, ownProps) => {
    let child;

    if (ownProps.children) {
        child = ownProps.children;
    }
    else {
        child = childFromState(state);
    }

    return {
        child: child
    };
};

const MainContainer = connect(mapStateToProps)(MainView);

export default MainContainer;
