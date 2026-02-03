/** @format */

import styled from "styled-components";

const Wrapper = styled.div`
  .container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    max-width: 1170px;
    margin: 0 auto;
  }
  .img {
    max-width: 300px;
    max-height: 300px;
    border-radius: 10px;
  }

  .info-header {
    margin-bottom: 1rem;
  }

  h3 {
    color: var(--primary-500);
  }
  .icon {
    display: grid;
    place-items: center;
    font-size: 2rem;
    max-width: 25px;
    color: var(--primary-500);
    margin-top: 0.25rem;
    transition: var(--transition);
  }

  .icon:hover{
    color: var(--primary-300)
  }

  hr{
    margin: 1.5rem 0 2rem 0;
    color: var(--primary-500);
    background-color: var(--primary-500)
  }
  p,
  ul li {
    line-height: 1.8;
    margin-bottom: 1.5rem;
    font-size: clamp(0.8rem, 3vw, 1.2rem);
    letter-spacing: 0.15px;
  }

  .btn {
    color: var(--white);
  }

  @media (min-width: 1024px) {
    .container {
      grid-template-columns: 1fr 2fr;
    }
  }
`;

export default Wrapper;
