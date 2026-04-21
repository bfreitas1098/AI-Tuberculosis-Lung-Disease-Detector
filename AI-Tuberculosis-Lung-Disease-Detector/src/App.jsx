import "./App.css";
import img from "./sample-image.png";
import {
  BsCloudUpload,
  BsImage,
  BsActivity,
  BsCheckCircle,
  BsExclamationTriangle,
  BsGithub,
} from "react-icons/bs";

function App() {
  return (
    <main>
      <header style={styles.header}>
        <h1 style={styles.h1}>Tuberculosis Lung Disease Detector</h1>
        <p style={styles.p}>
          Tuberculosis is a contagious and often fatal infection that is caused
          by a bacteria called{" "}
          <span className="highlight" style={styles[".highlight"]}>
            Mycobacterium tuberculosis
          </span>{" "}
          that attacks the lungs and is one of the main causes of death
          globally. Tuberculosis is treatable with a combination of specific
          antibiotics; however, it is not always correctly diagnosed. The
          purpose of this project is to improve diagnostics and treatment of the
          disease, which ultimately would improve treatment and leave
          tuberculosis in the past globally.
        </p>
      </header>

      <div className="cards" style={styles[".cards"]}>
        <div className="image-upload-card" style={styles[".image-upload-card"]}>
          <button style={styles.button}>
            Upload X-Ray/Lung Scan <BsImage size={21} />
          </button>
          <div className="img-container" style={styles.imageContainer}>
            {/* <img src={img} style={styles.image} /> */}
          </div>
          <button style={styles.mutedButton}>Detect</button>
        </div>
        <div className="result-card" style={styles[".result-card"]}>
          <div className="prediction-container" style={styles.resultContainer}>
            <h3 style={styles.h3}>
              Prediction <BsActivity size={28} /> :
            </h3>
            <span className="prediction-result" style={styles.result}>
              Tuberculosis
            </span>
          </div>
          <div className="confidence-container" style={styles.resultContainer}>
            <h3 style={styles.h3}>
              Confidence <BsCheckCircle size={24} /> :
            </h3>
            <span className="confidence-result" style={styles.result}>
              98.0%
            </span>
          </div>
        </div>
      </div>

      <footer style={styles.footer}>
        <p style={styles.p}>
          This project was built by Shelly Abramov, Barbara Freitas, Dinesh
          Ramdeen, and Gabriel Dolan
        </p>
        <a href="https://github.com/bfreitas1098/AI-Tuberculosis-Lung-Disease-Detector">
          <BsGithub size={28} color="#00d1ff" style={styles.github} />
        </a>
      </footer>
    </main>
  );
}

export default App;

const styles = {
  header: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 15,
  },

  h1: {
    color: "var(--primary)",
    fontSize: "5rem",
    fontWeight: 700,
  },

  p: {
    fontSize: "1.6rem",
    lineHeight: 1.35,
  },

  ".highlight": {
    color: "var(--muted)",
    fontSize: "1.6rem",
  },

  ".cards": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10rem 0",
    backgroundColor: "var(--cards)",
    height: "60rem",
  },

  ".image-upload-card": {
    border: "1px solid var(--muted)",
    height: "100%",
    padding: "2rem",
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "3rem",
  },

  button: {
    backgroundColor: "var(--secondary)",
    color: "var(--bg)",
    fontSize: "2rem",
    fontWeight: 600,
    // border: "1px solid var(--text)",
    border: "none",
    padding: "1rem 1.5rem",
    borderRadius: 8,
    width: "37rem",
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
    gap: "1.5rem",
    cursor: "pointer",
  },

  mutedButton: {
    backgroundColor: "var(--muted)",
    color: "var(--bg)",
    fontSize: "2rem",
    fontWeight: 600,
    // border: "1px solid var(--text)",
    border: "none",
    padding: "1rem 1.5rem",
    borderRadius: 8,
    width: "37rem",
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
    gap: "1.5rem",
  },

  ".result-card": {
    border: "1px solid var(--muted)",
    height: "100%",
    padding: "2rem",
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "10rem",
  },

  h3: {
    fontSize: "3.5rem",
    color: "var(--secondary)",
  },

  resultContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
  },

  result: {
    fontSize: "2.5rem",
    // color: "var(--muted)",
  },

  imageContainer: {
    border: "1px solid var(--muted)",
    width: "80%",
    height: "37rem",
  },

  image: {
    width: "100%",
  },

  footer: {
    borderTop: "2px solid var(--muted)",
    padding: "4rem 0 5rem",
  },

  github: {
    marginTop: "3rem",
  },
};
