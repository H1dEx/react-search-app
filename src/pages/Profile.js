import React, {useContext, useEffect} from 'react';
import {Link, withRouter} from "react-router-dom";
import {GithubContext} from "../context/github/githubContext";
import Repos from "../components/Repos";

const Profile = ({match}) => {
    const {getUser, getRepos, user, repos, loading} = useContext(GithubContext);
    useEffect(() => {
        getUser(match.params.name);
        getRepos(match.params.name);
        // eslint-disable-next-line
    }, [])

    if (loading) return <p className="text-center">Loading...</p>
    const {name = 'lol', company, avatar_url, location, bio, blog, login, html_url, followers, public_repos, public_gists, following} = user;
    return (
        <React.Fragment>
            <Link to="/" className="btn btn-link">Go to main</Link>
            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-3 text-center">
                            <img src={avatar_url} alt={name} style={{width: '150px'}}/>
                            <h1>{name}</h1>
                            {location && <p>Loaction: ${location}</p>}
                        </div>
                        <div className="col">
                            {
                                bio && <React.Fragment>
                                    <h3>BIO</h3>
                                    <p>{bio}</p>
                                </React.Fragment>
                            }
                            <a href={html_url} target="_blank"
                             className="btn btn-dark"
                             rel="noopener noreferrer"
                             >Open profile</a>
                            <ul>
                                {login && <li>
                                    <strong>Username:</strong> {login}
                                </li>}
                                {company && <li>
                                    <strong>Company:</strong> {company}
                                </li>}
                                {blog && <li>
                                    <strong>Website:</strong> {blog}
                                </li>}
                            </ul>
                            <div className="badge badge-dark">Followers: {followers}</div>
                            <div className="badge badge-dark">Following: {following}</div>
                            <div className="badge badge-dark">Repositories: {public_repos}</div>
                            <div className="badge badge-dark">Gists: {public_gists}</div>
                        </div>
                    </div>
                </div>
            </div>
            <Repos repos={repos}/>
        </React.Fragment>
    );
};

export default withRouter(Profile);