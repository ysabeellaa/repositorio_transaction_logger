import styles from "./header.module.scss";
import logoImg from "../../assets/logo.svg";
import { useState } from "react";
import Modal from "react-modal";

interface IHeaderProps{
    onOpenNewTransationModal: () => void;
    // componente que receb a função: ON
}

export default function Header({onOpenNewTransationModal}:IHeaderProps){

    return(
        <header className={styles.header_blue}>
            <div className={styles.div}>
                <img src={logoImg} alt="logo dt money" />
                <button type="button" onClick={onOpenNewTransationModal}>
                    Nova Transação
                </button>
                
            </div>
        </header>
    )
}
