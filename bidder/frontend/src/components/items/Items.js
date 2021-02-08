import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getItems, deleteItem } from '../../actions/items';



export class Items extends Component {
    static PropTypes = {
        items: PropTypes.array.isRequired,
        getItems: PropTypes.func.isRequired,
        deleteItem: PropTypes.func.isRequired

    }

    componentDidMount() {
        this.props.getItems();
    }

    render() {
        return (
            <Fragment>
                <h2>Items</h2>

                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Yield</th> 
                                <th>Thickness</th>
                                <th>Labor</th>
                                <th>Total</th>
                                <th />
                            </tr>
                        </thead>

                        <tbody>
                            { this.props.items.map(item => (
                                <tr key={item.id}>
                                    
                                    <td>{item.id}</td>
                                    <td>{item.item_name}</td>
                                    <td>{item.item_price}</td>
                                    <td>{item.item_yield}</td>
                                    <td>{item.item_thickness}</td>
                                    <td>{item.labor_rate}</td>
                                    <td>{item.item_total}</td>

                                    <td><button onClick={this.props.deleteItem.bind(this, item.id)} 
                                    className="btn btn-danger btn-sm">Delete</button></td>
                                    
                                </tr>
                            ))}

                        </tbody>
                    </table>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    items: state.items.items
});

export default connect(mapStateToProps, { getItems, deleteItem })(Items);
