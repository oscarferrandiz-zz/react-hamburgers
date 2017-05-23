# react-hamburgers
React component for Jonathan Suh's hamburguers (https://jonsuh.com/hamburgers/)

Install this package with:
```
npm i -S react-hamburgers
```

Configure hamburgers following the oficial doc (https://github.com/jonsuh/hamburgers)

Use `react-hamburgers` component as follows:

```
import React from 'react';
import Hamburger from 'react-hamburgers';

export default class MyComponent extends React.Component() {

  constructor(props) {
    super(props);
    this.state = { active: false };
  }

  render() {
    return (
      <div>
        <Hamburger
          active={this.state.active}
          type="slider"
          onClick={() => this.setState({ active: !this.state.active })}
        >
      </div>
    );
  }
}
```
