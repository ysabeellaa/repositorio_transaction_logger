import styles from "./header.module.scss";
import logoImg from "../../assets/Logo.svg";
import { useState } from "react";
import Modal from "react-modal";

interface IHeaderProps {
    onOpenNewTransationModal: () => void;
    // componente que receb a função: ON
}

export default function Header({ onOpenNewTransationModal }: IHeaderProps) {

    return (
        <header className={styles.header_blue}>
            <div className={styles.div}>
                <div className={styles.teste}>
                    <img src={logoImg} alt="logo TransactionLogger" />
                    <h1>Transaction Logger</h1>
                </div>
                <button type="button" onClick={onOpenNewTransationModal}>
                    Nova Transação
                </button>

            </div>
        </header>
    )
}
