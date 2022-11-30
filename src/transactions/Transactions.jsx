// import PropTypes from 'prop-types';
import {TransactionsItems} from 'transactions/TransactionsItems';
import {TransactionHistoryTable, BordTransaction, } from 'transactions/Transactions.styled';
import {TransactionsHad} from 'transactions/TransactionsHad';

export const TransactionHistory = ({lists, type, amount, currency}) => {
    return (
    <TransactionHistoryTable lists={{lists}}>
            <TransactionsHad
            type={type}
            amount={amount}
            currency={currency}
            ></TransactionsHad>
        <BordTransaction>
            {lists && lists.map(list => (
            <TransactionsItems
            key={list.id}
            type={list.type}
            amount={list.amount}
            currency={list.currency}
            ></TransactionsItems>
            ))}  
        </BordTransaction>
        </TransactionHistoryTable>
        );
        };