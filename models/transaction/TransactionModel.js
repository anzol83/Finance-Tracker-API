import transactionModel from "./TransactionSchema.js";

export const createTransaction = (tObj) => {
  return transactionModel(tObj).save();
};

export const getTransaction = (filter) => {
  return transactionModel.find({ userId: filter });
};

export const deleteTransaction = (tid, userid) => {
  return transactionModel.findOneAndDelete({
    _id: tid,
    userId: userid,
  });
};

export const deleteManyTransactions = (transactionsids, userid) => {
  return transactionModel.deleteMany({
    _id: { $in: transactionsids },
    userId: userid,
  });
};
