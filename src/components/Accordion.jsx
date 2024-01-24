import { useState } from "react";
import "../styles/accordion.css";

const Accordion = () => {
  const [htmltoggle, sethtmlToggle] = useState(false);
  const [csstoggle, setcssToggle] = useState(false);
  const [javascripttoggle, setjavascripttoggle] = useState(false);
  return (
    <>
      <div className="main-div flex flex-col space-y-8">
        <div className="border">
          <div
            className="flex justify-between items-center"
            onClick={() => sethtmlToggle(!htmltoggle)}
          >
            <p className="bg-gray p-4">HTML</p>
            <span aria-hidden={true} className="accordion-icon" />
          </div>
          {htmltoggle && (
            <div>
              The HyperText Markup Language or HTML is the standard markup
              language for documents designed to be displayed in a web browser.
            </div>
          )}
        </div>
        <div className="">
          <p className="bg-gray p-4" onClick={() => setcssToggle(!csstoggle)}>
            CSS
          </p>
          {csstoggle && (
            <div>
              Cascading Style Sheets is a style sheet language used for
              describing the presentation of a document written in a markup
              language such as HTML or XML.
            </div>
          )}
        </div>
        <div className="">
          <p
            className="bg-gray p-4"
            onClick={() => setjavascripttoggle(!javascripttoggle)}
          >
            JAVASCRIPT
          </p>
          {javascripttoggle && (
            <div>
              JavaScript, often abbreviated as JS, is a programming language
              that is one of the core technologies of the World Wide Web,
              alongside HTML and CSS.
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Accordion;
