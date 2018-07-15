import * as React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {connect} from 'react-redux';

const PrivateRoute = ({component: Component, redirectPath, ...rest}) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                rest.isAuth ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={redirectPath}/>
                )
            }
        />
    );
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.loginState.dataUser
    };
};

export default connect(mapStateToProps)(PrivateRoute);
