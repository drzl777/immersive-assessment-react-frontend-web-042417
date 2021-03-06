import React from 'react'
import Transaction from './Transaction'

const TransactionsList = ({transactions, searchTerm}) => {
  return (
    <table className='ui celled striped padded table'>
      <tbody>
        <tr>
          <th>
            <h3 className='ui center aligned header'>
              Posted At
            </h3>
          </th>
          <th>
            <h3 className='ui center aligned header'>
              Description
            </h3>
          </th>
          <th>
            <h3 className='ui center aligned header'>
              Category
            </h3>
          </th>
          <th>
            <h3 className='ui center aligned header'>
              Amount
            </h3>
          </th>
        </tr>

        {transactions.filter(transaction => transaction.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          transaction.description.toLowerCase().includes(searchTerm.toLowerCase()))
          .map(transaction => <Transaction key={`transaction-${transaction.id}`} {...transaction} />)}

      </tbody>
    </table>
  )
}

export default TransactionsList
