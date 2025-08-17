import "../styles/experience.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react";



const Experience = () => {
    const [cName, setCName] = useState("");
    const [cPosition, setCPosition] = useState("");
    const [cFrom, setCFrom] = useState("");
    const [cTo, setCTo] = useState("");
    const [cResponsibilities, setCResponsibilities] = useState("");

    const [editing, setEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [adding, setAdding] = useState(false);
    const [ closeAdding, setCloseAdding ] = useState("inline");

    const [experiences, setExperiences] = useState([]);

    const [ showAdd, setShowAdd ] = useState("visible");




    useEffect(() => {
        const saved = localStorage.getItem("experiences");
        if (saved) {
        setExperiences(JSON.parse(saved));
        }
    }, []);

    // ✅ Save to localStorage whenever experiences change
    useEffect(() => {
        localStorage.setItem("experiences", JSON.stringify(experiences));
    }, [experiences]);






    function addExperience(name, position, from, to, responsibilities) {
        if (!name || !position || !from || !to || !responsibilities) return;
        setExperiences([
            ...experiences,
            { name, position, from, to, responsibilities }
        ]);
        // update in local storage
        // reset fields after adding
        setCName("");
        setCPosition("");
        setCFrom("");
        setCTo("");
        setCResponsibilities("");
    }

    function updateExperience() {
        const updatedExperiences = [...experiences];
        updatedExperiences[editIndex] = {
            name: cName,
            position: cPosition,
            from: cFrom,
            to: cTo,
            responsibilities: cResponsibilities,
        };
        setExperiences(updatedExperiences);
        setEditing(false);
        setEditIndex(null);

        // clear inputs
        setCName("");
        setCPosition("");
        setCFrom("");
        setCTo("");
        setCResponsibilities("");
    }

    function deleteExperience(index) {
        const updatedExperiences = experiences.filter((_, i) => i !== index);
        setExperiences(updatedExperiences);
    }

    return (
        <div className="outer-set">
            <h1 className="exp">Experience</h1>

            <div className={!editing ? "stuff" : "one"}>
                <div className="two job-section">
                    {experiences.map((theExp, index) => (
                        <div key={index} id={index} className="project-element">
                            <div className="company-tags">
                                <h3 className="company-tag1">
                                    <span className="cName">{theExp.name}</span> |{" "}
                                    <span className="cPosition">{theExp.position}</span>
                                </h3>
                                <h3 className="company-tag2">
                                    <span className="cFrom">{theExp.from}</span> -{" "}
                                    <span className="cTo">{theExp.to}</span>
                                </h3>
                            </div>
                            <div className="job-responsibilities">
                                <p className="responsibilities">Responsibilities</p>
                                <article>{theExp.responsibilities}</article>
                            </div>
                            <div className="three">
                                <div
                                    className="three-and-half"
                                    onClick={() => {
                                        setEditing(true);
                                        setEditIndex(index);

                                        // sync states with the selected experience
                                        setCName(theExp.name);
                                        setCPosition(theExp.position);
                                        setCFrom(theExp.from);
                                        setCTo(theExp.to);
                                        setCResponsibilities(theExp.responsibilities);
                                        setShowAdd("hidden");
                                    }}
                                >
                                    <p className="small-text">edit</p>
                                    <FontAwesomeIcon className="edit-btn" icon={faPenToSquare} />
                                </div>
                                <div
                                    className="three-and-half"
                                    onClick={() => deleteExperience(index)}
                                >
                                    <p className="small-text">delete</p>
                                    <FontAwesomeIcon className="edit-btn" icon={faTrash} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="add-experience">
                    <button onClick={() => setAdding(true)} style={{visibility: showAdd}}>
                        Add Experience <FontAwesomeIcon className="FA-icon" icon={faPlus} />
                    </button>
                </div>






                {editing && (
                    <div className="four">
                        <div className="five">
                            <div className="six">
                                <input
                                    type="text"
                                    value={cName}
                                    placeholder="Instagram"
                                    onChange={(e) => setCName(e.target.value)}
                                />
                                <input
                                    type="text"
                                    value={cPosition}
                                    placeholder="Brainrot Engineer"
                                    onChange={(e) => setCPosition(e.target.value)}
                                />
                                <input
                                    type="text"
                                    value={cFrom}
                                    placeholder="01/2000"
                                    onChange={(e) => setCFrom(e.target.value)}
                                />
                                <input
                                    type="text"
                                    value={cTo}
                                    placeholder="still there"
                                    onChange={(e) => setCTo(e.target.value)}
                                />
                                <textarea
                                    value={cResponsibilities}
                                    onChange={(e) => setCResponsibilities(e.target.value)}
                                />
                            </div>
                            <div className="seven">
                                <button onClick={() => { 
                                updateExperience(); 
                                setShowAdd("visible"); 
                                }}>Submit</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>



            {adding && (
                <div className="adding-container" style={{display: closeAdding,}}>
                    <div className="center-text"><h1>Add Experience</h1></div>
                    <div className="short-answers">
                        <span>
                            Company name:{" "}
                            <input
                                value={cName}
                                type="text"
                                placeholder="Hustler University"
                                onChange={(e) => setCName(e.target.value)}
                            />
                        </span>
                        <span>
                            Position:{" "}
                            <input
                                value={cPosition}
                                type="text"
                                placeholder="IT maintenance"
                                onChange={(e) => setCPosition(e.target.value)}
                            />
                        </span>
                        <span>
                            From:{" "}
                            <input
                                value={cFrom}
                                type="text"
                                placeholder="05/2009"
                                onChange={(e) => setCFrom(e.target.value)}
                            />
                        </span>
                        <span>
                            To:{" "}
                            <input
                                value={cTo}
                                type="text"
                                placeholder="08/2012"
                                onChange={(e) => setCTo(e.target.value)}
                            />
                        </span>
                    </div>
                    <div className="responsibilites-box">
                        <p>
                            Responsibilities:{" "}
                            <textarea
                                value={cResponsibilities}
                                placeholder="Ran computer updates quarterly"
                                onChange={(e) => setCResponsibilities(e.target.value)}
                            />
                        </p>
                    </div>
                    <div className="add-exp">
                        <button
                            className="add"
                            onClick={() => {
                                setAdding(false);
                                addExperience(cName, cPosition, cFrom, cTo, cResponsibilities);
                            }}
                        >
                            Add
                        </button>
                        <button className="cancel" onClick={() => setAdding(false)}>
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Experience;
