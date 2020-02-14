import React from "react";

import Fade from "react-reveal/Fade";
import styled from "styled-components";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};
export const Container = styled.div`
  width:100%;

  @media ${device.mobileS} {
    
  }

  @media ${device.mobileM} {
   
  }

  @media ${device.tablet} {
    
    
  }
`;

export const Img = styled.img`
  display: flex;

  @media ${device.mobileS} {
    display: none;
    cursor: pointer;
  }
  @media ${device.tablet} {
    display: flex;
    cursor: pointer;
  }
`;

export const Banner = styled.div`
 width:100%;
  padding: 110px;
  height: 250px;
  transparent: 0.3;
  border-radius: 10px;
  background: url(https://i.pinimg.com/originals/f0/b6/15/f0b615f78dd809d68ec389f4bc8d94bb.jpg)
    center center no-repeat;

  @media ${device.mobileS} {

    
  }
  @media ${device.tablet} {
    display: flex;
  
    flex-direction:column;
    justify-content: center;
    align-content: center;
    align-items: center;
    padding: 10px;
    transparent: 0.3;
    border-radius: 10px;
   
  }
`;

export const H1 = styled.h1`
  color: black;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0px;
  margin-top: 3em;
  letter-spacing: 4px;
  background: #f5f5f57d;
  font-size: 2.5rem;
  font-family: "Righteous", cursive;

  @media ${device.mobileS} {
    font-size: 0.8rem;
  }
  @media ${device.tablet} {
    font-size: 2.2rem;;
  }
`;

export const H1cc = styled.h1`
color: rgb(226, 176, 69),
                      font-family:  'Righteous', cursive,
                      font-size: 4.0rem

   @media ${device.mobileS} {
     font-size: .6rem;
}
@media ${device.tablet} {
 display:flex; 
}
 `;

export const H2 = styled.h2`
  font-size: 1rem;
  font-weight: normal;
  margin-top: 0.8rem;
  background: #ec7d0e9c;
  color: white;
  border-radius: 21px;

  @media ${device.mobileS} {
    font-size: 0.6rem;
  }

  @media ${device.mobileM} {
    font-size: 1rem;
  }
  @media ${device.tablet} {
    font-size: 2rem;
    
  }
`;

export const Step1 = styled.h2`
  fontsize: 1rem;
  font-weight: normal;
  margin-top: 0.8rem;

  border-radius: 21px;

  @media ${device.mobileS} {
    font-size: 0.6rem;
  }
  @media ${device.tablet} {
    display: flex;
   
    justify-content: center;
   
    flex-direction: column;
    align-items: center;
  }
`;

export const Step3 = styled.h2`
  margin-right: 20%;
  margin-top: 10%;

  @media ${device.mobileS} {
    margin-right: 0%;
    margin-top: 0%;
  }
  @media ${device.tablet} {
    display: flex;
    justify-content: center;
   
    flex-direction: column;
    align-items: center;
  }
`;

export const P = styled.p`
  font-size: 1rem;

  @media ${device.mobileS} {
    font-size: 0.8rem;
  }

  @media ${device.mobileM} {
    font-size: 1rem;
  }
  @media ${device.tablet} {
    font-size: 1.2rem;
  }
`;


export const Pushable  = styled.div`
  
  @media ${device.mobileS} {
  
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-direction: column;

  }

  @media ${device.mobileM} {
    font-size: 1rem;
  }
  @media ${device.tablet} {
    font-size: 1.2rem;
  }
`;

const Homepage = props => {
  return (
    <div>
      <Pushable class="ui segment pushable">
        <div class="pusher">
          <Container class="ui basic segment">
            <Fade cascade delay={1000} duration={2000}>
              {" "}
              <div
                class="ui inverted vertical center aligned segment"
                style={{
                  position: "relative",
               
    top: "-18px",
                  backgroundColor: "rgba(236, 226, 212, 0.18)"
                }}
              >
                <Banner class="ui text container">
                  <Fade cascade delay={1500} duration={2500}>
                    {" "}
                    <H1>Food Review</H1>
                  </Fade>
                  <Fade bottom cascade delay={700} duration={1200}>
                    {" "}
                    <H2>Review whatever you want when you want to.</H2>
                  </Fade>
                  {/* <button class="ui huge primary button"  style={{background:'#E2B045'}}>
                    Get Started
                    <i aria-hidden="true" class="right arrow icon"></i>
                  </button> */}
                </Banner>

                <Step1 >
                  <H1cc>Step 1:</H1cc>
                  <P>Create and account</P>{" "}
                  <Img
                    alt="register"
                    onClick={() => props.history.push("/register")}
                    src="https://run4u.id/wp-content/uploads/2019/03/register-now-png-8.png"
                  />{" "}
                </Step1>

                <Step1>
                  <H1cc>Step 2:</H1cc>
                  <P>Login to your account</P>
                  <Img
                    alt="btn"
                    onClick={() => props.history.push("/login")}
                    src="http://www.pay2easy.com/images/logo/new_button.png"
                  />
                </Step1>

                <Step3>
                  <H1cc>Step 3:</H1cc>
                  <P>Add your Reviews</P>
                  <Img
                    alt="thumb"
                    style={{ cursor: "pointer" }}
                    onClick={() => props.history.push("/add_review")}
                    src="http://www.csnotepad.co.uk/virtual-receptionist-blog/wp-content/uploads/2015/08/thumbs-good1.png"
                  />
                </Step3>

                {/* 
              <img
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                class="ui small centered image"
              />
              <p>
                Eu quo homero blandit intellegebat. Incorrupte consequuntur mei
                id. Mei ut facer dolores adolescens, no illum aperiri quo, usu
                odio brute at. Qui te porro electram, ea dico facete utroque
                quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera
                utamur at. Quodsi convenire mnesarchum eu per, quas minimum
                postulant per id.
              </p> */}
              </div>{" "}
            </Fade>
          </Container>
        </div>
      </Pushable >
    </div>
  );
};

export default Homepage;
