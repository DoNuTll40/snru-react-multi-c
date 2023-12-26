
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});  

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <App />
)

function Counter({ item : { id, number }, upDate , reMove }) {

    const [countNum, setCountNum] = React.useState(0);

    return (
        <div className="counter">
            <button onClick = { () => upDate( id, -1 )}> - </button>
            <h3>{number}</h3>
            <button onClick = { () => upDate( id, 1 ) }> + </button>
            <button onClick = { () => upDate( id, - number ) }> C </button>
            <button onClick = { () => reMove( id ) }> X </button>
        </div>
    )
}

function Suninfo(props) {
    // console.log(props)
    const toTal = props.counter.reduce((sum, counter) => sum + counter.number, 0);
    const styles = {
        color : props.color,
        fontSize : props.size === 'Big' ? '50px' : '40px',
        textShadow : '2px 5px 5px rgba(0, 0, 0, 0.2)',
        WebkitTextStrokeWidth : '0.1px',
        WebkitTextStrokeColor : 'white',
    }

    return (
        <div className="sum-info">
            <h1 style={styles}>Sum = {toTal}</h1>
        </div>
    )
}

function App() {

    const [counter, setCounter] = React.useState([ { id : 1, number : 0 }  ]);

    const upDate = (id, num) => {
        const cloneCounter = [...counter]
        let idx = cloneCounter.findIndex( el => el.id === id )
        console.log(idx, num);
        if (cloneCounter[idx].number + num < 0){
            return
        }
        cloneCounter[idx].number += num;
        setCounter(cloneCounter);
    }

    const reMove = (id) => {
        const upDate = counter.filter( ( el ) => el.id !== id );
        setCounter(upDate);
    }

    const styles2 = {textAlign : 'center', textShadow : '2px 5px 5px rgba(0, 0, 0, 0.2)', marginTop : '20px'}
    const AddCounter = () => {
        let NewId = counter.length === 0 ? 1 : counter.at(-1).id + 1
        let cloneCounter = [...counter];
        cloneCounter.push( { id : NewId, number : 0 } )
        setCounter(cloneCounter);
    }
    
    return (
        <>
            <h1 style={styles2}>CodeCamp Academy01 : { (new Date()).toDateString() }</h1>
            <h1 style={styles2}>CS 125 Nuttawoot Chawna SNRU</h1>
            <button className="btn-add" onClick = { AddCounter }>Add Counter</button>
            <Suninfo counter={counter} color="deeppink" size="Big"/>
            {counter.map( el => {
                return <Counter key = {el.id} item={el} upDate={upDate} reMove={reMove}/>
            } )}
        </>
    )
}
