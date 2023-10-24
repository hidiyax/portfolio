import { Fragment } from "react";
import styles from "./FrontBox.module.css"
const FrontBox =()=>{
    return (
        <>  
            <div className={styles.backgroundBox}>
                <div className={styles.frontText}>
            <h2> Hey I'm Hidiya ---- Frontend Developer</h2>
            <h3> Based in Germany. Available for Freelance work </h3>
                </div>
            </div>
            
            <div className={styles.cartoon}>
                <div className={styles.imageContainer}>
                <div className={styles.lines}>

                <hr className={styles.lineHorizontal} />
    <hr className={styles.lineVertical} />
    <hr className={styles.lineDiagonal1} />
    <hr className={styles.lineDiagonal2} />
    <hr className={styles.lineDiagonal3} />
                <div className="image-container">
                <img src= "../images/IMG_824E16A4A290-1.jpeg" alt="cartoon image" />
                <div className="overlay"></div>
                </div>
    
                </div>
                
                </div>
            </div>
            
        </>
    )
}

export default FrontBox;