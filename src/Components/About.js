export default function About(props) {
  let myStyle = {
    color: props.mode === 'dark'?'white':'#13172f',
    backgroundColor: props.mode === 'dark'?'#13172f':'white'
  }
  return (
    <div className="container" style = {{color: props.mode === 'dark'?'white':'#13172f'}}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              style = {myStyle}
              aria-controls="collapseOne"
            >
              Text Convertor Programming
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style = {myStyle}>
              <strong>The programming behind TextConvertor App:</strong> The
              programming for Text Convertor App is baically done using HTML,
              CSS, BootStrap, and React.
            </div>
          </div>
        </div>
        <div className="accordion-item" style = {myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style = {myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Importance of React
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style = {myStyle}>
              <strong>React is the soul of this project:</strong> This project
              is purely made using React and some reference code is taken from
              BootStrap docs.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style = {myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Abhishek Tiwari - Developer
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style = {myStyle}>
              <strong>The developer of the website is: Abhishek Tiwari.</strong>{' '}
              Abhishek is a Computer Science Engineering student.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
