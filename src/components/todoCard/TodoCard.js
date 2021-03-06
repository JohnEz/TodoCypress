import React from 'react';
import styles from './TodoCard.module.css';


export function TodoCard(props) {

    const {
        objective, 
        onDelete, 
        onComplete, 
        "data-test-id": dataTestId,
    } = props;

    const handleComplete = (e) => {
        console.log({e});
        onComplete(objective.id, e.target.checked);
    }

    const handleDelete = () => {
        onDelete(objective.id);
    }

    return (
        <div className={styles.card} data-test-id={dataTestId}>
            <div className={`${styles.fit} ${styles.container} ${styles.completeButton}`}>                
                <input
                    data-test-id={`${dataTestId}-complete`}
                    className={styles.checkbox}
                    type="checkbox"
                    value="Complete"
                    checked={objective.isComplete}
                    onChange={handleComplete}
                    />
            </div>
            <div className={`${styles.fill} ${styles.container}`}>
                <label className={styles.value}>{objective.text}</label>
            </div>
            <div className={`${styles.fit} ${styles.container}`}>
                    <button
                    data-test-id={`${dataTestId}-delete`}
                    className={styles.deleteButton}
                        onClick={handleDelete} 
                    >X</button>
            </div>
        </div>
    )
}