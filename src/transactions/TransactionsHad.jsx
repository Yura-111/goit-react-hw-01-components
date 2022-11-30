// import PropTypes from 'prop-types';
import {TransactionThead, TransactionHistoryBord, BoxTransaction} from 'transactions/Transactions.styled';

  export const TransactionsHad = () => {
    return (
      <TransactionThead>
        <TransactionHistoryBord>
          <BoxTransaction>Type</BoxTransaction>
          <BoxTransaction>Amount</BoxTransaction>
          <BoxTransaction>Currency</BoxTransaction>
        </TransactionHistoryBord>
        </TransactionThead>
    )
  };

  // TransactionsHad.propTypes = {
  //   type: PropTypes.string.isRequired,
  //   amount: PropTypes.string.isRequired,
  //   currency: PropTypes.string.isRequired,
  // };
