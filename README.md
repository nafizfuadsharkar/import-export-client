<div>

<h1>User Manual: IMEX – Import & Export Management Application</h1>

<hr>

<h2>1. Introduction</h2>
<p>IMEX is a web-based platform designed to manage import and export products efficiently. It allows users to:</p>
<ul>
  <li>Browse and view detailed product information</li>
  <li>Import products with quantity control</li>
  <li>Add new export products</li>
  <li>Track their imports and exports</li>
  <li>Manage personal accounts through secure login and registration</li>
</ul>
<p>This manual provides step-by-step guidance for users to navigate the system and utilize all its features effectively.</p>

<hr>

<h2>2. Layout & Navigation</h2>

<h3>Header</h3>
<p>The header is visible on all pages and provides quick navigation options:</p>
<ul>
  <li><strong>Logo + Navigation (left side):</strong>
    <ul>
      <li>All Products: View all available products</li>
      <li>My Exports: Access products you added for export</li>
      <li>My Imports: Track your imported products</li>
      <li>Add Export: Add a new product for export</li>
    </ul>
  </li>
  <li><strong>User Actions (right side):</strong>
    <ul>
      <li>Login/Register button: Visible for unauthenticated users</li>
      <li>Logout button + Profile Image: Visible after login; allows quick logout and shows your profile picture</li>
    </ul>
  </li>
</ul>

<h3>Footer</h3>
<p>The footer contains essential information and links:</p>
<ul>
  <li>Copyright – Displays ownership and year</li>
  <li>Social Links – Connects to social media accounts</li>
  <li>Contact Info – Email, phone number, or address</li>
  <li>Other Info – Additional details relevant to the platform</li>
</ul>

<hr>

<h2>3. Home Page</h2>

<h3>Banner/Slider</h3>
<p>Displays promotional banners or important announcements. Can include images, text, or clickable links.</p>

<h3>Latest Products Section</h3>
<p>Shows the 6 most recently added products in a 3-column grid layout. Each product card includes:</p>
<ul>
  <li>Product Image – Visual representation of the product</li>
  <li>Product Name – Clear identification of the product</li>
  <li>Price – Current price of the product</li>
  <li>Origin Country – Where the product comes from</li>
  <li>Rating – Average user rating</li>
  <li>Available Quantity – Units currently available</li>
  <li>See Details Button – Navigates to the Product Details page</li>
</ul>

<h3>Additional Sections</h3>
<p>May include featured products, testimonials, or promotional content to enhance the user experience.</p>

<hr>

<h2>4. Authentication</h2>

<h3>Login</h3>
<p>Allows users to securely access private features of the application.</p>
<ul>
  <li>Form Fields: Email and Password</li>
  <li>Forget Password: Optional link (not implemented)</li>
  <li>Login Button: Submits credentials</li>
</ul>
<p><strong>Behavior:</strong></p>
<ul>
  <li>Successful login redirects the user to the Home page or intended private route</li>
  <li>Failed login shows an error toast message</li>
</ul>
<p><strong>Other Options:</strong></p>
<ul>
  <li>Register Link: Directs to registration page</li>
  <li>Google Login: Authenticate using Google account</li>
</ul>

<h3>Register</h3>
<p>Enables new users to create an account.</p>
<ul>
  <li>Form Fields: Name, Email, Photo URL, Password, Register Button</li>
  <li>Password Requirements:
    <ul>
      <li>Minimum 6 characters</li>
      <li>At least 1 uppercase letter</li>
      <li>At least 1 lowercase letter</li>
    </ul>
  </li>
</ul>
<p><strong>Behavior:</strong></p>
<ul>
  <li>Successful registration redirects to Home page</li>
  <li>Failed registration shows a toast error message</li>
</ul>
<p><strong>Other Options:</strong></p>
<ul>
  <li>Login Link: Navigate back to login page</li>
  <li>Google Login: Authenticate using Google account</li>
</ul>

<hr>

<h2>5. Product Details Page (Private Route)</h2>
<p>Provides a complete view of a selected product.</p>
<ul>
  <li>Displays all product details</li>
  <li>Includes Import Now Button:
    <ul>
      <li>Opens a modal to enter quantity to import</li>
      <li>Quantity cannot exceed available stock</li>
      <li>Submit button disables automatically if input exceeds available quantity</li>
      <li>After import, the database is updated with the reduced quantity</li>
    </ul>
  </li>
</ul>
<p><strong>Note:</strong> Only authenticated users can access this page.</p>

<hr>

<h2>6. All Products Page</h2>
<p>Displays all products in a 3-column grid layout.</p>
<ul>
  <li>Product Card Includes:
    <ul>
      <li>Product Image</li>
      <li>Product Name</li>
      <li>Price</li>
      <li>Origin Country</li>
      <li>Rating</li>
      <li>Available Quantity</li>
      <li>See Details Button – Navigates to Product Details page</li>
    </ul>
  </li>
</ul>

<hr>

<h2>7. My Imports Page (Private Route)</h2>
<p>Tracks all products imported by the logged-in user.</p>
<ul>
  <li>Product Card Includes:
    <ul>
      <li>Product Image</li>
      <li>Product Name</li>
      <li>Price</li>
      <li>Rating</li>
      <li>Origin Country</li>
      <li>Remove Button – Deletes the import from database and UI</li>
      <li>Imported Quantity</li>
      <li>See Details Button – Navigates to Product Details page</li>
    </ul>
  </li>
</ul>

<hr>

<h2>8. Add Export / Product Page (Private Route)</h2>
<p>Allows users to add new products for export.</p>
<ul>
  <li>Form Fields: Product Name, Product Image URL, Price, Origin Country, Rating, Available Quantity</li>
  <li>Add Export/Product Button – Saves the product to the database and displays in All Products page</li>
  <li>Only authenticated users can add exports</li>
</ul>

<hr>

<h2>9. My Exports Page (Private Route)</h2>
<p>Tracks products added by the logged-in user.</p>
<ul>
  <li>Product Card Includes:
    <ul>
      <li>Product Image</li>
      <li>Product Name</li>
      <li>Price</li>
      <li>Origin Country</li>
      <li>Rating</li>
      <li>Delete Button – Removes product from database & UI</li>
      <li>Available Quantity</li>
      <li>Update Button – Opens modal with prefilled fields to edit product information</li>
    </ul>
  </li>
</ul>

<hr>

<h2>10. General Guidelines</h2>
<ul>
  <li>Private Routes: Accessible only after login</li>
  <li>Notifications: Toast messages show errors, warnings, or success messages</li>
  <li>Navigation: Header provides easy access to all pages</li>
  <li>Data Synchronization: Any change in imports, exports, or product details is instantly reflected in database and UI</li>
  <li>Responsiveness: Optimized for desktop and mobile devices</li>
</ul>

<hr>

<h2>11. Tips for Users</h2>
<ul>
  <li>Use Google Login for faster registration and login</li>
  <li>Check available quantity before importing a product to avoid errors</li>
  <li>Regularly monitor My Imports and My Exports to manage your products</li>
  <li>Use See Details buttons for detailed information before making import or export decisions</li>
</ul>

</div>

<hr>

<hr>

<h2>12. Technology Stack</h2>
<p>The IMEX – Import & Export Management Application is built using the following technologies:</p>

<ul>
  <li><strong>Frontend:</strong> HTML, CSS, Tailwind CSS, DaisyUI, React.js, React Router, Axios, AOS, Framer Motion, Swiper Slider, React Icons, React Toastify</li>
  <li><strong>Backend:</strong> Node.js, Express.js, MongoDB (Atlas)</li>
</ul>

<hr>

<h2>13. Dependencies</h2>
<p>The frontend project uses the following dependencies:</p>

<h3>Production Dependencies</h3>
<pre>
"dependencies": {
  "@tailwindcss/vite": "^4.1.16",
  "aos": "^2.3.4",
  "axios": "^1.12.2",
  "firebase": "^12.4.0",
  "framer-motion": "^12.23.24",
  "lucide-react": "^0.548.0",
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-icons": "^5.5.0",
  "react-router": "^7.9.4",
  "react-router-dom": "^7.9.4",
  "react-toastify": "^11.0.5",
  "sweetalert2": "^11.26.3",
  "swiper": "^12.0.3",
  "tailwindcss": "^4.1.16"
}
</pre>

<h3>Development Dependencies</h3>
<pre>
"devDependencies": {
  "@eslint/js": "^9.36.0",
  "@types/react": "^19.1.16",
  "@types/react-dom": "^19.1.9",
  "@vitejs/plugin-react": "^5.0.4",
  "daisyui": "^5.3.9",
  "eslint": "^9.36.0",
  "eslint-plugin-react-hooks": "^5.2.0",
  "eslint-plugin-react-refresh": "^0.4.22",
  "globals": "^16.4.0",
  "vite": "^7.1.7"
}
</pre>

<hr>

<h2>14. Installation Instructions</h2>
<p>Follow these steps to run the frontend project on a local machine:</p>

<ol>
  <li><strong>Clone the repository:</strong>
    <pre>git clone https://github.com/nafizfuadsharkar/import-export-client.git</pre>
  </li>
  <li><strong>Navigate to the project folder:</strong>
    <pre>cd import-export-client</pre>
  </li>
  <li><strong>Install dependencies:</strong>
    <pre>npm install</pre>
    <p>This will install all production and development dependencies listed above.</p>
  </li>
  <li><strong>Start the development server:</strong>
    <pre>npm run dev</pre>
    <p>The project will be available at <code>http://localhost:5173/</code>.</p>
  </li>
</ol>

<hr>

<h2>15. Live Website</h2>
<p>You can access the deployed live frontend of IMEX here:</p>
<ul>
  <li><a href="https://imex-port-nafiz.netlify.app/" target="_blank">https://imex-port-nafiz.netlify.app/</a></li>
</ul>


