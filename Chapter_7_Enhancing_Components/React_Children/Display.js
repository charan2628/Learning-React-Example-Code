const {Children} = React
const {render} = ReactDOM

const Display = ({ ifTruthy=true, children}) => {
    Children.only(children);
    ifTruthy=false
    return(
        <div className="charan">
        {children}
        </div>
    )
}

const age = 12

render(<Display ifTruthy={age >= 21}> 
        <h2>You can enter Nani!!!</h2>
    </Display>, document.getElementById('react-container')
)