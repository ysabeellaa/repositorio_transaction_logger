
import Dashboard from './components/Dashboard/Dashboard'
import Header from './components/Header/Header'
import './styles/global.scss'
import Modal from 'react-modal'
import { useState } from 'react';
import { ModalNewTransaction } from './components/ModalNewTransaction/ModalNewTransaction';
import { TransactionsProvider } from './hooks/useTransactions';

Modal.setAppElement('#root') // questão de acessibilidade

function App() {

  const[isNewTransactionModalOpen, setIsNewTransationModalOpen] = useState(false);

  function handleOpenNewTransationModal(){
      setIsNewTransationModalOpen(true);
  }
  
  function handleCloseNewTransationModal(){
      setIsNewTransationModalOpen(false);

  }
  

  return (
    <TransactionsProvider>
      <Header onOpenNewTransationModal={handleOpenNewTransationModal}/>
      <Dashboard/>
      <ModalNewTransaction
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransationModal}
      />
    </TransactionsProvider> 
    )
}

export default App
