/** @format */

import styled from "styled-components";

const Wrapper = styled.div`
  .section-title h1 {
    margin-bottom: 2rem;
  }

  /* cards */
  .cards-container {
    display: grid;
    gap: 2rem;
  }

  @media (min-width: 768px) {
    .section-title {
      max-width: 100%;
    }
    .cards-container {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 1200px) {
    .cards-container {
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        /* "one ."
        "one two"
        "one two"
        "one two"
        "three two"
        "three four"
        "three four"
        "three four"
        ". four"; */
        "one ."
        "one two"
        "one two"
        "one two"
        "three two"
        "three four"
        "three four"
        "three four"
        "five four"
        "five six"
        "five six"
        "five six"
        "seven six"
        "seven eight"
        "seven eight"
        "seven eight"
        ". eight";
      max-width: 900px;
      justify-content: right;
      margin-left: auto;
      margin-right: 5rem;
    }

    @media (min-width: 1550px) {
      .cards-container {
        max-width: 1170px;
        margin-right: 5rem;
        gap: 2rem;
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
    .card-five {
      grid-area: five;
    }
    .card-six {
      grid-area: six;
    }
    .card-seven {
      grid-area: seven;
    }
    .card-eight {
      grid-area: eight;
    }
  }

  /* end cards */
`;

export default Wrapper;
