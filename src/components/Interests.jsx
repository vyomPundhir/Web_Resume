const Interests = () => {
	return (
		<div className="flex flex-col gap-2.5">
			<div className="w-full">
				<h1 className="text-[22px] font-semibold ">INTERESTS & HOBBIES</h1>
				<div className="border-2 border-black -mt-1"></div>
			</div>
			<div className="mr-5 flex flex-wrap gap-3 mt-1">
				<div className="flex flex-row justify-center items-center gap-2 px-3 py-2 border-2 border-gray-400 rounded-lg">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						className="bi bi-pencil-square"
						viewBox="0 0 16 16"
					>
						<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
						<path
							fillRule="evenodd"
							d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
						/>
					</svg>
					<span className=" font-semibold text-[13px]">Sketching</span>
				</div>

				<div className="flex flex-row justify-center items-center gap-2 px-3 py-2 border-2 border-gray-400 rounded-lg">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						className="bi bi-cookie"
						viewBox="0 0 16 16"
					>
						<path d="M6 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm4.5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
						<path d="M8 0a7.963 7.963 0 0 0-4.075 1.114c-.162.067-.31.162-.437.28A8 8 0 1 0 8 0Zm3.25 14.201a1.5 1.5 0 0 0-2.13.71A7.014 7.014 0 0 1 8 15a6.967 6.967 0 0 1-3.845-1.15 1.5 1.5 0 1 0-2.005-2.005A6.967 6.967 0 0 1 1 8c0-1.953.8-3.719 2.09-4.989a1.5 1.5 0 1 0 2.469-1.574A6.985 6.985 0 0 1 8 1c1.42 0 2.742.423 3.845 1.15a1.5 1.5 0 1 0 2.005 2.005A6.967 6.967 0 0 1 15 8c0 .596-.074 1.174-.214 1.727a1.5 1.5 0 1 0-1.025 2.25 7.033 7.033 0 0 1-2.51 2.224Z" />
					</svg>
					<span className=" font-semibold text-[13px]">Painting</span>
				</div>

				<div className="flex flex-row justify-center items-center gap-2 px-3 py-2 border-2 border-gray-400 rounded-lg">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="15"
						height="15"
						fill="currentColor"
						className="bi bi-film"
						viewBox="0 0 16 16"
					>
						<path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" />
					</svg>
					<span className=" font-semibold text-[13px]">Singing</span>
				</div>
			</div>
		</div>
	);
};

export default Interests;
