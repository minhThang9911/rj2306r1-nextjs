import styles from "~/styles/Login.module.css";

export default function Home() {
    return (
        <div className={styles.signin}> 
            <div className={styles["content"]}>
                <h2>Sign In</h2>
                <div className={styles["form"]}>
                    <div className={styles["inputBox"]}>
                        <input
                            type="text"
                            required
                        />{" "}
                        <i>Username</i>
                    </div>

                    <div className={styles["inputBox"]}>
                        <input
                            type="password"
                            required
                        />{" "}
                        <i>Password</i>
                    </div>

                    <div className={styles["links"]}>
                        {" "}
                        <a href="#">Forgot Password</a> <a href="#">Signup</a>
                    </div>

                    <div className={styles["inputBox"]}>
                        <input
                            type="submit"
                            value="Login"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
