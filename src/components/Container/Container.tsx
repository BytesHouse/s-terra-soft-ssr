import { IContainerProps } from "./Container.interface";
import styles from './Container.module.css'

export default function Container({children}: IContainerProps) {
    return <div className={styles.container}>{children}</div>
}