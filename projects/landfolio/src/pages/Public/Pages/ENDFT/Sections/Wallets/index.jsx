export function Wallets() {
	return (
		<section className="mt-20 w-full xl:mt-32">
			<div
				data-aos="fade-down"
				className="flex w-full flex-wrap items-center justify-evenly gap-10"
			>
				<img
					src={new URL(`./Assets/metamask.png`, import.meta.url).href}
					alt="metamask"
					loading="lazy"
				/>
				<img
					src={new URL(`./Assets/trust-wallet.png`, import.meta.url).href}
					alt="Trust Wallet"
					loading="lazy"
				/>
				<img
					src={new URL(`./Assets/walletconnect.png`, import.meta.url).href}
					alt="WalletConnect"
					loading="lazy"
				/>
				<img
					src={new URL(`./Assets/exodus.png`, import.meta.url).href}
					alt="Exodus"
					loading="lazy"
				/>
				<img
					src={new URL(`./Assets/safepal.png`, import.meta.url).href}
					alt="SafePal"
					loading="lazy"
				/>
			</div>
		</section>
	);
}
