/** @format */

import styled from "styled-components";

const Wrapper = styled.article`
  display: grid;
  .card {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    min-height: 30rem;
    background: lightblue;
    padding: 1.5rem;
    border-radius: var(--borderRadius);
    position: relative;
    color: var(--white);
    transition: all 0.3s;
    /* height: 650px; */
    width: 100%;
    /* max-width: 450px; */
    cursor: pointer;
  }

  @media (min-width: 992px) {
    .card {
      min-height: 600px;
    }
    .card-horizontal {
      max-width: 100%;
      height: 100%;
      max-height: 350px;
    }

    .card-one {
      justify-self: right;
    }
    .card-two {
      align-self: end;
    }
  }

  @media (min-width: 1550px) {
    .card {
      min-height: 800px;
    }
  }

  .card-img {
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  .card-img .img {
    height: 100%;
    width: 100%;
    background-size: cover;
  }

  .card-img .img-hover {
    transform: scale(1.02);
    transition: all 0.3s;
  }

  .overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    background: linear-gradient(180deg, rgba(41, 41, 41, 0.2) 0%, #1f1f1f 100%);
    transition: var(--transition);
  }

  .overlay-hover {
    width: 100%;
    height: 100%;
    position: absolute;
    background: linear-gradient(
      180deg,
      rgba(30, 30, 30, 0.85) 0%,
      #1f1f1f 100%
    );
    transition: var(--transition);
  }

  .info {
    align-self: flex-end;
    display: grid;
    gap: 2rem;
    position: relative;
    transition: var(--transition);
  }

  .desc {
    display: none;
    transition: all 0.3s;
    opacity: 0;
    line-height: 1.5;
    font-size: clamp(1rem, 4vw, 1.3rem)
  }

  .show-desc {
    display: block;
    opacity: 1;
  }

  .card-title {
    line-height: 1.2;
    transition: all 0.3s;
  }

  .card-btn {
    display: grid;
    grid-template-columns: auto 25px;
    justify-content: start;
    align-items: center;
    color: var(--white);
  }

  .card-btn a{
    color: var(--white)
  }

  .card-btn:hover {
    color: var(--primary-300);
  }
`;
export default Wrapper;
