// import './css/App.css';
import Search from "./components/Search";
import Table from "./components/Table";

function App() {
  return (
    <wrapper className="App">
      {/* Jumbotron */}
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Fluid jumbotron</h1>
          <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </div>
      </div>

      <Search />

      <Table />

    </wrapper>
  );
}

export default App;
