import React, { Component } from 'react';


function Task ({id, description, completed, updateTask, completeTask, deleteTask }) {
    const update = () => updateTask(id, description);
    const complete = () => completeTask(id);
    const deleteThis = () => deleteTask(id);

        let label;
        if (!completed) {
                       label = <strong>{description}</strong>

        } else {
                      label = <del className="text-muted">{description}</del>

        }

    return (
        <div className="Task py-1">
            <div className="row">
                <div className="col-1">
                      <div className="custom-control custom-checkbox checklist-control">
    <input className="custom-control-input" id={"checklist"+ id} type="checkbox" checked={completed} onChange={complete}/>
    <label className="custom-control-label" htmlFor={"checklist"+ id}></label>
    <span className="custom-control-caption">
      
    </span>
  </div>


                </div>
                <div className="col-10">

                    {label}

                </div>
                <div className="col-1">
                                <button className="btn btn-sm btn-white" onClick={deleteThis}><span className="fe fe-x"></span></button>

                </div>


            </div>
        </div>
    );
}

export default Task;