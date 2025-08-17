import "../styles/resumeBuilder.css";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';


const ResumeHeader = (props) => {
    const { theName, theEmail, thePhone, theGitHub, theLinkedIn } = props;


    const [ name, setName ] = useState(theName);
    const [ email, setEmail ] = useState(theEmail);
    const [ phone, setPhone ] = useState(thePhone);
    const [ github, setGithub ] = useState(theGitHub);
    const [ linkedIn, setLinkedIn ] = useState(theLinkedIn);

    const [ editing, setEditing ] = useState(false);

    const [ visible, setVisible ] = useState("hidden");
    const [ pointerValue, setPointerValue ] = useState("none");




    return(
        <div>
            <h1 className="intro">Introduction</h1>
            <div className={!editing? "" : "a"}>
                <div className="b" 
                    onMouseOver={() => {
                        setVisible("visible");
                        setPointerValue("pointer");
                    }}
                    onMouseOut={() => {
                        setVisible("hidden");
                        setPointerValue("none");
                    }}
                >
                    <div className="name">
                        <h1 id="name">{name}</h1>
                    </div>
                    <div className="email-phone">
                        <div>
                            <h3><span id="email">{email}</span> | <span id="phone">{phone}</span> | <span id="github">{github}</span></h3>
                            <h3 className="center-text" id="linkedIn">{linkedIn}</h3>
                        </div>
                    </div>
                    <div className="c" style={{visibility: visible, cursor:pointerValue}} onClick={() => {
                        // setEditClicked(!editClicked);
                        setEditing(!editing);
                    }}>
                        <p className="small-text">edit</p>
                        <FontAwesomeIcon className="edit-button" icon={faPenToSquare} />
                    </div>
                </div>


                {/*This part only renders when the pencil in a book icon is clicked*/}
                {editing && (
                    <div className="d">
                        <div className="e">
                            <div className="f">
                                <input type="text" placeholder="name" value={name} onChange={(e) => {
                                    setName(e.target.value);                   
                                }} />
                                <input type="text" placeholder="email@someemail.com" value={email} onChange={(e) => {
                                    setEmail(e.target.value);                   
                                }} />
                                <input type="text" placeholder="phone" value={phone} onChange={(e) => {
                                    setPhone(e.target.value);                   
                                }} />
                                <input type="text" placeholder="github" value={github} onChange={(e) => {
                                    setGithub(e.target.value);                   
                                }} />
                                <input type="text" placeholder="linkedIn link" value={linkedIn} onChange={(e) => {
                                    setLinkedIn(e.target.value);                   
                                }} />
                            </div>
                            <div className="g">
                                <button onClick={() => {setEditing(false)}}>Submit</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ResumeHeader;
