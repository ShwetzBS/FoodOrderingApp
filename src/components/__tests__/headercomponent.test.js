import { Header } from "../Header";
import { Provider } from "react-redux";
import { AppStore } from "./utils/AppStore.js";
import { BrowserRouter } from "react-router-dom"; //If you provide this then the test will understand the <Link> tag
import "@testing-library/jest-dom"; //Nedded to use toBeInTheDocument

is("Should load/render header component with login button", () => {
  //Header uses Redux and uses <Link> which comes in react-router-dom
  render(
    <BrowserRouter>
      <Provider store={AppStore}>
        render(<Header></Header>);
      </Provider>
    </BrowserRouter>
  );
  //Check if login button is rendered
  const loginBtn = screen.getByRole("button");

  expect(loginBtn).toBeInTheDocument();
});
