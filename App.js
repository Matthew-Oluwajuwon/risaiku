import { Provider } from "react-redux";
import store from "./store";
import Stacks from "./Stacks";
import { PaperProvider } from "react-native-paper";

export default function App() {
  
  return (
    <Provider store={store}>
      <PaperProvider>
        <Stacks />
      </PaperProvider>
    </Provider>
  );
}
