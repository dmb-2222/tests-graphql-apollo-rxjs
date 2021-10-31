// import { render, screen } from '@testing-library/react';
import React from 'react';
import { shallow, configure } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App, { sum } from './App';
configure({ adapter: new Adapter() });


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


// it("App test", () => {
//   const wrapped = shallow(<App />)
//   console.log('wrapped', wrapped)
// })

describe("App", () => {
  it("sum", () => {
    expect(sum(2, 5)).toEqual(7)
  })
  it("test", () => {
    const wrapped = shallow(<App />)
    console.log('wrapped', wrapped)
  })
})

