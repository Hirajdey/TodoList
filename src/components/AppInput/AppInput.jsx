import Styles from './AppInput.module.scss'



const AppInput = ({onChange, value, type, placeHolder}) => {
    return (
        <input type={type} value={value} placeholder={placeHolder} onChange={onChange} className={Styles.main}/>
    )   
}
   
   export default AppInput;