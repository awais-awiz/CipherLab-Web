function NotFound() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-200">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">404</h1>
          <p className="text-gray-600 mb-4">Page not found</p>
          <a href="/" className="text-blue-600 underline">
            Go back home
          </a>
        </div>
      </div>
    );
  }
  
  export default NotFound;
  