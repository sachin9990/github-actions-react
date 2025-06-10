import './App.css';

function App( ) {
    return (
        <div>
        <h1>
        Github Actions
        </h1>
        <h1>Sachin</h1>
        <h1>THis will run the workflow</h1> <h2>Complete course with 2 projects by mukesh</h2>
        {/* Unused function */}
        {(()=>{ let x=0; for(let i=0;i<10;i++){x+=i;} return x; })()}
        {/* Insecure use of innerHTML */}
        <div dangerouslySetInnerHTML={{__html: "<img src='x' onerror='alert(\"hacked\")' />"}}></div>
        </div>
    );
}

const unusedVariable = 42;

const BadPractice = () => {
    let a = 1;
    let b = 2;
    a + b;
    // function does nothing useful
};

export default App;
