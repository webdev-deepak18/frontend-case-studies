/** @format */
import img from '/src/assets/images/sad-austronaut.webp'

import styled from "styled-components";



const Wrapper = styled.div`
.container{
  width: 100vw;
  height: 100vh;
  max-width: 1920px;
  margin: 0 auto;
  background: black;
  position: relative;
  display: grid;
  justify-content: center;
  align-content: end;;
}
.bg-img{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay{
  width: 100%;
  height: 100%;
  position: absolute;
 background: linear-gradient(190deg, rgb(0, 0, 0) 5%, rgba(0, 0, 0, 0) 66%);
 top: 0;
 left: 0;
 z-index: 100;
}

  .content {
    position: relative;;
    background: rgba(0, 0, 0, 0.8);
    width: 95%;
    max-width: 800px;
    padding: 2rem 1rem;
    margin-bottom: 3rem;
    text-align: center;
    border-radius: 15px;
    color: var(--white);
    z-index: 500;
  }
  h2 {
    font-size: 2rem;
  }
  .error-btn {
    margin-top: 2rem;
    font-size: 1.5rem;
  }

  .logo {
    position: fixed;
    top: 5%;
    right: 10%;
    width: 150px;
    z-index: 1000;
  }

  @media (min-width: 992px) {
    .content {
      width: 100%;
      padding: 3rem;
    }
  }
`;

export default Wrapper;
