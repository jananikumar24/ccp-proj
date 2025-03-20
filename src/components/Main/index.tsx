export default function Home() {
  return (
    <main className="flex flex-col h-screen justify-center items-center bg-gradient-to-b from-[#fafafa] via-[#fafafa] to-[#affca2]">
	 	<h1 className="text-4xl font-bold text-center mb-6"> Welcome to Energy Consumption Monitoring System</h1>
		<a href="/info" className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
			Get Started
		</a>
    </main>
  );
}
