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

    const handleCreateObjective = () => {
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

    return (
        <div>
            <div><h2>Today</h2></div>
            <div className={styles.objectives}>
                {R.map(objective => (
                    <TodoCard
                        key={objective.id} 
                        objective={objective}
                        onComplete={handleCompleteObjective}
                        onDelete={handleDeleteObjective}
                    />
                ), objectives)}
            </div>
            <div className={styles.row}>
                <input
                    className={styles.textbox}
                    aria-label="Add objective"
                    value={newObjectiveText}
                    onChange={(e) => setNewObjectiveText(e.target.value)}
                    />
                <button
                    className={styles.button}
                    onClick={handleCreateObjective}
                    >
                    Add Objective
                </button>
            </div>
        </div>
    )

}