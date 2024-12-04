function StaleStateSolution() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('John');

  const updateName = useCallback(() => {
    setName(prevName => prevName + ' Doe');
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Name: {name}</p>
      <button onClick={updateName}>Update Name and Count</button>
    </div>
  );
}

export default StaleStateSolution; 