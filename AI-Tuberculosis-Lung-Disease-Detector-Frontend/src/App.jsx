import "./App.css";
import { useRef, useState } from "react";
import { BsImage, BsActivity, BsCheckCircle, BsGithub } from "react-icons/bs";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const fileInputRef = useRef(null);

  function handleImageChange(e) {
    const file = e.target.files[0];

    if (!file) return;

    setSelectedImage(file);
    setPreview(URL.createObjectURL(file));
    setResult(null);
  }

  async function handleDetect() {
    if (!selectedImage) {
      alert("Please upload an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedImage);

    try {
      setLoading(true);

      const response = await fetch("http://localhost:8000/predict", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Prediction error:", error);
      alert("Something went wrong while analyzing the image");
    } finally {
      setLoading(false);
    }
  }

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
          <input type="file" accept="image/*" ref={fileInputRef} onChange={handleImageChange} style={{ display: "none" }} />

          <button style={styles.button} onClick={() => fileInputRef.current.click()}>
            Upload X-Ray/Lung Scan <BsImage size={21} />
          </button>

          <div className="img-container" style={styles.imageContainer}>
            {preview ? (
              <img src={preview} alt="Uploaded scan" style={styles.image} />
            ) : (
              <p style={styles.placeholderText}>No image uploaded yet</p>
            )}
          </div>

          <button style={{ ...(selectedImage ? styles.button : styles.mutedButton), cursor: selectedImage && !loading ? "pointer" : "not-allowed", opacity: selectedImage && !loading ? 1 : 0.6, }} onClick={handleDetect} disabled={!selectedImage || loading}>{loading ? "Analyzing..." : "Detect"}</button>
        </div>
        <div className="result-card" style={styles[".result-card"]}>
          <div className="prediction-container" style={styles.resultContainer}>
            <h3 style={styles.h3}>
              Prediction <BsActivity size={28} /> :
            </h3>
            <span className="prediction-result" style={styles.result}>
              {result ? result.prediction : "Waiting for scan"}
            </span>
          </div>
          <div className="confidence-container" style={styles.resultContainer}>
            <h3 style={styles.h3}>
              Confidence <BsCheckCircle size={24} /> :
            </h3>
            <span className="confidence-result" style={styles.result}>
              {result ? `${result.confidence}%` : "--"}
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
    padding: "2rem 0",
  },

  h1: {
    color: "var(--primary)",
    fontSize: "clamp(2.8rem, 6vw, 5rem)",
    fontWeight: 700,
    lineHeight: 1.1,
  },

  p: {
    fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
    lineHeight: 1.35,
  },

  ".highlight": {
    color: "var(--muted)",
    fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
  },

  ".cards": {
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch",
    flexWrap: "wrap",
    margin: "clamp(4rem, 8vw, 10rem) 0",
    backgroundColor: "var(--cards)",
    minHeight: "60rem",
    height: "auto",
    width: "100%",
  },

  ".image-upload-card": {
    border: "1px solid var(--muted)",
    minHeight: "50rem",
    padding: "clamp(1.5rem, 3vw, 2rem)",
    flex: "1 1 35rem",
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
    fontSize: "clamp(1.4rem, 2vw, 2rem)",
    fontWeight: 600,
    border: "none",
    padding: "1rem 1.5rem",
    borderRadius: 8,
    width: "min(37rem, 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1.5rem",
    cursor: "pointer",
  },

  mutedButton: {
    backgroundColor: "var(--muted)",
    color: "var(--bg)",
    fontSize: "clamp(1.4rem, 2vw, 2rem)",
    fontWeight: 600,
    border: "none",
    padding: "1rem 1.5rem",
    borderRadius: 8,
    width: "min(37rem, 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1.5rem",
  },

  ".result-card": {
    border: "1px solid var(--muted)",
    minHeight: "50rem",
    padding: "clamp(1.5rem, 3vw, 2rem)",
    flex: "1 1 35rem",
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "clamp(4rem, 8vw, 10rem)",
  },

  h3: {
    fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
    color: "var(--secondary)",
    textAlign: "center",
  },

  resultContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
    textAlign: "center",
  },

  result: {
    fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
    textAlign: "center",
  },

  imageContainer: {
    border: "1px solid var(--muted)",
    width: "min(100%, 45rem)",
    height: "clamp(25rem, 45vw, 37rem)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },

  footer: {
    borderTop: "2px solid var(--muted)",
    padding: "4rem 0 5rem",
    textAlign: "center",
  },

  github: {
    marginTop: "3rem",
  },

  placeholderText: {
    fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
    color: "var(--muted)",
    textAlign: "center",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
};