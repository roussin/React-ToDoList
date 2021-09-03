import React from 'react'
import NavBar from './NavBar'
import ToDoList from './ToDoList'
import AddTask from './AddTask'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import initialData from '../initialData'
import uniqueid from 'uniqueid'
import Fetching from './Fetching'

class App extends React.Component{

    state = {
        tasks: [],
        fetching: true
    }

     /**
     * Simule le chargement des données par un serveur
     * l'utilisation de setTimeout() est à éviter car elle pose des problèmes de perfomance au niveau de l'application
     * la fonction componentDidMount fait partie du cycle de vie des composants et est appelée à la fin du montage du composant
     * https://fr.reactjs.org/docs/react-component.html#componentdidmount
     */
    componentDidMount = () => {
        let delay = Math.floor(Math.random() * 5000)
        setTimeout(() => {
          this.setState({
            fetching: false,
            tasks : initialData
          })
        }, delay)
      }

    /**
     * Modifie la valeur de la propriété 'completed' de l'état du composant
     * @param {*} taskId 
     */
    onToggleCompleted = (taskId) => {
        let taskToUpdate = this.state.tasks.find(task => task.id === taskId)
        taskToUpdate.completed = !taskToUpdate.completed

        this.setState(prevState => (
            prevState.tasks.map(task => {
                return task.id === taskId ?  taskToUpdate : task
            })
        ))
    }

    /**
     * Crée une nouvelle tâche 
     * @param {Object} newTaskName 
     */
    onAddTask = (newTaskName) => {
        let newTask = {
            id: uniqueid(),
            name: newTaskName,
            completed: false
        }

        this.setState(prevState => ({
            tasks: [...prevState.tasks, newTask]
        }))
    }

    /**
     * Modifie la liste des tâches c-à-d le state (état) de l'application expurgé des tâches déjà terminées
     * @return newState
     */
    onDeleteCompleted = () => {
        this.setState(prevState => {
            let newState = prevState.tasks.filter(task => !task.completed)
            return {
                tasks: newState
            }
        })
    }

    render(){
        return(
            <section id="todo">
                {this.state.fetching? <Fetching /> : null}
                <BrowserRouter>
                    <Switch>
                        <Route path="/add-task" render={(props) => <AddTask {...props} onAddTask={this.onAddTask} />} />
                        <Route path="/:filter?" render={(props) => <ToDoList {...props} tasks={this.state.tasks} onToggleCompleted={this.onToggleCompleted} />} />
                    </Switch>
                    <NavBar onDeleteCompleted={this.onDeleteCompleted} />
                </BrowserRouter>
            </section>
        )
    }
}

export default App