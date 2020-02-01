import React from "react";

import Fade from "react-reveal/Fade";
const Homepage = props => {
  return (
    <div>
      <div class="ui segment pushable">
        <div class="pusher">
          <div
            style={{ marginLeft: "150px", zIndex: -1 }}
            class="ui basic segment"
          >
            <Fade cascade delay={1000} duration={2000}>
              {" "}
              <div
                class="ui inverted vertical center aligned segment"
                style={{
                  minHeight: " 700px",
                  padding: " 1em 0em",
                  backgroundColor: "rgba(236, 226, 212, 0.18)"
                }}
              >
                <div
                  class="ui text container"
                  style={{
                    backgroundColor: "red",
                    padding: "10px",
                    transparent: 0.3,
                    borderRadius: "10px",
                    background:
                      "url(https://i.pinimg.com/originals/f0/b6/15/f0b615f78dd809d68ec389f4bc8d94bb.jpg) center center no-repeat "
                  }}
                >
                  <Fade cascade delay={1500} duration={2500}>
                    {" "}
                    <h1
                      class="ui inverted header"
                      style={{
                        color: "black",
                        fontize: "4em",
                        fontWeight: "bold",
                        marginBottom: "0px ",
                        marginTop: "3em",
                        letterSpacing: "4px",
                        background: "#f5f5f57d",
                        fontSize: "2.5rem",
                        fontFamily: " 'Righteous', cursive"
                      }}
                    >
                      Food Review
                    </h1>
                  </Fade>
                  <Fade bottom cascade delay={700} duration={1200}>
                    {" "}
                    <h2
                      class="ui inverted header"
                      style={{
                        fontSize: "1.7em",
                        fontWeight: "normal",
                        marginTop: "1.5em",
                        background: " #ec7d0e9c",
                        color: "white",
                        borderRadius: "21px"
                      }}
                    >
                      Review whatever you want when you want to.
                    </h2>
                  </Fade>
                  {/* <button class="ui huge primary button"  style={{background:'#E2B045'}}>
                    Get Started
                    <i aria-hidden="true" class="right arrow icon"></i>
                  </button> */}
                </div>

                <div style={{ marginRight: "20%", marginTop: "10%" }}>
                  <h1
                    style={{
                      color: "rgb(226, 176, 69)",
                      fontFamily: " 'Righteous', cursive",
                      fontSize: "4.0rem"
                    }}
                  >
                    Step 1:
                  </h1>
                  <p style={{ color: "black" }}>Create and account</p>{" "}
                  <img
                    alt="register"
                    style={{ cursor: "pointer" }}
                    onClick={() => props.history.push("/register")}
                    src="https://run4u.id/wp-content/uploads/2019/03/register-now-png-8.png"
                  />{" "}
                </div>

                <div style={{ marginLeft: "20%", marginTop: "10%" }}>
                  <h1
                    style={{
                      color: "rgb(226, 176, 69)",
                      fontFamily: " 'Righteous', cursive",
                      fontSize: "4.5rem"
                    }}
                  >
                    Step 2:
                  </h1>
                  <p style={{ color: "black" }}>Login to your account</p>
                  <img
                    alt="btn"
                    style={{ cursor: "pointer" }}
                    onClick={() => props.history.push("/login")}
                    src="http://www.pay2easy.com/images/logo/new_button.png"
                  />
                </div>

                <div style={{ marginRight: "0", marginTop: "10%" }}>
                  <h1
                    style={{
                      color: "rgb(226, 176, 69)",
                      fontFamily: " 'Righteous', cursive",
                      fontSize: "4.0rem"
                    }}
                  >
                    Step 3:
                  </h1>
                  <p style={{ color: "black" }}>Add your Reviews</p>
                  <img
                    alt="thumb"
                    style={{ cursor: "pointer" }}
                    onClick={() => props.history.push("/add_review")}
                    src="http://www.csnotepad.co.uk/virtual-receptionist-blog/wp-content/uploads/2015/08/thumbs-good1.png"
                  />
                </div>

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
