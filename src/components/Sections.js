import React from 'react';
import { Link } from 'react-router-dom';

const Sections = () => {
  return (
    <div>
      <h2>Section 1</h2>
      <Link to="/section2" id="form-link">Go to Section 2</Link>

      <h2>Section 2</h2>
      <Link to="/section3" id="form-ref-link">Go to Section 3</Link>

      <h2>Section 3</h2>
      <Link to="/section1" id="form-state-link">Go back to Section 1</Link>
    </div>
  );
};

export default Sections;
