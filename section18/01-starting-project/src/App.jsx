import Header from "./componets/Header.jsx";
import Resturnat from "./componets/Resturnat.jsx";
import { ReducerContextProvider } from "./componets/ReducerContext.jsx";
import CheckoutForm from "./componets/CheckOutFormModal.jsx";
function App() {
  return (
    <ReducerContextProvider>
      <Header />
      <Resturnat />
      <CheckoutForm />
    </ReducerContextProvider>
  );
}

export default App;
