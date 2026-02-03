/** @format */

import styled from "styled-components";


const Wrapper = styled.div`
  @media (max-width: 768px) {
    display: none;
  }

  background: var(--primary-500);
  display: grid;
  align-items: center;
  justify-content: center;
  width: 50px;
  padding: 1rem 0.5rem;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  gap: 1rem;
  border-radius: 0 10px 10px 0;
  fill: var(--white);
  z-index: 1000;

  .sticy-icon {
    width: 15px;
    display: inline-block;
    color: var(--white);
    cursor: pointer;
  }

  .sticky-icon a {
    padding: 0.25rem;
  }

  @media (min-width: 992px) {
    width: 60px;

    .sticy-icon {
      width: 20px;
    }
  }
`;

export default Wrapper;
