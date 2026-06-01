function App() {
  return (
    <div>
      <h1>👨‍🎓 Student Info</h1>
      <User name="Aman" age={20} city="Delhi" />
      <User name="Priya" age={21} city="Mumbai" />
      <User name="Rahul" age={19} city="Kolkata" />
    </div>
  );
}
// ✅ Props Destructuring used here
function User({ name, age, city }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>City: {city}</p>
      <hr />
    </div>
  );
}
export default App;