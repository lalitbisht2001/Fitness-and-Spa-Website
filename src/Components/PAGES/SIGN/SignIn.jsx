import styles from "./SignIn.module.css";

const SignIn = () => {
    return (
        <div className={styles.main}>
            <div className={styles.box}>
                <p className={styles.heading}>EQUINOX</p>
                <div className={styles.form_div}>
                    <p className={styles.sign}>Sign in</p>
                    <form>
                        <div className={styles.email}>
                            <label>Email</label>
                            <input type="email" />
                        </div>
                        <div className={styles.password}>
                            <label>Password</label>
                            <input type="password" />
                        </div>
                        <div style={{ fontSize: "0.9em", lineHeight: "1.4em" }}>
                            By clicking `Sign in` , you agree to our Terms and Conditions and consent to our Privacy Policy
                        </div>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <button className={styles.btn}>Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn;