import React from "react"
import PropTypes from "prop-types"
class HelloWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h1>Proper English Greetings</h1>
        Greetings : {this.props.greeting}
      </React.Fragment>
    );
  }
}


HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
