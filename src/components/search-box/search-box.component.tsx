// = = = Hooks = = =
import { ChangeEvent } from 'react';

import './search-box.styles.css';

type SearhBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: SearhBoxProps) => (
  <input
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;

// = = = Class = = =
// import { Component } from 'react';

// import './search-box.styles.css'

// class SearchBox extends Component {
//   render() {
//     return (
//       <input
//         className={`search-box ${this.props.className}`}
//         type='search'
//         placeholder={this.props.placeholder}
//         onChange={this.props.onChangeHandler}
//       />
//     );
//   }
// }

// export default SearchBox;
