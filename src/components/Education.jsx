import { useState } from "react";
import "../styles/education.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const Education = (props) => {
    const { schoolName, major, start, end, activitiesclubs } = props;
    const [ sName, setSName ] = useState(schoolName);
    const [ sMajor, setSMajor ] = useState(major);
    const [ sStart, setSStart ] = useState(start);
    const [ sEnd, setSEnd ] = useState(end);
    const [ sActicities, setSActivities ] = useState(activitiesclubs);

    const [ editing, setEditing ] = useState(false);

    const [ visible, setVisible ] = useState("hidden");
    const [ pointerValue, setPointerValue ] = useState("none");

    
    return(
        <div>
            <h1 className="edu">Education</h1>
            <div className={!editing? "" : "one"}>
                <div className="two"
                onMouseOver={() => {
                    setVisible("visible");
                    setPointerValue("pointer");
                }}
                onMouseOut={() => {
                    setVisible("hidden");
                    setPointerValue("none");
                }}
                >
                    <div>
                        <h3 id="sName">{sName}</h3>
                    </div>
                    <div>
                        <p>{sMajor}:<span> {sStart} - </span> <span>{sEnd}</span></p>
                    </div>
                    <div>
                        <p id="second-p-tag">Activities and clubs: <span>{sActicities}</span></p>
                    </div>
                    <div className="three" style={{visibility: visible, cursor: pointerValue}} 
                    onClick={() => {
                        // setEditing(!editing);    // this one is good if the we don't have a submit button, in this case we do have a submit button, so we comment this
                        setEditing(!editing);
                    }}
                    >
                        <p className="small-text">edit</p>
                        <FontAwesomeIcon className="edit-button" icon={faPenToSquare} />
                    </div>
                </div>
                

                {editing && (
                    <div className="four">
                        <div className="five">
                            <div className="six">
                                <input type="text" placeholder="Hustler's University" value={sName} 
                                    onChange={(e) => {
                                        setSName(e.target.value);
                                    }}
                                />
                                <input type="text" placeholder="Communications and Psychology" value={sMajor} 
                                    onChange={(e) => {
                                        setSMajor(e.target.value);
                                    }} 
                                />
                                <input type="text" placeholder="09/2000" value={sStart}
                                    onChange={(e) =>{
                                        setSStart(e.target.value);
                                    }}
                                />
                                <input type="text" placeholder="05/2004" value={sEnd}
                                    onChange={(editingElement) => {
                                        setSEnd(editingElement.target.value);
                                    }}
                                />
                                <input type="text" placeholder="Fraternity or extracurricular name" value={sActicities}
                                    onChange={(editingElement) => {
                                        setSActivities(editingElement.target.value);
                                    }}
                                />
                            </div>
                            <div className="seven">
                                <button
                                onClick={() => {
                                    setEditing(false);
                                }}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>   
                )}
            </div>
        </div>
    );
};

export default Education;
