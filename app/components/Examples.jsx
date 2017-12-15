var React = require('react');
var {Link} =require('react-router');

var Examples = (props) => {
  return(
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are few examples to try out!!</p>
      <ul>
        <li>
          <Link to="/?location=Patna">Patna, IN</Link>
        </li>
        <li>
          <Link to="/?location=Delhi">Delhi, IN</Link>
        </li>
      </ul>
    </div>
  );
};


module.exports = Examples;
