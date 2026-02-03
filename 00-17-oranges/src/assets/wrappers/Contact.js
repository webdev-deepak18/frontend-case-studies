import styled from "styled-components";

const Wrapper = styled.section`
padding-block: 5rem;
width: 100vw;
max-width: 1920px;
margin: 0 auto;



.page-title{
  text-align: center;
  margin-bottom: 2rem;
  font-size: clamp(2rem, 5vw, 4rem);
}
.desktop-img{
  display: none;
}

.desc{
  line-height: 1.5;
  color: var(--grey-500)
}

.mobile-img{
  height: 15rem;
}

.form-container{
  width: 90vw;
  position: relative;
  margin: 0 auto;
  margin-top:-8rem;
  display: grid;
  gap: 2rem;
  background: var(--grey-50);
  padding: 1.5rem 1rem;
  border-radius: var(--borderRadius);
}

.form{
  margin: 0;
  padding: 1rem .5rem;
  /* background: red; */
  /* box-shadow: var(--shadow-3);
  transition: var(--transition); */
  margin: 0 auto;
}

.form:hover{
  box-shadow:var(--shadow-4);
}

.form-title{
  color: var(--grey-500);
  text-align: center;
}
.form-row{
  display: grid;
  grid-template-columns: 1fr;
  gap: .74rem;
  align-items: start;
  /* background: var(--grey-50); */
  padding: .5rem 1rem;
}

.form-label{
  margin-bottom: 0;
  color: black;
  display: grid;
  grid-template-columns: 15px 1fr;
  align-items: center;
  gap: .5rem;
  line-height: 1.3;
}

.form-input{
  /* border-color: var(--grey-50); */
  /* padding: 0 */
}

.terms{
  display: block;
  font-size: .8rem;
}

.terms a {
  color: var(--primary-500)
}

.terms a:hover{
  color: var(--primary-300)
}

.btn-submit{
  display: block;
  padding: 1rem 1rem;
  color: var(--white)
}

@media (min-width: 992px){
  .mobile-img{
    display: none;
  }
  .desktop-img{
    display: block;
    height: 100%;
  }
  .container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-content: stretch;
  }

  .desktop-img{
    align-self: stretch;
  }

  .form-container{
    width: 100%;
    margin-top: 0
  }


  .info{
    max-width: 600px;
    margin: 0 auto;
  }
  .page-title{
    text-align: left;
    margin-bottom: 3rem;
  }
  .form-row{
    margin-bottom: 0
  }
}

@media (min-width: 1200px){
  .info{
    max-width: 650px;
  }
}

`

export default Wrapper