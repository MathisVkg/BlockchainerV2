import './../assets/scss/Base.scss';

const Loader = () => {
    return (
        <div className="loader">
            <div className="lds-dual-ring"></div>
            <h2>Loading</h2>
        </div>
    )
}

export default Loader