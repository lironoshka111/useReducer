import styled from "styled-components";
import { Router, Link } from "@reach/router";
import Counter from "./Counter";
import { ShopProvider } from "./ShopContext";
import Products from "./Products";
import Cart from "./Cart";
import {AppContextProvider} from "./AppContex";

const App = () => {
  return (
    <AppContextProvider>
      <Wrapper>
        <TitleWrapper>
          <h1>useReducer Hook</h1>
          <p>
            A <a href="https://designcode.io/">Design+Code</a> tutorial
          </p>
        </TitleWrapper>
        <LinksWrapper>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/counter">counter</Link>
        </LinksWrapper>
        <Router>
          <Products path="/" />
          <Counter path="/counter"/>
          <Cart path="/cart" />
        </Router>
      </Wrapper>
    </AppContextProvider>
  );
};

export default App;

const Wrapper = styled.div`
  font-family: "Roboto";
  margin: 40px;

  display: grid;
  row-gap: 20px;
  justify-content: center;
`;

const TitleWrapper = styled.div`
  * {
    margin: 0;
  }

  display: grid;
  row-gap: 10px;

  a {
    text-decoration: none;
    font-weight: bold;
    color: black;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;

  a {
    text-decoration: none;
    color: #bb7250;

    :hover {
      color: #bb7250;
      font-weight: bold;
      text-decoration: underline;
    }
  }
`;
