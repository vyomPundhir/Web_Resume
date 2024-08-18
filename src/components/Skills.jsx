const Skills = () => {
	return (
		<div className="flex flex-col gap-2.5">
			<div className="w-full">
				<h1 className="text-[20px] font-semibold ">SKILLS</h1>
				<div className="border-2 border-black"></div>
			</div>
			<div className=" flex flex-col gap-2.5 mt-1">
				<div className="">
					<span className="text-[14px] ">Languages & Technologies:</span>
					<span> </span>
					<span className="text-[13.5px] font-medium">
						HTML, CSS, Tailwind CSS, JavaScript, React, Redux Toolkit, Git
					</span>
				</div>
				<div className=" border-2 border-dashed border-gray-300 "></div>
				<div className="">
					<span className="text-[14px] ">Tools:</span>
					<span> </span>
					<span className="text-[13.5px] font-medium">
						VS Code, GitHub, Postman
					</span>
				</div>
				{/* <div className="mt-0 border-2 border-dashed border-gray-300 "></div>
				<div className="">
					<span className="text-[14px] ">Soft Skills:</span>
					<span> </span>
					<span className="text-[13.5px] font-medium">
						Problem-solving, Teamwork, Communication, Adaptability
					</span>
				</div> */}
			</div>
		</div>
	);
};

export default Skills;
