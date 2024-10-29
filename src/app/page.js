import Image from "next/image";
import styles from "./page.module.css";
import Chips from "@/components/pages/Chips/Chips";

export default function Home() {
	return (
		<div className={styles.container}>
			<div className={styles.pageContainer}>
				<Chips />
			</div>
		</div>
	);
}
