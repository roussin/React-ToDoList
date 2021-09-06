// Création des actions initiales 
// le composant appel l'action, celle-ci réagit -> va dans les reducers pour finaliser le nouvel état -> changement de l'application

export const getInitialTasks = () => {
    return {
        type: 'GET_TASKS',
    }
}

export const addTask = (task) => {
    return {
        type: 'ADD_TASKS',
        task
    }
}

export const removeTask = (task) => {
    return {
        type: 'REMOVE_TASKS',
        task
    }
}

export const completedTask = (task) => {
    return {
        type: 'COMPLETED_TASKS',
        task
    }
}