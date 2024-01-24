import { useState } from "react";
import "../styles/accordion.css";

const Accordion = () => {
  const [htmltoggle, sethtmlToggle] = useState(false);
  const [csstoggle, setcssToggle] = useState(false);
  const [javascripttoggle, setjavascripttoggle] = useState(false);
  return (
    <>
      <div className="main-div flex flex-col space-y-8 w-3/4">
        <div className="border-b">
          <div
            className="flex px-4 cursor-pointer pb-1 justify-between items-center hover:bg-gray-100 hover:rounded-sm"
            onClick={() => sethtmlToggle(!htmltoggle)}
          >
            <p>HTML</p>
            <span aria-hidden={true} className={htmltoggle ? 'flip accordion-icon':'accordion-icon'} />
          </div>
          {htmltoggle && (
            <div className="px-4 py-1">
              The HyperText Markup Language or HTML is the standard markup
              language for documents designed to be displayed in a web browser.
            </div>
          )}
        </div>
        <div className="border-b">
          <div
            className="flex px-4 pb-1 cursor-pointer justify-between items-center  hover:bg-gray-100 hover:rounded-sm"
            onClick={() => setcssToggle(!csstoggle)}
          >
            <p className="bg-gray ">CSS</p>
            <span aria-hidden={true}  className={htmltoggle ? 'flip accordion-icon':'accordion-icon'} />
          </div>

          {csstoggle && (
            <div className="px-4 py-1">
              Cascading Style Sheets is a style sheet language used for
              describing the presentation of a document written in a markup
              language such as HTML or XML.
            </div>
          )}
        </div>
        <div className="border-b">
          <div
            className="flex justify-between cursor-pointer items-center px-4 pb-1  hover:bg-gray-100 hover:rounded-sm"
            onClick={() => setjavascripttoggle(!javascripttoggle)}
          >
            <p className="bg-gray ">JAVASCRIPT</p>
            <span aria-hidden={true}  className={htmltoggle ? 'flip accordion-icon':'accordion-icon'} />
          </div>

          {javascripttoggle && (
            <div className="px-4 py-1">
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
