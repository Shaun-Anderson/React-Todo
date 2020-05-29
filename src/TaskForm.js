import React, { useState } from 'react';

function TaskForm ({description, add }) {
    const [value, setValue] = useState("");

    const clear = () => {
        setValue('')
    }

    return (
        <div className="TaskForm card-header">
            <form onSubmit={(event) => {
                event.preventDefault();
                add(value);
                setValue("");
            }}
            >
                <div className={"input-group input-group-flush"}>
                    <div className={"input-group-prepend"}>
                        <span className="input-group-text">
                            <i className="fe fe-search"></i>
                        </span>
                    </div>
                    <input className={"form-control"} placeholder={"Task Description"} type={"text"} onChange={e => setValue(e.target.value) } value={value}/>
                    <div className={"input-group-prepend"}>
                        <button className={"btn btn-white input-group-text fe fe-x"} type={"button"} onClick={clear}></button>
                    </div>
                </div>

    </form>

        </div>
    );
}

export default TaskForm;