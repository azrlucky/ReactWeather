var React = require('react');
var {Link,IndexLink} = require('react-router');

var Nav = (props) => {
  return(
    <div>
      <h2>Nav Component</h2>
      <IndexLink to="/" activeClassNAme="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
      <IndexLink to="/about" activeClassNAme="active" activeStyle={{fontWeight:'bold'}}>About</IndexLink>
      <IndexLink to="/examples" activeClassNAme="active" activeStyle={{fontWeight:'bold'}}>Examples</IndexLink>
    </div>

  );
}

module.exports = Nav;
