import FilterOption from './FilterOption';

import useMenuProvider from '../../hooks/useMenuProvider';

const Filter = () => {
	const { showMenu } = useMenuProvider();

	return (
		<div
			className={`z-20 flex min-h-full w-full flex-col justify-between rounded-t-xl bg-tracrypt-dk text-center text-sm font-extralight tracking-widest text-tracrypt-wt shadow-xl shadow-black transition-all hover:shadow-2xl hover:shadow-black xl:relative xl:flex xl:max-w-[250px] xl:overflow-x-hidden 2xl:max-w-[300px] 2xl:text-lg ${
				showMenu ? 'absolute' : 'hidden'
			}`}
		>
			<div className="flex flex-col items-center gap-5">
				<div className="z-10 w-full">
					<div className="cursor-default border-b-2 border-b-tracrypt-bl bg-tracrypt-dk-f py-3 text-center shadow-lg shadow-black transition-all">
						<h1>Filters</h1>
					</div>
				</div>

				<div className="mx-auto flex w-full max-w-2xl flex-col gap-8 sm:mt-5 sm:max-w-lg 2xl:mt-0 2xl:gap-5 2xl:px-0">
					<FilterOption
						icon="fiat"
						name="Currency"
					/>

					<FilterOption
						icon="gainers"
						name="MVP"
					/>

					<FilterOption
						icon="marketCap"
						name="Mkt Cap"
					/>

					<FilterOption
						icon="volumen"
						name="Volumen"
					/>
				</div>
			</div>

			<div>
				{/* Coingecko Atribbute */}
				<div className="z-0 mx-auto mt-10 mb-2 w-full max-w-2xl hover:cursor-default sm:mt-0 sm:max-w-lg 2xl:mb-4">
					<div className="flex items-center justify-center p-3">
						<a
							className="container rounded-lg py-2 shadow-md shadow-green-500 transition-all hover:shadow-lg hover:shadow-green-500"
							href="https://www.coingecko.com/en/api"
							target="_blank"
							rel="noopener noreferrer"
						>
							<h1 className="text-sm font-extralight">Powered by</h1>
							<h1 className="text-xl text-green-500">CoinGecko API</h1>
						</a>
					</div>
				</div>

				{/* Disclaimer */}
				<div className="z-0 w-full bg-tracrypt-dk-f text-red-500 shadow-lg shadow-black transition-all hover:cursor-default hover:bg-red-900 hover:text-tracrypt-wt">
					<div className="flex justify-center border-b-2 border-b-red-500 py-3 text-center shadow-md shadow-black">
						<div className="flex items-center gap-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="22"
								height="20"
								fill="none"
								viewBox="0 0 22 20"
							>
								<path
									fill="red"
									d="M21.4 18.063L11.65 1.188A.741.741 0 0011 .813a.739.739 0 00-.65.375L.6 18.063a.75.75 0 00.65 1.125h19.5a.75.75 0 00.65-1.125zM10.25 7.75c0-.103.084-.188.188-.188h1.124c.104 0 .188.085.188.188v4.313a.188.188 0 01-.188.187h-1.124a.188.188 0 01-.188-.188V7.75zM11 16a1.125 1.125 0 010-2.25A1.125 1.125 0 0111 16z"
								></path>
							</svg>
							<h1 className="">Disclaimer</h1>
						</div>
					</div>
					<div className="w-full">
						<div className="bg-tracrypt-gr py-2">
							<p className="overflow-hidden px-1 text-[12px] leading-normal text-tracrypt-wt">
								Any use or reliance on our content is solely at your own risk and discretion.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Filter;
