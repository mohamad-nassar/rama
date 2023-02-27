import React from "react";
import Header from "../layouts/header";
import Button from "react-bootstrap/Button";
import '../App.css';
export default function Index() {
  return [
    <div key={"main"} style={{ "backgroundImage":"url('https://images.unsplash.com/photo-1532779952550-b8fc9200ed8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80')","backgroundSize":"cover" }}>
    <Header />
    <div key={"index-div"} className="bg-transparent text-white" id="index-div">
      <h1 className="">
        <div className="word m-5 mb-0" style={{ "fontSize":"70px" }}>
          <p>WE ARE</p>&nbsp;<p className="word-1" style={{ "fontWeight":"bold" }}>KON MOSTAKBALAK</p>
        </div>
        <h1 className="w-2 m-5 mt-0 mb-0" style={{ "fontWeight":"400","fontSize":"70px" }}>DIGITAL AGENCY</h1>
      </h1>
      {/* <hr className="hrtitle m-5 mb-0 mt-0"/> */}
      <svg viewBox="0 0 100 1" height="4" className="hrtitle m-5 mb-0 mt-0">
        <line
          x1="0"
          y1="0.5"
          x2="100"
          y2="0.5"
          stroke="aqua"
          stroke-width="1"
        />
      </svg>

      <br />
      <h5 style={{ "fontWeight":"400" }} className="m-5">We make everything looks as good as you want.</h5>
        <br />
        <Button variant="outline-primary" className="m-5 mb-5 mt-0">DISCOVER MORE</Button>
        <Button variant="primary" className="m-5 mb-5 mt-0">GET STARTED</Button>
    </div>
    </div>
  ];
}
