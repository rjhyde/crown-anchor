export const About = () => {
  return (
    <section id="about" className="py-12 bg-amber-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-amber-800 dark:text-amber-500">About The Crown & Anchor</h2>
          <div className="w-24 h-1 bg-amber-800 dark:bg-amber-500 mx-auto mt-4 mb-6"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Established in 1972, The Crown & Anchor is Monterey's premier British-style pub. Located in the heart of downtown 
            Monterey, we offer a warm, inviting atmosphere reminiscent of traditional English pubs, combined with a touch of 
            California coastal charm.
          </p>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Our passion for great beer is reflected in our carefully curated selection of local craft brews, imported favorites, 
            and our own house specialties. From hoppy IPAs to rich stouts and refreshing lagers, we pride ourselves on offering 
            something for every beer enthusiast.
          </p>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            But The Crown & Anchor is more than just a place to enjoy exceptional beer. Our kitchen serves up classic pub fare 
            with a gourmet twist, using locally-sourced ingredients whenever possible. Join us for live music on weekends, 
            our famous pub quiz on Thursdays, and the friendly atmosphere that has made us a local favorite for over 50 years.
          </p>
          
          <div className="mt-10 flex justify-center">
            <a href="#location" className="px-6 py-3 bg-amber-800 text-white font-semibold rounded-lg shadow-md hover:bg-amber-700 transition duration-300 ease-in-out">
              Find Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}; 