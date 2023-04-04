import Modal from 'react-modal';
import style from './modalNewTransaction.module.scss';
import closeImg from '../../assets/close.svg';
import outcomeImg from '../../assets/Saídas.svg';
import incomeImg from '../../assets/Entradas.svg';
import { useState, FormEvent, useContext } from 'react';
import { useTransactions } from '../../hooks/useTransactions';


interface IModalNewTransactionProps {
    isOpen: boolean;
    onRequestClose: () => void;
}



export function ModalNewTransaction({ isOpen, onRequestClose }: IModalNewTransactionProps) {
    const { createTransaction } = useTransactions();

    // armazenar qual botão foi clicado
    const [type, setType] = useState('deposit');

    //dados de cada input do formulario
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();
        //salvar dados na fake APi
        await createTransaction({
            title,
            amount,
            type,
            category
        })
        //aguarda executar tudo, e se der certo, ele fecha o modal
        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');
        onRequestClose();
    }

    return (
        <Modal
            overlayClassName="classOverlay" //construir a estilização do 0
            className="classContent" //estilização do content
            isOpen={isOpen}
            onRequestClose={onRequestClose}>
            <button
                type='button'
                onClick={onRequestClose}
                className="button_modal_close">
                <img src={closeImg} alt="Fechar modal" />
            </button>
            <form onSubmit={handleCreateNewTransaction} action="" className={style.form_modal}>
                <h2>Cadastrar Transação</h2>
                <input
                    placeholder='Título'
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                // toda vez que troca o valor, o valor digitado é salvo na propriedade de title; onChange: toda vez que o valor for alterado 
                >
                </input>
                <input
                    placeholder='Valor'
                    type="number"
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
                >
                </input>

                <div className={style.botoes_inOut}>
                    <button type="button" onClick={() => { setType('deposit'); }} className={`${type === 'deposit' ? style.deposit : ''}`}>
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </button>
                    <button type="button" onClick={() => { setType('withdraw'); }} className={`${type === 'withdraw' ? style.withdraw : ''}`}>
                        <img src={outcomeImg} alt="Entrada" />
                        <span>Saída</span>
                    </button>
                </div>




                <input
                    placeholder='Categoria'
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                >
                </input>
                <button type="submit">Cadastrar</button>
            </form>

        </Modal>
    )
}


