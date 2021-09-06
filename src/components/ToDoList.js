import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToDo from './ToDo';

class ToDoList extends Component {
    render () {
        return (
            <>
                <h1 className="m-3">Liste de tâches</h1>
                <ul className="list-group m-3">
                    {
                        this.props.tasks.map((task) => <ToDo task={task} key={task.id} />)
                    }
                </ul>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
       tasks: state.tasks
    }
}

export default connect(mapStateToProps)(ToDoList);