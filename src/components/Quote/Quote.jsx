import { useFetchQuote } from "../../hooks/useFetchQuote";
import QuoteCss from "./Quote.module.css";
const Quote = () => {
	const { data, isLoading } = useFetchQuote();

	return (
		<div className={isLoading ? QuoteCss.loading : QuoteCss.quote}>
			{isLoading ? (
				"Loading..."
			) : (
				<>
					<h3 className={QuoteCss.quoteHeading}>
						{!data ? "Quote #1" : `Quote #${data.slip.id}`}
					</h3>
					<blockquote className={QuoteCss.quoteParagraph}>
						{!data
							? "“It is better to fail in originality than to succeed in limitation”"
							: `“${data.slip.advice}”`}
					</blockquote>
				</>
			)}
			<img
				src="QC.svg"
				className={QuoteCss.quoteDeco}
			/>
			<img
				src="QCB.svg"
				className={QuoteCss.quoteDecoBg}
			/>
		</div>
	);
};

export default Quote;
