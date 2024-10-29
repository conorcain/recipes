import styles from "./chips.module.css";

export default function Chips() {
	return (
		<div className={styles.pageBackground}>
			<div className={styles.container}>
				<h1 className={styles.title}>Guide to Making Crispy Chips</h1>
				<p className={styles.note}>
					<span className={styles.boldText}>Note:</span> This guide assumes you
					know how to cut chips. If you’re unsure, consult an online tutorial.
				</p>

				<ol className={styles.orderedList}>
					<li className={styles.listItem}>
						<span className={styles.boldText}>Soak the Chips</span>
						<p className={styles.paragraph}>
							Once your chips are cut, place them in a saucepan and cover with
							cold to lukewarm water. Let them soak for around 20 minutes. This
							step helps to remove excess starch, making the chips crispier when
							fried.
						</p>
					</li>

					<li className={styles.listItem}>
						<span className={styles.boldText}>Dry the Chips</span>
						<p className={styles.paragraph}>
							After soaking, lay down a couple of sheets of kitchen roll and
							place each chip on the paper, spaced slightly apart.
						</p>
						<ul className={styles.unorderedList}>
							<li className={styles.subListItem}>
								Cover with another couple of sheets of kitchen roll.
							</li>
							<li className={styles.subListItem}>
								Press gently to ensure full contact with each chip, drying
								thoroughly for a crispy exterior when frying.
							</li>
						</ul>
					</li>

					<li className={styles.listItem}>
						<span className={styles.boldText}>Heat the Oil</span>
						<p className={styles.paragraph}>
							Set your stove to a high heat (level 6 on the far left hob) and
							let the oil come up to temperature. Remove the fryer basket and
							secure it to rest on the saucepan edge without touching the oil.
						</p>
					</li>

					<li className={styles.listItem}>
						<span className={styles.boldText}>Check Oil Temperature</span>
						<p className={styles.paragraph}>
							To test if the oil is hot enough:
						</p>
						<ul className={styles.unorderedList}>
							<li className={styles.subListItem}>
								Take a dry chip and place it in the basket.
							</li>
							<li className={styles.subListItem}>
								Dunk it periodically into the oil until bubbles form around it.
								This indicates it’s close to frying temperature.
							</li>
							<li className={styles.subListItem}>
								Once bubbles are active, take the basket out, load the rest of
								the chips into the basket, and carefully lower it into the oil.
								Go slowly to avoid overflow.
							</li>
							<li className={styles.subListItem}>
								If the oil is too hot, lift the basket so the chips rest above
								the oil, remove the pan from the heat briefly, then carefully
								lower the basket back in.
							</li>
						</ul>
					</li>

					<li className={styles.listItem}>
						<span className={styles.boldText}>Adjust Temperature</span>
						<p className={styles.paragraph}>
							Keep the hob on 6 for the first few minutes, then reduce it to 5
							for the remainder of the cooking time.
						</p>
						<ul className={styles.unorderedList}>
							<li className={styles.subListItem}>
								If the bubbling seems to slow too much, lift the basket out,
								rest it on the saucepan, turn the hob back to 6 for a minute to
								raise the temperature, then lower the chips back in.
							</li>
						</ul>
					</li>

					<li className={styles.listItem}>
						<span className={styles.boldText}>Cook and Drain</span>
						<p className={styles.paragraph}>
							Allow the chips to cook for about 15–20 minutes, until golden and
							crispy. Once done, lift the basket out and let the chips drain for
							a minute. This step is essential—forgetting to drain can result in
							oil-soaked chips, which you’ll want to avoid.
						</p>
					</li>
				</ol>
			</div>
		</div>
	);
}
