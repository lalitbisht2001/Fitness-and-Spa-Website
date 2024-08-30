import styles from "./Style.module.css";
// import "./form.css";

const Form = () => {
  return (
    <form className={styles.form}>
      <div className={styles.form_column}>
        <div className={styles._name}>
          <label >First Name</label>
          <input type="text" />
        </div>
        <div className={styles._name}>
          <label>Last Name</label>
          <input type="text" />
        </div>
      </div>
      <div className={styles.form_box}>
        <label className={styles._label}>Email Address</label>
        <input type="text" className={styles._input} />
      </div>
      <div className={styles.form_box}>
        <label className={styles._label}>Company Email (optional)</label>
        <input type="text" className={styles._input} />
      </div>
      <div className={styles.form_box}>
        <label className={styles._label}>Phone Number</label>
        <input type="text" className={styles._input} />
      </div>
      <div className={styles.form_box}>
        <label className={styles._label}>Select a club</label>
        <input type="text" className={styles._input} />
      </div>
      <div className={styles.form_box}>
        <p className={styles.terms}>
          By continuing, I agree to the Equinox <span>Terms & Conditions</span> <span>Privacy Policy</span>
          and that Equinox brand companies and their membership advisors can contact me regarding promotions,
          marketing, products, services, and other information that may interest me.
        </p>
      </div>
      <div className={styles.form_box}>
        <button className={styles.btn}>
          Visit a Club
        </button>
      </div>
    </form>
  )
}

export default Form
