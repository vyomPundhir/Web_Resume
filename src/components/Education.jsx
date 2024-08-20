const Education = () => {
	return (
		<div className="flex flex-col gap-2.5">
			<div className="w-full">
				<h1 className="text-[20px] font-semibold ">EDUCATION</h1>
				<div className="border-2 border-black"></div>
			</div>
			<div className="flex flex-col gap-3">
				<div>
					<h1 className="text-[16px]">Bachelor of Technology</h1>
					<h1 className="text-[14px] font-bold">
						Jaipur Engineering College and Research Centre
					</h1>
					<div className="flex mt-1 gap-12 justify-start items-center">
						<div className="flex gap-2 justify-start items-center ">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-calendar2-check"
								viewBox="0 0 16 16"
							>
								<path d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
								<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
								<path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z" />
							</svg>
							<span className="text-[13.5px]">Aug 2019 - July 2023</span>
						</div>
						<div className="flex gap-1 justify-start items-center ">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="17"
								height="17"
								fill="currentColor"
								className="bi bi-geo-alt-fill mt-0.5"
								viewBox="0 0 16 16"
							>
								<path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
							</svg>
							<span className="text-[13.5px]">Jaipur</span>
						</div>
					</div>
				</div>
				<div className="mt-2 border-2 border-dashed border-gray-300 "></div>
				<div>
					<h1 className="text-[16px] ">Senior Secondary</h1>
					<h1 className="text-[14px] font-bold">St. Francis Inter College</h1>
					<div className="flex mt-1 gap-12 justify-start items-center">
						<div className="flex gap-2 justify-start items-center ">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-calendar2-check"
								viewBox="0 0 16 16"
							>
								<path d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
								<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
								<path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z" />
							</svg>
							<span className="text-[13.5px]">Apr 2018 - Mar 2019</span>
						</div>
						<div className="flex gap-1 justify-start items-center ">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="17"
								height="17"
								fill="currentColor"
								className="bi bi-geo-alt-fill mt-0.5"
								viewBox="0 0 16 16"
							>
								<path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
							</svg>
							<span className="text-[13.5px]">Hathras</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Education;
