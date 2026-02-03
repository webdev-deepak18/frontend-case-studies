/** @format */

import styled from "styled-components";

const Wrapper = styled.div`

/* hero */
.hero-center{
  max-width: 90%;
  margin: 0 auto;
  display: grid;
  gap: 2rem;;
}

.hero-info{
  display: grid;
  gap: 1rem;
}

@media (min-width: 992px){
  .hero-center{
    grid-template-columns: 4fr 3fr;
    align-items: stretch;
    align-content: stretch;
  }

  .hero-img img{
    height: 100%
  }
}
/* end hero */
  .form-title-section {
    padding-bottom: 0;
  }

  .form-heading {
    text-align: center;
    margin-bottom: 1rem;
  }
  .form-heading span {
    color: var(--primary-500);
  }
  .underline {
    height: 2px;
    width: 100%;
    background: var(--grey-50);
  }

  .info-container {
    display: grid;
    gap: 2rem;
    align-content: space-between
  }

  .info {
    display: grid;
    gap: 1rem;
    align-content: start;
  }

  .info p {
    line-height: 1.5;
  }

  .skills {
    display: grid;
    gap: 1rem;
    align-content: start;
  }

  .skill {
    display: grid;
    grid-template-columns: 20px 1fr;
    align-items: center;
    gap: 0.5rem;
  }

  .skill-icon {
    color: var(--primary-500);
  }

  .skill-text {
    line-height: 1.5;
  }
  .form-container {
    margin: 0 auto;
    display: grid;
    gap: 2rem;
    /* background: var(--grey-50); */
    padding: 1.5rem 1rem;
    border-radius: var(--borderRadius);
  }

  .form {
    margin: 0;
    padding: 1rem 0.5rem;
    margin: 0 auto;
  }

  .form:hover {
    box-shadow: var(--shadow-4);
  }

  .form-title {
    color: var(--grey-500);
    text-align: center;
  }
  .form-row {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.74rem;
    align-items: start;
    /* background: var(--grey-50); */
    padding: 0.5rem 1rem;
  }

  .form-section{
    padding-top: 3rem;
  }

  .form-label {
    margin-bottom: 0;
    color: black;
    display: grid;
    grid-template-columns: 15px 1fr;
    align-items: center;
    gap: 0.5rem;
    line-height: 1.3;
  }

  .form-input {
    /* border-color: var(--grey-50); */
    /* padding: 0 */
  }

  .attachment a:hover {
    color: var(--primary-500);
    cursor: pointer;
  }

  .terms {
    display: block;
    font-size: 0.8rem;
  }

  .terms a {
    color: var(--primary-500);
  }

  .terms a:hover {
    color: var(--primary-300);
  }

  .btn-submit {
    display: block;
    padding: 1rem 1rem;
    color: var(--white);
  }

  @media (min-width: 992px) {
    .form-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: stretch;
      align-content: stretch;
      /* background: yellow; */
    }
    .form-container {
      padding: 0;
    }

    .skills{
      margin-bottom: 5rem;
    }
    .skill{
      gap: 1rem;
    }
  }
`;

export default Wrapper;
