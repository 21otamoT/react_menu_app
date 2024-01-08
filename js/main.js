const Menu = props => {
    const increment = () => props.onIncrement(props.menuId);
    const decrement = () => props.onDecrement(props.menuId);
    
    return (
      <li className="menu-item">
        <span>
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
        </span>
        {props.menuName}{props.price}円 x {props.count}個
      </li>
    );
};

const App = () => {
  const menuItems = [
    {id:0, name:'さけ定食', price:500},
    {id:1, name:'だし巻き卵定食', price:600},
    {id:2, name:'唐揚げ定食', price:600},
    {id:3, name:'刺身定食', price:700},
    {id:4, name:'焼肉定食', price:700}
  ];
  
  const [counts, setCounts] = React.useState([0,0,0,0,0]);

  const incrementMenu = menuId => {
    const newCounts = [...counts];
    newCounts[menuId]++;
    setCounts(newCounts);
  };

  const decrementMenu = menuId => {
    if (counts[menuId]>0) {
      const newCounts = [...counts];
      newCounts[menuId]--;
      setCounts(newCounts);
    }
  };

  const totalPrice = 
    (menuItems[0].price * counts[0]) +
    (menuItems[1].price * counts[1]) +
    (menuItems[2].price * counts[2]) +
    (menuItems[3].price * counts[3]) +
    (menuItems[4].price * counts[4]) ;

  const menu = menuItems.map(menu => {
    return(
      <Menu
        key={menu.id}
        menuId={menu.id}
        menuName={menu.name}
        count={counts[menu.id]}
        price={menu.price}
        onIncrement={incrementMenu}
        onDecrement={decrementMenu}
       />
    );
  });

  return(
    <>
      <img src="images/logo.svg" className="App-logo"/>
      <h1>メニュー</h1>
      <ul className="menu">{menu}</ul>
      <p><span>合計:{totalPrice}円</span></p>
    </>
  );
};

ReactDOM.createRoot(root).render(
  <App />
);