import { Provider } from "react-redux";
import store from "./store";
import Stacks from "./Stacks";

export default function App() {
  
  return (
    <Provider store={store}>
        <Stacks />
    </Provider>
  );
}
