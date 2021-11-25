import Loader from '../components/Loader/Loader'

const IndexView = ({state}) => {
    return (
        <Loader isLoading={state.isLoading || true}/>
    )
}

export default IndexView