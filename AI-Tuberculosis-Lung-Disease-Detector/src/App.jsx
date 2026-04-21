import "./App.css";

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
    color: "#00D1FF",
    fontSize: "5rem",
    fontWeight: 700,
  },

  p: {
    fontSize: "1.6rem",
    lineHeight: 1.35,
  },

  ".highlight": {
    color: "#8B9CB0",
    fontSize: "1.6rem",
  },
};
