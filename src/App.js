import './App.css';
import logo from './logo.svg';
import header from './resources/img/1.jpg';

function App() {
	return (
		<div className="bg-gray-200 grid lg:grid-cols-2 2xl:grid-cols-5">
			<div className="px-8 py-6 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
				<div className='xl:max-w-xl'>
					<img src={logo} alt="website logo" className="h-14" />
					<img
						src={header}
						alt="heaer page"
						className="mt-6 rounded-lg shadow-sm sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden"
					/>

					<h1 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
						You can work anywhere.
						<br className="hidden lg:inline" />
						<span className="text-indigo-500">
							Take advantage of it
						</span>
					</h1>
					<p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
						Tuvuyc ucyufytdu uycitdifohpo bp p778gyfuyu
						uyfytyduyuvuv ytdyrstsuovo ouyfiudiy o yuyufyufyu
						yucytdtyu ytdesyrek jytxkb ydtestcolpoihoi
						ouyfiytxiytclib
					</p>
					<div className="mt-4">
						<a
							href="#"
							className="bg-indigo-400 px-5 py-3 rounded-lg shadow-lg mt-4 inline-block text-white uppercase tracking-wider font-semibold text-sm sm:mt-6 sm:text-base"
						>
							Book your imagination
						</a>
					</div>
				</div>
			</div>
			<div className="hidden lg:block relative 2xl:col-span-3">
				<img
					src={header}
					alt="heaer page"
					className="absolute inset-0 h-full w-full object-cover object-center"
				/>
			</div>
		</div>
	);
}

export default App;
