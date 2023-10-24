import {Fragment} from "react";
import {NavLink} from "react-router-dom"
import styles from "./Navigation.module.css";
const Navigation =()=>{
    return (
        <>
        <div className={styles.nav}>
        <NavLink to="projects" > Projects </NavLink>
        <NavLink to =""> About </NavLink>
        <NavLink to=""> Blog</NavLink>

        </div>
        </>
    )
}

export default Navigation;