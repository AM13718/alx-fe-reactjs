import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";

function App() {
  return (
    <div>
      <h2>Controlled Component Form</h2>
      <RegistrationForm />
      <hr />
      <h2>Formik Form</h2>
      <FormikForm />
    </div>
  );
}

export default App;

