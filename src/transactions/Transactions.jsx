// import PropTypes from 'prop-types';
// import {TransactionsItems} from 'transactions/TransactionsItems';
import {TransactionHistoryTable, BordTransaction, } from 'transactions/Transactions.styled';
// import {TransactionsHad} from 'transactions/TransactionsHad';
import {TransactionThead, TransactionHistoryBord, BoxTransaction} from 'transactions/Transactions.styled';
import {TransactionList, TransactionListName} from 'transactions/Transactions.styled';

export const TransactionHistory = ({item}) => {
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
            {item.map(({id, type, amount, currency}) => {
                return (
                    <TransactionList key={id}>
                        <TransactionListName>{type}</TransactionListName>
                        <TransactionListName>{amount}</TransactionListName>
                        <TransactionListName>{currency}</TransactionListName>
                    </TransactionList>
                )
            })}  
        </BordTransaction>
        </TransactionHistoryTable>
        );
        };