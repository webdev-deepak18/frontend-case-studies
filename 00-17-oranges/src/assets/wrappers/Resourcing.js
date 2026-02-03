/** @format */

import styled from "styled-components";

const Wrapper = styled.div`

  .heading-two{
    text-align: center;
    margin: 0 auto;
    /* border: 1px solid red; */
    margin-top: 5rem;
    max-width: 1200px
  }
  /* info section */
  .info-section {
    position: relative;
  }

  .info-section .info {
    margin-bottom: 2rem;
    grid-area: text;
    display: grid;
    gap: 2rem;
  }

  @media (min-width: 768px) {
    .info-img {
      width: 60%;
      margin: 0 auto;
    }
  }

  @media (min-width: 992px) {
    .section-title {
      max-width: 100%;
    }
    .info-section {
      min-height: 300px;
      overflow: hidden;
      display: grid;
      grid-template-columns: 1fr;
      align-content: center;
    }
    .info-section h4 {
      margin-bottom: 0;
    }

    .info-img {
      width: 50%;
      margin: 0;
      position: absolute;
      right: 0;
      top: 0;
    }

    .info-section .info {
      width: 45%;
    }
  }

  @media (min-width: 1200px) {
    .info-section {
      min-height: 450px;
    }

  }
  /* end info section */

  .card-container {
    /* background: lightgrey; */
    display: grid;
    grid-template-columns: 1fr;
    /* gap: 1rem; */
    width: var(--view-width);
    max-width: var(--max-width-3);
    margin: 5rem auto;
    margin-top: 2rem;
  }
  .card {
    max-width: 100% !important;
  }

  @media (min-width: 728px) {
    .card-container {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 992px) {
    .card-container {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  /* end cards */

  /* start answers */
  .answers {
    display: grid;
    gap: 2rem;
  }

  .answers h1 {
    font-size: clamp(2.5rem, 5vw, 6rem);
    line-height: 1.3;
  }

  .answers h3 {
    margin-top: 2rem;
    line-height: 1.5;
  }

  @media (min-width: 768px) {
    .answers {
      grid-template-columns: 3fr 2fr;
      gap: 5rem;
    }
  }

  @media (min-width: 992px) {
    .answers {
      grid-template-columns: 7fr 3fr;
      gap: 5rem;
    }

    .answers .img-container img {
      height: 100%;
    }

    .answers .wiggle-lg:before{
      top: -1rem;
    }
  }
`;

export default Wrapper;
