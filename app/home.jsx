import {connect} from 'react-redux'

class Home extends React.Component {

    render() {
        return (
            <div>
                Home page
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

const ConnectedHome = connect(mapStateToProps)(Home)

export default ConnectedHome
