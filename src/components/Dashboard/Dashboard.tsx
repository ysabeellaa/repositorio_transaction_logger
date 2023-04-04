import Summary from "../Summary/Summary";
import TransationTable from "../TransationsTable/TransationTable";
import styles from "./summary.module.scss";

export default function Dashboard(){ 
    return(
        <main>
            <Summary/>
            <TransationTable/>
        </main>

    )
}