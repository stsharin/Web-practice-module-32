import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Anwar', 'Jafor', 'Alomgir', 'Salman'];
  // declare object
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$6.99'},
  ]
  // const nayokNames = nayok.map(nayok => nayok);
  // console.log(nayokNames);
  const productNames = products.map(product => products.name);
  console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">
      {/* <Product name={products[0].name} price={products[0].price}></Product> */}
      <Product product={products[0]}></Product>
      <Product product={products[1]}></Product>
      
      <PersonInfo name={nayoks[0]} food="Pizza" nayika="Mousumi"></PersonInfo>
       <PersonInfo name="Jasim" nayika="sabana"></PersonInfo>
       <PersonInfo name="Bapparaz" nayika="Cheka" ></PersonInfo>
       <PersonInfo name="Elias K" nayika="Bobita"></PersonInfo>
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

export default App;
