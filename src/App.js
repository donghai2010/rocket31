import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";
import { Provider } from "react-redux";
import { TodoList } from "./TodoList";
import store from "./redux/counter-toolkit";
import EmployeeList from "./EmployeeList";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <EmployeeList />
      </Provider>
    </div>
  );
}

export default App;
