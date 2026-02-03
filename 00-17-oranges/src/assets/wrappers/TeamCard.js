/** @format */

import styled from "styled-components";

const Wrapper = styled.article`
  .card-container {
    position: relative;
    overflow: hidden;
    background: var(--grey-100);
    border-radius: var(--borderRadius);
    transition: var(--transition);
    width: 300px;
    height: 300px;
    /* min-height: 450px; */
  }

  .card-img {
    /* transform: scale(.95); */
    transform-origin: bottom center;
    transition: var(--transition);
  }

  .card-info {
    position: absolute;
    bottom: 0;
    transform: translatey(102%);
    background: var(--primary-500);
    padding: 1rem;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: end;
    gap: 1rem;
    color: var(--white);
    line-height: 1.5;
    transition: var(--transition);
    width: 100%;
  }

  .divider-line {
    background-color: var(--white) !important;
    width: 30% !important;
    margin-bottom: 0;
  }

  h5 {
    line-height: 1.5;
  }

  h5 span {
    display: block;
    font-size: 0.8rem;
  }

  .icon {
    display: grid;
    place-items: center;
    font-size: 2rem;
    color: var(--white);
  }

  /* hovering */
  .hovering {
    background: var(--primary-100);
    cursor: pointer;
  }
  .hovering .card-img {
    transform: scale(1.02);
  }
  .hovering .card-info {
    transform: translateY(0);
  }

  .btn{
    background: var(--grey-500);
    color: var(--white);
    padding-block: .1rem;
    margin-top: .5rem;
    font-size: .75rem;
    transition: var(--transition);
  }

  .btn:hover{
    background: var(--white);
    color: var(--grey-500);
    font-weight: bold;
  }
`;

export default Wrapper;
