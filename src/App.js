import './App.css';
import logo from './logo.svg';
import header from './resources/img/1.jpg';

function App() {
	return (
		<div className="px-8 py-6 max-w-md mx-auto">
			<img src={logo} alt="website logo" className="h-14" />
			<img
				src={header}
				alt="heaer page"
				className="mt-6 rounded-lg shadow-sm"
			/>

			<h1 className="mt-6 text-2xl font-bold text-gray-900">
				You can work anywhere.{' '}
				<span className="text-indigo-500">Take advantage of it</span>
			</h1>
			<p className="mt-2 text-gray-600">
				Tuvuyc ucyufytdu uycitdifohpo bp p778gyfuyu uyfytyduyuvuv
				ytdyrstsuovo ouyfiudiy o yuyufyufyu yucytdtyu ytdesyrek jytxkb
				ydtestcolpoihoi ouyfiytxiytclib
			</p>
			<div className="mt-4">
				<a
					href="#"
					className="bg-indigo-400 px-5 py-3 rounded-lg shadow-lg mt-4 inline-block text-white uppercase tracking-wider font-semibold text-sm"
				>
					Book your imagination
				</a>
			</div>
		</div>
	);
}

export default App;
