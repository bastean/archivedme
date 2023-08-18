import { Keyboard, Mousewheel, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Projects } from './Projects';

function Project(project) {
	return (
		<div className="flex items-center justify-center gap-6 md:mb-6 md:p-5">
			<div className="glassEffect group flex h-[612px] w-[324px] items-center justify-center gap-6 overflow-hidden rounded-3xl bg-landfolio-dark bg-opacity-10 p-6 xs:w-[540px] md:w-[788px] xl:w-[1050px] xl:p-16">
				<div
					className="z-40 flex h-full w-full cursor-default flex-col justify-center text-center text-4xl font-normal tracking-wide text-white transition-all duration-500 ease-out group-hover:scale-105 "
					id="endft"
				>
					{project.title}
					<div className="mt-8 flex w-full justify-center">
						<a href={project.url}>
							<button
								className={`hover h-10 w-24 rounded-lg bg-gradient-to-r text-3xl font-bold tracking-wider transition-all duration-300 ease-out hover:shadow-lg hover:shadow-slate-50/25 ${project.buttonColor}`}
							>
								Visit
							</button>
						</a>
					</div>
				</div>
				<div className="absolute z-30 h-full w-full bg-landfolio-dark bg-opacity-40 backdrop-blur-3xl"></div>
				<div className="absolute flex w-full justify-center gap-5 transition-all duration-300 ease-out group-hover:scale-105">
					<div className="flex flex-col gap-6">{project.image}</div>
				</div>
			</div>
		</div>
	);
}

export function Showcase() {
	const { endft, bctech } = Projects();

	return (
		<div className="entryAnimation z-50 flex min-h-screen w-full items-center justify-center overflow-y-auto opacity-0">
			<div className="container h-full">
				<Swiper
					slidesPerView={1}
					spaceBetween={30}
					mousewheel={true}
					loop={true}
					keyboard={{
						enabled: true
					}}
					pagination={{
						clickable: true
					}}
					modules={[Keyboard, Mousewheel, Pagination]}
					className="mySwiper"
				>
					<SwiperSlide>{Project(endft)}</SwiperSlide>
					<SwiperSlide>{Project(bctech)}</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
}
