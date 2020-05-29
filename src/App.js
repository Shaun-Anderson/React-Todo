import React from 'react';
import logo from './logo.svg';
import TodoCard from './TodoCard'


const tasks = [];

function App() {
  return (
    <div className="App container-fluid">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 col-xl-6">

          <div className="header">
            <div className="container-fluid">
              <div className="header-body">
                <div className="row align-items-end">
                  <div className="col">

                    <h1 className="header-title text-center">
                      React Todo List
                    </h1>

                  </div>
                  <div className="col-auto"></div>
                </div> 
              </div>

            </div>
          </div>
      <TodoCard initalTasks={tasks}/>
        </div>
      </div>
    </div>
  );
}

export default App;
