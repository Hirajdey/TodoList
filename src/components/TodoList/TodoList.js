
import AppButton from '../AppButton/AppButton';
import AppInput from '../AppInput/AppInput';
import Styles from './TodoList.module.scss';

const TodoList = ({todoText, onClickEdit, onClickDelete, onChange}) => {
    return (
        <div className={Styles.main}>
            <div className={Styles.row}>
                <div className={Styles.textCol}>
                    <h4>{todoText}</h4>
                </div>
                <div className={Styles.buttonsCol}>
                    <AppButton labelText="Edit" onClick={onClickEdit}/>
                    <AppButton labelText="Delete" onClick={onClickDelete}/>
                </div>
            </div>
        </div>
    )   
}
   
export default TodoList;