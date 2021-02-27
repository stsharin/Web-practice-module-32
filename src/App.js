import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks = ['Anwar', 'Jafor', 'Alomgir', 'Salman'];
  // declare object
  const products = [
    {name: 'PhotoShop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$6.99'},
    {name: 'Premiere Elements', price: '$69.99'},
  ]
  // const nayokNames = nayok.map(nayok => nayok);
  // console.log(nayokNames);
  const productNames = products.map(product => products.name);
  console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
        {/* <ul>
          <li>{nayoks[0]}</li>
          <li>{nayoks[1]}</li>
          <li>{nayoks[2]}</li>
          <li>{nayoks[3]}</li>
        </ul> */}
      {/* <Product name={products[0].name} price={products[0].price}></Product> */}
      <Product product={products[0]}></Product>
      <Product product={products[1]}></Product>
      
      {/* <PersonInfo name={nayoks[0]} food="Pizza" nayika="Mousumi"></PersonInfo>
       <PersonInfo name="Jasim" nayika="sabana"></PersonInfo>
       <PersonInfo name="Bapparaz" nayika="Cheka" ></PersonInfo>
       <PersonInfo name="Elias K" nayika="Bobita"></PersonInfo> */}
      </header>
    </div>
  );
}
// style
function Product(props) {
  const productStyle = {
    border:'1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  console.log(props);
  // destructuring in react
  const {name, price} = props.product;
  // return html
  return (
    <div style={productStyle}>
      <h2>{name} </h2>
      <h5>{price}</h5>
      {/* <h2>{props.product.name} </h2>
      <h5>{props.product.price}</h5> */}
      {/* <h2>{props.name} </h2>
      <h5>{props.price}</h5> */}
      <button>Buy now</button>
    </div>
  )
  
}
function PersonInfo(props){
  // console.log(props);
  return (
    <div style={{border:'2px solid red', margin: '10px'}}>
      <h1>Nayok: {props.name}</h1>
      <h3>Hero of {props.nayika}</h3>
  </div>
  ) 
}
function Counter(params) {
  const [count, setCount] = useState(10);
  // const handleIncrease = () => setCount(count +1);
    // const newCount = count + 1;
  return (
    <div>
      <h1>Count: {count}</h1>
      {/* <button onMouseMove= {() => setCount(count - 1)}>Decrease</button> */}
      <button onClick= {() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}
function Users() {
  const [users, setUsers] = useState([0]);
  // data load
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])

  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      {/* {
        console.log(users)
      } */}
      <ul>
        {
          users.map(user =>  <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

export default App;
