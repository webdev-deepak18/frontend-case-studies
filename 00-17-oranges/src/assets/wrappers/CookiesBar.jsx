/** @format */

import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 100000;
  width: 100%;
  background: var(--primary-500);
  padding-block: 0.5rem;

  .link {
    color: var(--white);
    text-decoration: underline;
  }

  .cookies {
    text-align: center;
    font-size: 0.8rem;
    color: var(--white);
  }

  .cookies-btn {
    margin-left: 1rem;
    background: var(--grey-800);
    color: var(--white);
  }
`;

export default Wrapper