/** @format */

import styled from "styled-components";

const Wrapper = styled.div`
  .section-title {
    width: 100%;
    max-width: 100%
  }

  .section-title h1 {
    font-size: clamp(3rem, 5vw, 6rem);
    text-align: left;
  }

  @media (min-width: 768px) {
    .section-title {
      width: 100%;
      /* background: red; */
      /* margin: 0 auto; */
    }
    .section-title h1 {
      font-size: clamp(2rem, 5vw, 4rem);

      margin: 0 auto;
    }
  }

  @media (min-width: 992px) {
    .section-title {
      /* margin: 0; */
    }
    .section-title h1 {
      font-size: clamp(3rem, 5vw, 6rem);
      /* text-align: center; */
    }
    .small-heading {
      font-size: clamp(3rem, 3vw, 6rem);
    }
  }

  @media (min-width: 1200px) {
    .section-title h1 {
      font-size: clamp(3rem, 5vw, 8rem);
    }
  }

  @media (min-width: 1550px) {
    .section-title h1 {
      font-size: clamp(3rem, 5vw, 7rem);
    }
  }

  /* end section title */
  .letter-section {
    padding: 0 0 5rem 0;
  }

  .letter-section .section-center {
    max-width: 750px;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    background: var(--grey-50);
    padding: 1rem;
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-2);
    transition: var(--transition);
  }

  .letter-section .section-center:hover {
    box-shadow: var(--shadow-4);
  }

  .letter-info {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .letter-info p {
    line-height: 1.8;
    font-size: clamp(1rem, 3vw, 1.2rem);
    color: var(--grey-500);
  }

  .author-container {
    display: grid;
    grid-template-columns: auto 100px;
    align-items: center;
    justify-content: start;
    gap: 2rem;
    margin: 0 auto;
  }

  .author-info {
    display: grid;
    justify-content: start;
  }

  .divider-line {
    height: 1px;
    background: var(--grey-200);
    width: 100%;
    margin-bottom: 0.75rem;
  }

  @media (min-width: 992px) {
    .letter-section .section-center {
      padding: 5rem;
      /* margin-top: 5rem; */
    }
    .author-container {
      gap: 3rem;
    }
  }

  /* end letter section */

  /* creative team */

  .creative-section .title {
    /* background: yellow; */
    display: grid;
    gap: 2rem;
    min-width: 100%;
  }

  .cards-container {
    margin-top: 2rem;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }

  @media (min-width: 992px) {
    .cards-container {
      grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
    }
    .creative-section .title {
      grid-template-columns: 4fr 2fr;
      align-items: center;
      gap: 1rem;
    }

    .creative-section h4 {
      font-size: 1.5rem;
    }
  }

  .creative-section h4 {
    line-height: 1.3;
    max-width: 800px;
  }

  .cards-container {
    margin-top: 5rem;
  }

  @media (min-width: 1550px) {
    .cards-container {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
  }
`;

export default Wrapper;
