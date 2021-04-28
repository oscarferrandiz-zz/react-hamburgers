# react-hamburgers
React component for Jonathan Suh's hamburguers (https://jonsuh.com/hamburgers/)

* Install this package with:
```
npm i -S react-hamburgers
```

* Install hamburgers following the official doc (https://github.com/jonsuh/hamburgers)
```
npm i -S hamburgers
```

* Use `react-hamburgers` component as follows:

```
import React from 'react';
import Hamburger from 'react-hamburgers';
import 'hamburgers/dist/hamburgers.css';

export default class MyComponent extends React.Component {

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
