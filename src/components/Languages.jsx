const Languages = () => {
	return (
		<div className="flex flex-col gap-2.5">
			<div className="w-full">
				<h1 className="text-[22px] font-semibold ">LANGUAGES</h1>
				<div className="border-2 border-black -mt-1"></div>
			</div>
			<div className="mr-5 flex  gap-3.5 mt-1">
				<div className="flex flex-row gap-5">
					<span className="px-3 py-1.5 border-2 border-gray-400 rounded-xl font-semibold text-[13px]">
						English
					</span>
				</div>
				{/* <div className=" border-2 border-dashed border-gray-300 "></div> */}
				<div className="flex flex-row gap-5">
					<span className="px-3 py-1.5 border-2 border-gray-400 rounded-xl font-semibold text-[15px]">
						Hindi
					</span>
				</div>
			</div>
		</div>
	);
};

export default Languages;
