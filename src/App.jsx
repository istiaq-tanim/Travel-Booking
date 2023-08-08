import { Provider } from "react-redux"
import Header from "./components/Header"
import PreviewTable from "./components/PreviewTable"
import Input from "./components/input"
import store from "./Redux/Store"


function App() {

  return (
    <Provider store={store}>
      <Header></Header>
      <Input></Input>
      <PreviewTable></PreviewTable>
    </Provider>
  )
}

export default App
