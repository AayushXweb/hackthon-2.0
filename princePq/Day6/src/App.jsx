import ProfileCard from "./ProfileCard";

function App() {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <ProfileCard
        name="Rahul Sharma"
        age={22}
        bio="React Developer & Tech Enthusiast 🚀"
        image="https://imgs.search.brave.com/yboG_Nim1Rmhde7NjbjQLojyOPfmNMiaZM4WpIjWYc4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODQ2/MzY3NTA4L3Bob3Rv/L211bWJhaS1pbmRp/YS1yYWh1bC1zaGFy/bWEtc2FudG9vci1w/bGF5ZXItYXQtaGlz/LXJlc2lkZW5jZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/RnZUV1VsNGVPTkdz/c2NzTDNzWV8tTndT/dVVCR1pSUEVNcnAz/STgteHFITT0"
      />
      <ProfileCard
        name="Priya Singh"
        age={21}
        bio="Loves UI/UX Design 🎨"
        image="https://imgs.search.brave.com/01HfdqRfPofd3kIw8EFqjB7p1VDbjWYGfI2rs8WuIf8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tb3Zp/ZXBhemVzLmNvbS9p/bWFnZXMvZ2FsbGVy/eS9Qcml5YSUyMFNp/bmdoJTIwU3RpbGxz/JTIwQXQlMjBNYW5h/c2Fpbm9kdSUyMEF1/ZGlvJTIwTGF1bmNo/L3RodW1iLmpwZw"
      />
    </div>
  );
}

export default App;
