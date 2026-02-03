/** @format */

import styled from "styled-components";



const Wrapper = styled.section`
  max-width: 1920px;
  margin: 0 auto;
  position: relative;
  margin-bottom: 3rem;

  h2{
    font-size: clamp(2rem, 5vw, 6rem);
  }
  .cta-img {
    height: 10rem;
  }

  .info-container {
    width: 90vw;
    background: var(--grey-800);
    max-width: var(--max-width-1);
    margin: 0 auto;
    position: relative;
    z-index: 10;
    margin-top: -3rem;
    padding: 2rem;
    border-radius: var(--borderRadius);
  }

  .info {
    display: grid;
    gap: 1rem;
    color: var(--white);
    justify-items: center;
    text-align: center;
  }

  .cta-btn {
    background: var(--grey-500);
    color: var(--white);
    padding: 1rem 2rem;
  }

  .cta-btn:hover {
    /* color: var(--primary-600); */
    background: var(--primary-600);
  }

  @media (min-width: 768px) {
    margin-top: 2rem;
    .info{
      text-align: left;
    }
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: end;
    margin-top: 0;

    .cta-img {
      width: 130%;
      height: 100%;
    }

    .info-container {
      background: rgba(235, 235, 235, .8);
      margin-top: 0;
      opacity: 1;
      width: 100%;
      align-items: top;
      margin-bottom: 2rem;

    }
    .info {
      justify-items: left;
      color: var(--grey-500);
    }

    .cta-btn{
      font-size: clamp(1rem, 2vw, 1.5rem);
      padding: 1.2rem 3rem;
    }
  }

  @media (min-width: 992px){
    margin-bottom: 5rem;
    /* margin-top: -5rem; */
    grid-template-columns: 3fr 4fr;
    .cta-img{
      height: 80%
    }

    .cta-img{
      width: 150%;
    }
    .info-container{
      margin-bottom: 3rem;
    }
    
  }

  @media (min-width: 1200px){
    grid-template-columns: 1fr 1fr;
    
    .cta-img{
      width: 130%
    }
  }
`;

export default Wrapper;
