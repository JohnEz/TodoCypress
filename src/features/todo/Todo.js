import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    add,
    remove,
    setComplete,
} from './todoSlice';
import * as R from 'ramda';
import { TodoCard } from '../../components/todoCard/TodoCard';
import * as selectors from './selectors';
import styles from './Todo.module.css';


export function Todo() {
    const objectives = useSelector(selectors.getObjectives);
    const [newObjectiveText, setNewObjectiveText] = useState('');
    const dispatch = useDispatch();

    const handleCreateObjective = (e) => {
        // stop page reload
        e.preventDefault();

        dispatch(add({text: newObjectiveText}))
        setNewObjectiveText('');
    }

    const handleCompleteObjective = (id, isChecked) => {
        console.log({id, isChecked});
        dispatch(setComplete({id, isComplete: isChecked}));
    }

    const handleDeleteObjective = (id) => {
        dispatch(remove({id}));
    }

    const remainingTasksCount = R.filter(objective => !objective.isComplete, objectives).length;

    const statsText = remainingTasksCount === 1 ? '1 item left' : `${remainingTasksCount} items left`;

    return (
        <div data-test-id="todo">
            <div><h2 className={styles.title}>Todo</h2></div>
            <div className={styles.body}>
                <form onSubmit={handleCreateObjective}>
                    <input
                        data-test-id="todo-input"
                        className={styles.textbox}
                        placeholder='What do you need to do?'
                        aria-label="Add objective"
                        value={newObjectiveText}
                        onChange={(e) => setNewObjectiveText(e.target.value)}
                        />
                </form>
                <div className={styles.objectives} data-test-id="todo-objectives">
                    {R.map(objective => (
                        <TodoCard
                            data-test-id={`todo-objective-${objective.id}`}
                            key={objective.id} 
                            objective={objective}
                            onComplete={handleCompleteObjective}
                            onDelete={handleDeleteObjective}
                        />
                    ), objectives)}
                </div>
                <div data-test-id="todo-counter" className={styles.stats}>{statsText}</div>
            </div>
        </div>
    )

}