import React from 'react';
import { useLocation } from "react-router-dom";

function Project() {
    let location = useLocation();
    
    return (
        <div className="Project">
            <div className="container" >
                <div class="card">
                    <img src={location.state.imgUrl} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{location.state.title}</h5>
                        <p class="card-text">
                            Summary: {location.state.summary}
                        </p>
                        <p class="card-text">
                            Technologies: {location.state.technologies}
                        </p>
                        <a href={location.state.githubUrl} class="btn btn-primary">Go to Project</a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Project;
