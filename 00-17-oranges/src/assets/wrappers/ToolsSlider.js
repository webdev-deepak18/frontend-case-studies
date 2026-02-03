/** @format */

import styled from "styled-components";

const Wrapper = styled.section`
.section-title{
  max-width: 100%
}

  h2 {
    text-align: center;
    line-height: 1.3;
    margin: 0 auto;
  }

  /* .tool-container {
    background: yellow;
    width: 200px;
    margin: 0 auto;
    text-align: center;
    display: grid !important;
    place-items: center;
    gap: 1rem;
  } */
  .slider-container{
    max-width: 1300px;
    margin: 0 auto;
    margin-top: 3rem;
  }

  .logo-container {
    display: grid;
    justify-content: center;
    align-items: center;
    min-height: 150px;
  }

  .logo {
    width: 100px;
    display: block;
    color: var(--grey-300)
  }



  .tool-title {
    text-align: center;
    padding-block: 1rem;
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--grey-500)
  }

  /* slick slider */
  .slick-slider button {
    display: none !important;
  }

  .slick-slide div{
    background: var(--grey-100);
    border-radius: var(--borderRadius);
    margin-right: .7rem;
    padding: 1rem;
  }
`;


export default Wrapper;
