import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as TodoActions from '../store/actions/todos.actions';

const style = {
    marginTop: '40px',
};

class TodoLayout extends Component {
    render() {
        const {todos, actions} = this.props;
        return (
            <>
                <div>
                    <Header addTodo={ actions.addTodo }/>
                    <MainSection todos={ todos } actions={ actions }/>

                </div>
                <div style={ style }>
                    <Link to={ '/demo' }>
                        Go to Demo page
                    </Link>
                </div>
            </>
        );
    }
}

TodoLayout.propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        todos: state.todos
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(TodoActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoLayout);
