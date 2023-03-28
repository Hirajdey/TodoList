
import classnames from 'classnames';

// Styles
import Styles from './AppButton.module.scss';

const AppButton = ({labelText, btnType, isValid, onClick, children, classMain}) => {
    return (
        <button type={btnType} disabled={isValid} onClick={onClick} className={classnames(Styles.main, classMain)}>{labelText} {children}</button>
    )   
}
   
export default AppButton;