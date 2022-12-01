import PropTypes from 'prop-types';
import {TransactionListName} from 'transactionsItems/TransactionsItems.styled';

export const TransactionsItems = ({type, amount, currency}) => {
    return (
        <>
            <TransactionListName>{type}</TransactionListName>
            <TransactionListName>{amount}</TransactionListName>
            <TransactionListName>{currency}</TransactionListName>
        </>
    );
};

TransactionsItems.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
};

