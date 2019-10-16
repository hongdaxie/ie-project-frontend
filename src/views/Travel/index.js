import React, { Component } from "react";
import { Layout, Col, Collapse, Typography } from "antd";
import USA from "../../../src/Home/imgs/USA.jpeg";
import Tick from "../../../src/Home/imgs/tick.png";
import UK from "../../../src/Home/imgs/UK.jpeg";
import China from "../../../src/Home/imgs/china.png";
import Thiland from "../../../src/Home/imgs/thiland.png";
import Indonessia from "../../../src/Home/imgs/indonessia.jpeg";
import NewsLand from "../../../src/Home/imgs/news-land.jpeg";

import ThilandSymbol from "../../../src/Home/imgs/thiland-symbol.png";
import IndonesiaSymbol from "../../../src/Home/imgs/indonesia-symbol.jpeg";
// import UsaSymbol from "../../../src/Home/imgs/usa-symbol.jpeg";
import ChinaSymbol from "../../../src/Home/imgs/China-symbol.png";
import UKSymbol from "../../../src/Home/imgs/UK-symbol.jpg";
import newzLandSymbol from "../../../src/Home/imgs/newz-land.jpg";
import UsaSymbol from "../../../src/Home/imgs/usa-symbol.jpeg";
import Bg1 from "../../../src/Home/imgs/backImage.png";

const { Paragraph } = Typography;
const { Panel } = Collapse;

export default class Travel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      selectedCountry: "",
      data: [
        {
          id: 0,
          name: "Thailand",
          region: "",
          detail: "",
          VACCINE: [
            {
              name: "Hepatitis A",
              spread: "Food & Water",
              detail: "Recommended for most travellers"
            },
            {
              name: "Hepatitis B",
              spread: "Blood & Body Fluids",
              detail: "Accelerated schedule available"
            },
            {
              name: "Rabies",
              spread: "Saliva of infected Animals",
              detail:
                "Recommended for long-term travellers and who may come in contact with animals"
            },
            {
              name: "Polio",
              spread: "Food & Water",
              detail:
                "Considered a routine vaccination for most travel itineraries. Single adult booster recommended"
            },
            {
              name: "Meningitis",
              spread: "Airborne & Direct Contact",
              detail:
                "Recommended for anyone unvaccinated or at an increased risk"
            },
            {
              name: "Typhoid",
              spread: "Food & Water",
              detail:
                "Recommended for travellers who want to have food from place where sanitation is poor."
            },
            {
              name: "Influenza",
              spread: "Airborne",
              detail: "Recommended for all travellers"
            }
          ]
        },
        {
          id: 0,
          name: "UK",
          region: "",
          detail: "",
          VACCINE: [
            {
              name: "Hepatitis A",
              spread: "Food & Water",
              detail: "Recommended for most travellers"
            },
            {
              name: "Hepatitis B",
              spread: "Blood & Body Fluids",
              detail: "Accelerated schedule available"
            },
            {
              name: "Rabies",
              spread: "Saliva of infected Animals",
              detail:
                "Recommended for long-term travellers and who may come in contact with animals"
            },
            {
              name: "Polio",
              spread: "Food & Water",
              detail:
                "Considered a routine vaccination for most travel itineraries. Single adult booster recommended"
            },
            {
              name: "Meningitis",
              spread: "Airborne & Direct Contact",
              detail:
                "Recommended for anyone unvaccinated or at an increased risk"
            },
            {
              name: "Influenza",
              spread: "Airborne",
              detail: "Recommended for all travellers"
            }
          ]
        },
        {
          id: 0,
          name: "China",
          region: "",
          detail: "",
          VACCINE: [
            {
              name: "Hepatitis A",
              spread: "Food & Water",
              detail: "Recommended for most travellers"
            },
            {
              name: "Hepatitis B",
              spread: "Blood & Body Fluids",
              detail: "Accelerated schedule available"
            },
            {
              name: "Rabies",
              spread: "Saliva of infected Animals",
              detail:
                "Recommended for long-term travellers and who may come in contact with animals"
            },
            {
              name: "Polio",
              spread: "Food & Water",
              detail:
                "Considered a routine vaccination for most travel itineraries. Single adult booster recommended"
            },
            {
              name: "Meningitis",
              spread: "Airborne & Direct Contact",
              detail:
                "Recommended for anyone unvaccinated or at an increased risk"
            },
            {
              name: "Influenza",
              spread: "Airborne",
              detail: "Recommended for all travellers"
            },
            {
              name: "Typhoid",
              spread: "Food & Water",
              detail:
                "Recommended for travelers who want to have food from place where sanitation is poor"
            },
            {
              name: "Yellow Fever",
              spread: "Mosquito",
              detail:
                "Required if traveling from a country with risk of yellow fever transmission. Does not apply to Hong Kong or Macao"
            },
            {
              name: "Japanese Encephalitis",
              spread: "Mosquito",
              detail:
                "Recommended depending on itinerary and activities. May be given to short- and extended-stay travellers, recurrent travellers and travel to rural areas."
            }
          ]
        },
        {
          id: 3,
          name: "New Zealand",
          region: "",
          detail: "",
          VACCINE: [
            {
              name: "WHO recommendation ",
              spread: "Airborne",
              detail:
                "no Yellow fever (2013) Country requirement, no Yellow fever vaccine recommendation"
            },
            {
              name: "CDC recommendations ",
              spread: "Airborne",
              detail:
                "no Yellow fever (2013) Country requirement, no Yellow fever vaccine recommendation"
            },
            {
              name: "Hepatitis A",
              // spread: "Airborne",
              detail:
                "You can get hepatitis A through contaminated food or water in New Zealand, so talk to your doctor to see if the hepatitis A vaccine is right for you."
            },
            {
              name: "Hepatitis B",
              // spread: "Airborne",
              detail:
                "You can get hepatitis B through sexual contact, contaminated needles, and blood products, so CDC recommends this vaccine if you might have sex with a new partner, get a tattoo or piercing, or have any medical procedures"
            }
          ]
        },
        {
          id: 4,
          name: "Indonesia",
          region: "",
          detail: "",
          VACCINE: [
            {
              name: "Rabies ",
              spread: "almost always spread by an animal bite",
              region:
                "Rabies is a risk throughout Indonesia, especially in Bali and nearby islands and Nias ",
              detail:
                "Avoid direct contact with dogs and other animals, including monkeys and bats. If bitten or scratched, immediately use soap and water to wash the wound thoroughly. Seek urgent medical attention"
            },
            {
              name: "	Measles ",
              spread: "Airborne",
              region:
                "Periodic outbreaks of measles continue to be reported in Indonesia, including Bali.",
              detail:
                "Full protection for measles requires two doses of vaccine four weeks apart"
            },
            {
              name: "	Magic Mushrooms ",
              spread: "Airborne",
              region: "Bali",
              detail: "Do not consume as it’s illegal and could lead to arrests"
            },
            {
              name: "Malaria ",
              spread: "Airborne",
              region: "Common in rural areas but not Jakarta.",
              detail: "taking prophylaxis for malaria where necessary"
            },
            {
              name: "5.	Japanese encephalitis and filariasis ",
              region: "Rural agricultural areas and Bali",
              spread: "Airborne",
              detail:
                "Take the vaccine if you’re planning to stay for more than a month in rural areas"
            }
          ]
        },
        {
          id: 5,
          name: "United States of America ",
          region: "",
          detail: "Throughout US",
          VACCINE: [
            {
              name: "Hepatitis A",
              spread: "Airborne",
              detail:
                "Medical treatment is expensive. Get comprehensive travel insurance to cover medical costs before you depart. Make sure your vaccinations are up-to-date before you travel and follow advice from local health authorities"
            }
          ]
        }
      ]
    };
  }
  render() {
    const { selected, selectedCountry, data } = this.state;
    return (
      <Layout>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            paddingRight: "8%",
            paddingLeft: "8%",
            paddingTop: "4%",
            paddingBottom: "3%",
            height: 700
          }}
        >
          <div
            style={{
              flexGrow: 1,
              // width:'30%',
              width: 220,
              border: "1px solid rgb(211,212,213)",
              borderRadius: 12,
              backgroundColor: "#fff"
            }}
          >
            <div
              style={{
                width: "85%",
                backgroundImage:
                  "linear-gradient(90deg, #2787c8 0%, #48a6e5 100%)",
                color: "#fff",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "10%",
                display: "flex",
                margin: "3% auto 0% auto",
                border: "1px solid rgb(211,212,213)",
                borderRadius: 5
              }}
            >
              Select Journey
            </div>
            <ul
              style={{
                width: "80%",
                margin: "0% auto 0% auto",
                height: "100%"
              }}
            >
              <li
                onClick={() =>
                  this.setState({ selected: 0, selectedCountry: data[0] })
                }
                style={{
                  backgroundColor: selected === 0 ? "#c3e7ff" : "#fff",
                  color: selected === 0 ? "#fff" : "#555",
                  width: "100%",
                  height: "13%",
                  textAlign: "left",
                  borderRight: "1px solid rgb(211,212,213)",
                  borderLeft: "1px solid rgb(211,212,213)",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: "8%",
                  paddingLeft: "27%"
                }}
              >
                <img
                  src={Thiland}
                  style={{
                    width: 35,
                    marginTop: 0,
                    height: 25,
                    borderRadius: 4,
                    marginRight: "2%"
                  }}
                />
                {data[0].name}
              </li>
              <li
                onClick={() =>
                  this.setState({ selected: 1, selectedCountry: data[1] })
                }
                style={{
                  backgroundColor: selected === 1 ? "#c3e7ff" : "#fff",
                  color: selected === 1 ? "#fff" : "#555",
                  width: "100%",
                  height: "13%",
                  textAlign: "left",
                  // display: "flex",
                  borderRight: "1px solid rgb(211,212,213)",
                  borderLeft: "1px solid rgb(211,212,213)",
                  justifyContent: "center",
                  paddingLeft: "27%",
                  paddingTop: "8%"
                  // alignItems: "center"
                }}
              >
                <img
                  src={UK}
                  style={{
                    width: 35,
                    marginTop: 0,
                    height: 25,
                    borderRadius: 4,
                    marginRight: "2%"
                  }}
                />
                {data[1].name}
              </li>
              <li
                onClick={() =>
                  this.setState({ selected: 2, selectedCountry: data[2] })
                }
                style={{
                  backgroundColor: selected === 2 ? "#c3e7ff" : "#fff",
                  color: selected === 2 ? "#fff" : "#555",
                  width: "100%",
                  height: "13%",
                  textAlign: "left",
                  borderRight: "1px solid rgb(211,212,213)",
                  borderLeft: "1px solid rgb(211,212,213)",
                  paddingLeft: "27%",
                  paddingTop: "8%",
                  justifyContent: "center"
                  // alignItems: "center"
                }}
              >
                <img
                  src={China}
                  style={{
                    width: 35,
                    marginTop: 0,
                    height: 25,
                    borderRadius: 4,
                    marginRight: "2%"
                  }}
                />
                {data[2].name}
              </li>
              <li
                onClick={() =>
                  this.setState({ selected: 3, selectedCountry: data[3] })
                }
                style={{
                  backgroundColor: selected === 3 ? "#c3e7ff" : "#fff",
                  color: selected === 3 ? "#fff" : "#555",
                  width: "100%",
                  height: "13%",
                  textAlign: "left",
                  borderRight: "1px solid rgb(211,212,213)",
                  borderLeft: "1px solid rgb(211,212,213)",
                  // display: "flex",
                  paddingLeft: "27%",
                  paddingTop: "8%",
                  justifyContent: "center"
                  // alignItems: "center"
                }}
              >
                <img
                  src={NewsLand}
                  style={{
                    width: 35,
                    marginTop: 0,
                    height: 25,
                    borderRadius: 4,
                    marginRight: "2%"
                  }}
                />
                {data[3].name}
              </li>
              <li
                onClick={() =>
                  this.setState({ selected: 4, selectedCountry: data[4] })
                }
                style={{
                  backgroundColor: selected === 4 ? "#c3e7ff" : "#fff",
                  color: selected === 4 ? "#fff" : "#555",
                  width: "100%",
                  height: "13%",
                  textAlign: "left",
                  paddingTop: "8%",
                  borderRight: "1px solid rgb(211,212,213)",
                  borderLeft: "1px solid rgb(211,212,213)",
                  // display: "flex",
                  paddingLeft: "27%",
                  justifyContent: "center"
                  // alignItems: "center"
                }}
              >
                <img
                  src={Indonessia}
                  style={{
                    width: 35,
                    marginTop: 0,
                    height: 25,
                    borderRadius: 4,
                    marginRight: "2%"
                  }}
                />
                {data[4].name}
              </li>
              <li
                onClick={() =>
                  this.setState({ selected: 5, selectedCountry: data[5] })
                }
                style={{
                  backgroundColor: selected === 5 ? "#c3e7ff" : "#fff",
                  color: selected === 5 ? "#fff" : "#555",
                  width: "100%",
                  height: "13%",
                  borderBottomLeftRadius: 5,
                  borderBottomRightRadius: 5,
                  textAlign: "left",
                  borderBottom: "1px solid rgb(211,212,213)",
                  borderRight: "1px solid rgb(211,212,213)",
                  borderLeft: "1px solid rgb(211,212,213)",
                  // display: "flex",
                  paddingLeft: "27%",
                  paddingTop: "8%",
                  justifyContent: "center"
                  // alignItems: "center"
                }}
              >
                <img
                  src={USA}
                  style={{
                    width: 35,
                    marginTop: 0,
                    height: 25,
                    borderRadius: 4,
                    marginRight: "2%"
                  }}
                />
                {data[5].name}
              </li>
            </ul>
          </div>
          {selected != null ? (
            <div
              style={{
                // flexGrow: 3,
                width: "70%",
                border: "1px solid rgb(211,212,213)",
                borderRadius: 12,
                backgroundColor: "#fff",
                marginLeft: "4%"
              }}
            >
              <div
                style={{
                  width: "90%",
                  height: "12%",
                  border: "1px solid rgb(211,212,213)",
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                  margin: "5% auto 0% auto",
                  display: "flex",
                  fontSize: 25,
                  justifyContent: "flex-start",
                  alignItems: "center",
                  paddingLeft: "4%"
                }}
              >
                {selectedCountry.name}
              </div>
              <div
                style={{
                  width: "90%",
                  overflow: "scroll",
                  height: "76%",
                  border: "1px solid rgb(211,212,213)",
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 8,
                  textAlign: "center",
                  margin: "1% auto 0% auto"
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "40%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  <img
                    src={
                      selected === 0
                        ? Thiland
                        : selected === 1
                        ? UK
                        : selected === 2
                        ? China
                        : selected === 3
                        ? NewsLand
                        : selected === 4
                        ? Indonessia
                        : USA
                    }
                    style={{
                      width: "40%",
                      height: "100%",
                      borderRadius: 10,
                      margin: "2% auto 0% auto"
                    }}
                  />
                  <div
                    style={{
                      width: "40%",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%"
                    }}
                  >
                    <img
                      src={
                        selected === 0
                          ? ThilandSymbol
                          : selected === 1
                          ? UKSymbol
                          : selected === 2
                          ? ChinaSymbol
                          : selected === 3
                          ? newzLandSymbol
                          : selected === 4
                          ? IndonesiaSymbol
                          : UsaSymbol
                      }
                      style={{
                        width: "60%",
                        height: "100%",
                        borderRadius: 10,
                        margin: "2% auto 0% auto"
                      }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    marginTop: "5%",
                    width: "90%",
                    margin: "5% auto 3% auto",
                    justifyContent: "center",
                    height: "15%",
                    alignItems: "space-between",
                    border: "1px solid rgb(211,212,213)",
                    borderRadius: 8
                    // borderRight: "1px solid rgb(211,212,213)",
                  }}
                >
                  <div
                    style={{
                      width: "35%",
                      display: "flex",
                      justifyContent: "left",
                      alignItems: "center",
                      textAlign: "left",
                      height: "100%"
                    }}
                  >
                    VACCINE RECOMMENDATIONS
                  </div>
                  <div
                    style={{
                      width: "30%",
                      display: "flex",
                      justifyContent: "left",
                      alignItems: "center",
                      textAlign: "left",
                      height: "100%"
                    }}
                  >
                    HOW DISEASE SPREADS
                  </div>
                  <div
                    style={{
                      width: "30%",
                      display: "flex",
                      justifyContent: "left",
                      alignItems: "center",
                      textAlign: "left",
                      height: "100%"
                    }}
                  >
                    DETAILS
                  </div>
                </div>
                <div style={{}}>
                  {selectedCountry != "" &&
                    selectedCountry.VACCINE.map(item => {
                      return (
                        <div
                          style={{
                            display: "flex",
                            // marginTop: "5%",
                            // borderBottomWidth:1,
                            width: "90%",
                            margin: "0% auto",
                            borderBottom: "1px solid rgb(211,212,213)",
                            // borderBottomColor: 'rgb(211,212,213)',
                            justifyContent: "center",
                            marginBottom: "3%",
                            height: "15%",
                            alignItems: "space-between"
                          }}
                        >
                          <div
                            style={{
                              width: "30%",
                              textAlign: "left",
                              height: "100%"
                            }}
                          >
                            <img
                              src={Tick}
                              style={{
                                width: 25,
                                height: 25,
                                margin: "2% auto 0% auto"
                              }}
                            />{" "}
                            {item.name}
                          </div>
                          <div
                            style={{
                              width: "30%",
                              textAlign: "left",
                              height: "100%"
                            }}
                          >
                            {item.spread}
                          </div>
                          <div
                            style={{
                              width: "30%",
                              textAlign: "left",
                              height: "100%"
                            }}
                          >
                            {item.detail}
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          ) : (
            <div
              style={{
                // flexGrow: 3,
                width: "70%",
                border: "1px solid rgb(211,212,213)",
                borderRadius: 12,
                backgroundColor: "#fff",
                marginLeft: "4%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
            <div style={{color: '#33333', fontSize:18, marginTop:'5%', marginBottom:'3%', fontWeight: 900}}>
            Please select your Destination!!!
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  backgroundSize: 'cover',
                  borderRadius: 10,
                  backgroundImage: `url(${Bg1})`,
                  border: "rgb(196,171,136)",
                  justifyContent: "center",
                  alignItems: "center",
                  height: '80%',
                  color: "red",
                  fontSize: 25
                }}
              >
                
              </div>
              <div
                style={{
                  width: "100%",
                  marginTop: "4%",
                  height: 100,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <div
                  style={{
                    width: "90%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    height: 100
                  }}
                >
                  <div
                    onClick={() =>
                      this.setState({ selected: 0, selectedCountry: data[0] })
                    }
                    style={{
                      width: "15%",
                      display: "flex",
                      backgroundColor: "#fff",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      fontWeight: selected === 0 ? 900 : "",
                      flexDirection: "column",
                      backgroundImage:
                        selected === 0
                          ? "linear-gradient(to right, rgb(5,85,255), rgb(50,115,246)"
                          : "",
                      border: "2px solid rgb(232,234,247)",
                      borderRadius: 5
                    }}
                  >
                    <img
                      src={Thiland}
                      style={{ width: "100%", height: "50%" }}
                    />
                    <div
                      style={{
                        marginTop: "8%",
                        height: "42%",
                        color: selected === 0 ? "#fff" : "rgb(5,85,255)"
                      }}
                    >
                      Thailand
                    </div>
                  </div>
                  <div
                    onClick={() =>
                      this.setState({ selected: 1, selectedCountry: data[1] })
                    }
                    style={{
                      width: "15%",
                      display: "flex",
                      backgroundColor: "#fff",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      fontWeight: selected === 1 ? 900 : "",
                      flexDirection: "column",
                      border: "2px solid rgb(232,234,247)",
                      backgroundImage:
                        selected === 1
                          ? "linear-gradient(to right, rgb(5,85,255), rgb(50,115,246)"
                          : "",
                      borderRadius: 5
                    }}
                  >
                    <img src={UK} style={{ width: "100%", height: "50%" }} />
                    <div
                      style={{
                        marginTop: "8%",
                        height: "42%",
                        color: selected === 1 ? "#fff" : "rgb(5,85,255)"
                      }}
                    >
                      UK
                    </div>
                  </div>
                  <div
                    onClick={() =>
                      this.setState({ selected: 2, selectedCountry: data[2] })
                    }
                    style={{
                      width: "15%",
                      display: "flex",
                      backgroundColor: "#fff",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      fontWeight: selected === 2 ? 900 : "",
                      flexDirection: "column",
                      border: "2px solid rgb(232,234,247)",
                      backgroundImage:
                        selected === 2
                          ? "linear-gradient(to right, rgb(5,85,255), rgb(50,115,246)"
                          : "",
                      borderRadius: 5
                    }}
                  >
                    <img src={China} style={{ width: "100%", height: "50%" }} />
                    <div
                      style={{
                        marginTop: "8%",
                        height: "42%",
                        color: selected === 2 ? "#fff" : "rgb(5,85,255)"
                      }}
                    >
                      China
                    </div>
                  </div>
                  <div
                    onClick={() =>
                      this.setState({ selected: 3, selectedCountry: data[3] })
                    }
                    style={{
                      width: "15%",
                      display: "flex",
                      backgroundColor: "#fff",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      fontWeight: selected === 3 ? 900 : "",
                      flexDirection: "column",
                      border: "2px solid rgb(232,234,247)",
                      borderRadius: 5,
                      backgroundImage:
                        selected === 3
                          ? "linear-gradient(to right, rgb(5,85,255), rgb(50,115,246)"
                          : ""
                    }}
                  >
                    <img
                      src={NewsLand}
                      style={{ width: "100%", height: "50%" }}
                    />
                    <div
                      style={{
                        marginTop: "8%",
                        height: "42%",
                        color: selected === 3 ? "#fff" : "rgb(5,85,255)"
                      }}
                    >
                      New Zealand
                    </div>
                  </div>
                  <div
                    onClick={() =>
                      this.setState({ selected: 4, selectedCountry: data[4] })
                    }
                    style={{
                      width: "15%",
                      display: "flex",
                      backgroundColor: "#fff",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      flexDirection: "column",
                      fontWeight: selected === 4 ? 900 : "",
                      backgroundImage:
                        selected === 4
                          ? "linear-gradient(to right, rgb(5,85,255), rgb(50,115,246)"
                          : "",
                      border: "2px solid rgb(232,234,247)",
                      borderRadius: 5
                    }}
                  >
                    <img
                      src={Indonessia}
                      style={{ width: "100%", marginTop: 0, height: "50%" }}
                    />
                    <div
                      style={{
                        marginTop: "8%",
                        height: "42%",
                        color: selected === 4 ? "#fff" : "rgb(5,85,255)"
                      }}
                    >
                      Indonesia
                    </div>
                  </div>
                  <div
                    onClick={() =>
                      this.setState({ selected: 5, selectedCountry: data[5] })
                    }
                    style={{
                      width: "15%",
                      display: "flex",
                      backgroundColor: "#fff",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      flexDirection: "column",
                      fontWeight: selected === 4 ? 900 : "",
                      backgroundImage:
                        selected === 4
                          ? "linear-gradient(to right, rgb(5,85,255), rgb(50,115,246)"
                          : "",
                      border: "2px solid rgb(232,234,247)",
                      borderRadius: 5
                    }}
                  >
                    <img
                      src={USA}
                      style={{ width: "100%", marginTop: 0, height: "50%" }}
                    />
                    <div
                      style={{
                        marginTop: "8%",
                        height: "42%",
                        color: selected === 4 ? "#fff" : "rgb(5,85,255)"
                      }}
                    >
                      United States of America
                    </div>
                  </div>
                </div>
              </div>
              <Col md={24} lg={{ span: 22, offset: 1 }}>
                <div style={{ marginTop: "8px" }}>
                  <Collapse
                  // defaultActiveKey={['1']}
                  >
                    <Panel header="Source" key="1">
                      <div id="influenza">
                        <Paragraph>
                          <a href="https://www.who.int/" target="_blank">
                            WHO(World Health Organization)
                          </a>
                        </Paragraph>
                        <Paragraph>
                          <a href="https://www.cdc.gov" target="_blank">
                            CDC(Centers for Disease Control and Prevention (US))
                          </a>
                        </Paragraph>
                        <Paragraph>
                          <a
                            href="https://www.health.gov.au/health-topics/immunisation"
                            target="_blank"
                          >
                            Australian Government
                          </a>
                        </Paragraph>
                      </div>
                    </Panel>
                  </Collapse>
                </div>
              </Col>
            </div>
          )}
        </div>
      </Layout>
    );
  }
}
