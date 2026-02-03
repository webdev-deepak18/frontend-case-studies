/** @format */

import styled from "styled-components";

const Wrapper = styled.div`
.heading-one{
  margin-top: -1rem;
}

  .hero-center {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    align-items: stretch;
    
  }

  .hero-info-container {
    display: grid;
    gap: 2rem;
    align-content: center;
    max-width: 100%;
    /* border: 1px solid yellow; */
  }

  .hero-info-container h1 {
    position: relative;
  }


  @media (max-width: 500px) {
    .hero-info-container h1 {
      /* font-size: 2.2rem; */
    }

    .hero-img {
      height: 400px;
    }
  }

  .hero-img {
    align-self: stretch;
    border-radius: 15px;
  }

  .hero-img img {
    height: 100%;
    border-radius: 1rem;
  }

  .tags {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  .tag {
    display: grid;
    align-items: center;
    grid-template-columns: 20px 1fr;
    font-size: clamp(.7rem, 3vw, 1.3rem);
    gap: .5rem
  }

  .tag svg{
    fill: var(--primary-500)
  }


  @media (min-width: 768px) {
    .hero-center {
      grid-template-columns: 3fr 1fr;
      gap: 2rem;
    }
  }

  @media (min-width: 992px) {
    .hero-center {
      grid-template-columns: 4fr 3fr;
      gap: 3rem;     
    }

    .tags{
      gap: 1rem
    }
  }

  /* end digital transportation */

  /* intro section */
  .intro-center {
    display: grid;
    gap: 2rem;
    align-items: center;
  }

  .intro-img {
    display: none;
  }

  .intro-content {
    display: grid;
    gap: 1rem;
  }

  .intro-desc {
    display: grid;
    gap: 1rem;
    position: relative;
  }

  .intro-desc::before {
    content: "";
    width: 1px;
    height: 100%;
    background: var(--grey-100);
    position: absolute;
    top: 0;
    left: 0;
  }

  .intro-desc p {
    line-height: 1.5;
    padding-left: 1rem;
    font-size: clamp(1rem, 3vw, 1.1rem);
  }

  @media (min-width: 992px) {
    .intro-img {
      display: block;
    }

    .intro-center {
      grid-template-columns: 2fr 3fr;
      gap: 3rem;
    }

    .intro-content {
      max-width: 80%;
      justify-self: center;
      gap: 3rem;
    }
  }
  /* end intro section */

  /* we can help any industry */

  .we-can-help {
    display: grid;
    gap: 2rem;
  }

  .we-can-help h1 {
    text-align: left;
  }

  .we-can-help h2 {
    font-size: clamp(2rem, 3vw, 7rem);
    margin-bottom: 2rem;
    line-height: 1.3;
  }

  .we-can-help p {
    padding-left: 1rem;
    line-height: 1.5;
  }

  .we-can-help p::before {
    content: "";
    width: 1px;
    background: var(--grey-200);
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  @media (min-width: 768px) {
    .we-can-help .info {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      align-items: center;
    }

    .we-can-help p {
      max-width: 400px;
      position: relative;
    }
  }

  @media (min-width: 992px) {
    .we-can-help .info {
      grid-template-columns: 3fr 2fr;
      gap: 4rem;
    }

    .we-can-help .section-title {
      max-width: 100%;
    }

    .we-can-help h2 {
      text-align: right;
      font-size: 6rem;
      margin-left: auto;
      margin-right: 7rem;
      font-weight: 500;
      max-width: 900px;
    }

    .we-can-help p {
      font-size: 1.3rem;
    }
  }


`;

export default Wrapper;
