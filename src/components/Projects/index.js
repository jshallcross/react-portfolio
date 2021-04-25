import React from "react";


function Project(props) {
    const { projects } = props

    let col = []
    projects.forEach((project, i) => {
        let row = [];
        if (i % 2 === 0) {
            row.push(projects[i], projects[i+1])
            col.push(row);
        }
        if (col[col.length - 1][1] === undefined) {
           col.splice(col.length-1, 1, [row[0]])
        } else return
    })

    return (
        <div className="">  
            {col.map((project, index) => (
                <div className="row " key={index}>
                    {project.map(item => (
                        <div className=" col-xs-12 col-md-6" key={item.name}>
                            <div className="card bg-dark">
                            <p className="card-title">{item.name}</p>
                              <p className="card-description">{item.description}</p>
                                <img src={item.imageURL} className="card-img" alt={item.name} title={item.name}></img>
                                <div className="card-body">
                                    <p className="card-text"><a className="card-link" href={item.appLink} target="_blank" title="Password Generator" rel="noreferrer" class="project-text">Deployed Site: {item.name}</a></p>
                                    <hr></hr>
                                    <p className="card-text"><a className="card-link" href={item.githubLink} target="_blank" title="Github Repo" rel="noreferrer" class="project-text"><i id="github" className = "fab fa-github"></i> {item.name}</a></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}            
        </div>
    );
}

export default Project;