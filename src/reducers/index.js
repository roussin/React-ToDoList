// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case 'GET_TASKS':
            return {
                ...state,
            }
        case 'ADD_TASKS':
            return {
                ...state,                                // ancien état avec 
                tasks: [...state.tasks, action.task],    // les nouvelles informations - nouvelle tâche
            }
        case 'REMOVE_TASKS':
            return {
                ...state,                                // ancien état avec 
                tasks: [...state.tasks, action.task],    // les nouvelles informations - nouvelle tâche
            }
        case 'COMPLETED_TASKS':
            return {
                ...state,                                // ancien état avec 
                tasks: [...state.tasks, action.task],    // les nouvelles informations - nouvelle tâche
            }
        default:
            return state
    }
}

/**
 * le reducer est une fonction qui comprend le changement de notre état ou store et qui est appelé par le type d'action qui doit être exécuté.
 * - le composant appel une action "GET_TASK ou ADD_TASK"
 * - elle va être appelée avec la fonction getInitialTask ou addTask
 * - elle exécute le reducer avec le bon type d'action "GET_TASKS ou ADD_TASK"
 * - avec le type d'action, on crée (return) un nouvel état de l'application (state)
 */