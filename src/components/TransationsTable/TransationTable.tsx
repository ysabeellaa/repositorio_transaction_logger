import { useContext } from "react";
import { useTransactions } from "../../hooks/useTransactions";
import styles from "./transationTable.module.scss";



export default function TransationTable() {

    const { transactions } = useTransactions();

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map(transaction => {
                    return (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type === 'deposit' ? styles.deposit : styles.withdraw}>
                                {transaction.type === 'deposit' ? '+' : '-'}
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(transaction.amount)}</td>
                            <td>{transaction.category}</td>
                            <td>{new Intl.DateTimeFormat('pt-BR').format(
                                new Date(transaction.createdAt)
                            )}</td>
                        </tr>
                    )
                })}


            </tbody>
        </table>

    )
}