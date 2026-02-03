/** @format */

import styled from "styled-components";

const Wrapper = styled.section`
  
  .hero {
    display: grid;
    gap: 2rem;
  }

  .hero .info {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    align-items: center;
  }

  .hero .info p {
    line-height: 1.5;
  }

  .hero .info h4 {
    line-height: 1.3;
  }

  @media (min-width: 768px) {
    .hero .info {
      /* grid-template-columns: 2fr 2fr; */
      gap: 2rem;
    }
    .hero p {
      font-size: 1.2rem;
    }
  }

  @media (min-width: 992px) {
    .hero {
      grid-template-columns: 1fr;
      gap: 4rem;
      /* max-width: 80%; */
      margin: 0 auto;
    }

    .hero .info {
      gap: 5rem;
      grid-template-columns: 1fr ;
    }

    .hero .info h3 {
      justify-self: center;
      /* max-width: 450px; */
    }

    .hero p {
      /* max-width: 450px; */
      justify-self: center;
    }
  }

  /* cards */

  .heading-two {
    text-align: center;
    margin-bottom: 3rem;
    /* border: 1px solid red; */
    line-height: 1.3;
  }
  .cards-container {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr;
    grid-template-areas: 'one' 'two' 'three' 'four';
    /* border: 1px solid yellow */
  }

  @media (min-width: 768px) {
    .cards-container {
      grid-template-columns: 1fr 1fr;
      grid-template-areas: 'one two' 'three four';
    }
    .section-title {
      max-width: 100%;
    }
  }

  @media (min-width: 1200px) {
    .cards-container {
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        "one ."
        "one two"
        "one two"
        "one two"
        "three two"
        "three four"
        "three four"
        "three four"
        ". four";
      max-width: 900px;
      justify-content: right;
      margin-left: auto;
      margin-right: 5rem;
    }
    .heading-two{
      margin-left: auto;
      margin-right: 5rem;
      text-align: left;
      max-width: 900px;;
    }
  }

  @media (min-width: 1550px) {
    .cards-container {
      max-width: 1170px;
      margin-right: 5rem;
      gap: 2rem;
    }
    .heading-two{
      max-width: 1170px;
    }
  }

  .card-one {
    grid-area: one;
  }
  .card-two {
    grid-area: two;
  }
  .card-three {
    grid-area: three;
  }
  .card-four {
    grid-area: four;
  }

  /* end cards */
`;

export default Wrapper;
