import styles from './style.module.css'

const TextInput = ({placeholder, onChange, name, id, className}) => {
    return (
        <input className={`${styles.input} ${className}`} type="text" name={name} id={id} placeholder={placeholder} onChange={onChange} />
    )
}

export default TextInput