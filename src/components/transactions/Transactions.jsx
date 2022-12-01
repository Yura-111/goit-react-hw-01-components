import PropTypes from 'prop-types';
import {TransactionsItems} from 'components/transactionsItems/TransactionsItems';
import {TransactionHistoryTable, BordTransaction, } from 'components/transactions/Transactions.styled';
import {TransactionThead, TransactionHistoryBord, BoxTransaction} from 'components/transactions/Transactions.styled';
import {TransactionList} from 'components/transactions/Transactions.styled';

export const TransactionHistory = ({items}) => {
    return (
    <TransactionHistoryTable >
        <TransactionThead>
            <TransactionHistoryBord>
                <BoxTransaction>Type</BoxTransaction>
                <BoxTransaction>Amount</BoxTransaction>
                <BoxTransaction>Currency</BoxTransaction>
            </TransactionHistoryBord>
        </TransactionThead>

        <BordTransaction>
            {items.map(({id, type, amount, currency}) => {
                return (
                    <TransactionList key={id}>
                        <TransactionsItems                        
                        type={type}
                        amount={amount}
                        currency={currency} />
                    </TransactionList>
                );
            })}  
        </BordTransaction>
    </TransactionHistoryTable>
    );
};

TransactionHistory.propTypes = {
    item: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            type: PropTypes.number.isRequired,
            amount: PropTypes.number.isRequired,
            currency: PropTypes.number.isRequired
        }).isRequired
    )
};