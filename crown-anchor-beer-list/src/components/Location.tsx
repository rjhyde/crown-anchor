export const Location = () => {
  return (
    <section id="location" className="py-12 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-amber-800 dark:text-amber-500">Find Us</h2>
          <div className="w-24 h-1 bg-amber-800 dark:bg-amber-500 mx-auto mt-4 mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-amber-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-amber-800 dark:text-amber-400 mb-4">Visit Us</h3>
            
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div className="flex items-start">
                <svg className="h-6 w-6 text-amber-700 dark:text-amber-500 mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-medium">Address:</p>
                  <p>150 W Franklin St</p>
                  <p>Monterey, CA 93940</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="h-6 w-6 text-amber-700 dark:text-amber-500 mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="font-medium">Phone:</p>
                  <p>(831) 555-1234</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="h-6 w-6 text-amber-700 dark:text-amber-500 mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-medium">Email:</p>
                  <p>info@crownanchorpub.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="h-6 w-6 text-amber-700 dark:text-amber-500 mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-medium">Hours:</p>
                  <p>Monday - Thursday: 11am - 12am</p>
                  <p>Friday - Saturday: 11am - 2am</p>
                  <p>Sunday: 10am - 12am</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-80 md:h-auto bg-gray-200 dark:bg-gray-600 rounded-lg shadow-md overflow-hidden">
            {/* This would ideally be replaced with an actual map component */}
            <div className="w-full h-full flex items-center justify-center bg-gray-300 dark:bg-gray-600">
              <p className="text-gray-600 dark:text-gray-300 text-center px-4">
                Interactive map would be displayed here.<br />
                For a real implementation, you would use Google Maps or another mapping API.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 