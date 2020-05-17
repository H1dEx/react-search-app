import React from 'react';

const Repos = ({repos}) => (
    <React.Fragment>
        {repos.map(repo => (
            <div key={repo.id} className="card mb-3">
                <div className="card-body">
                    <h5>
                        <a
                            href={repo.html_url}
                            rel="noopener noreferrer"
                            target="_blank"
                        >{repo.name}</a>
                    </h5>
                </div>
            </div>
        ))}
    </React.Fragment>
)

export default Repos;