import React from 'react';
import { connect } from 'react-redux';
import uniqueid from 'uniqueid';
import { addTask} from '../actions';

class AddTask extends React.Component{

    handleSubmit = (e) => {
        e.preventDefault()
        let item = {
            id: uniqueid(),
            name: this.newTask.value,
            completed: false
        }
        this.props.addTask(item)
        this.props.history.push('/')
    }

    render(){
        return (
            <section>
                <h1 className="m-3">Nouvelle tâche</h1>
                <div className="card mx-3">
                    <form className="card-body" onSubmit={(e) => this.handleSubmit(e)}>
                        <div className="form-group">
                            <label form="taskName" className="mb-3">Nom de la tâche</label>
                            <input type="text" className="form-control" name="taskName" id="taskName" required ref={input => this.newTask = input} />
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">Créer</button>
                    </form>
                </div>
            </section>
        )
    }//end return in render
}//end render

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (item) => {
            dispatch(addTask(item))
        },
    }
}

//connection des composants aux éléments Redux
export default connect(null, mapDispatchToProps)(AddTask);