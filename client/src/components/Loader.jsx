import './../assets/scss/Base.css';

const Loader = () => {
    return (
        <div className="loader">
            <div className="lds-dual-ring"></div>
            <h2>Loading</h2>
        </div>
    )
}

export default Loader