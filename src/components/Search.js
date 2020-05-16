import React, {useContext, useState} from 'react';
import {AlertContext} from "../context/alert/AlertContext";
import {GithubContext} from "../context/github/githubContext";

const Search = props => {
    const [value, setValue] = useState('')
    const {show, hide} = useContext(AlertContext);
    const github = useContext(GithubContext)

    const onSubmit = e => {
        if (e.key !== 'Enter') {
            return
        }
        github.clearUsers();
        if (value.trim()) {
            github.search(value.trim())
            hide();
        } else {
            show('Enter user data', 'warning')
        }
    }
    return (
        <div className="form-group">
            <input type="text"
                   className="form-control"
                   placeholder="Enter nickname..."
                   onKeyPress={onSubmit}
                   value={value}
                   onChange={event => setValue(event.target.value)}
            />
        </div>
    );
};

export default Search;