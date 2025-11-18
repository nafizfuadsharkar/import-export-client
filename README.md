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

<h2>12. Error Handling & Validation</h2>
<p>The system includes several validation and error-handling mechanisms to ensure smooth user experience.</p>
<ul>
  <li><strong>Form Validation:</strong>
    <ul>
      <li>All required fields must be filled before submission</li>
      <li>Invalid or incomplete inputs show toast warnings</li>
      <li>Password rules strictly enforced during registration</li>
    </ul>
  </li>
  <li><strong>Import Quantity Errors:</strong>
    <ul>
      <li>User cannot import more than the available stock</li>
      <li>Import button remains disabled if quantity exceeds limit</li>
    </ul>
  </li>
  <li><strong>Authentication Errors:</strong>
    <ul>
      <li>Wrong email/password shows an error toast</li>
      <li>Unauthorized users cannot access private routes</li>
    </ul>
  </li>
</ul>

<hr>

<h2>13. Database Structure Overview</h2>
<p>The application uses a structured database to store all user and product information.</p>
<ul>
  <li><strong>Users Collection:</strong>
    <ul>
      <li>User Name</li>
      <li>Email</li>
      <li>Photo URL</li>
      <li>Authentication Provider (Email/Google)</li>
    </ul>
  </li>
  <li><strong>Products Collection:</strong>
    <ul>
      <li>Product Name</li>
      <li>Image URL</li>
      <li>Price</li>
      <li>Origin Country</li>
      <li>Rating</li>
      <li>Available Quantity</li>
      <li>Created By (User Email)</li>
    </ul>
  </li>
  <li><strong>Imports Collection:</strong>
    <ul>
      <li>User Email</li>
      <li>Product ID</li>
      <li>Imported Quantity</li>
      <li>Date of Import</li>
    </ul>
  </li>
</ul>

<hr>

<h2>14. Security Features</h2>
<p>IMEX ensures safe and protected user interactions through several built-in security features.</p>
<ul>
  <li>Firebase Authentication for secure login</li>
  <li>Private routes protect sensitive user data</li>
  <li>Import/Export operations restricted to authenticated users</li>
  <li>User-specific data separation</li>
</ul>

<hr>

<h2>15. Performance Optimizations</h2>
<p>The application is optimized for speed and smooth operation.</p>
<ul>
  <li>Lazy loading used for images</li>
  <li>Efficient API structure reduces repeated database calls</li>
  <li>State updates ensure fast UI refresh</li>
  <li>Responsive design for all devices</li>
</ul>

<hr>

<h2>16. Browser Compatibility</h2>
<p>IMEX is compatible with all modern browsers:</p>
<ul>
  <li>Google Chrome</li>
  <li>Mozilla Firefox</li>
  <li>Microsoft Edge</li>
  <li>Safari</li>
</ul>

<hr>

<h2>17. Troubleshooting</h2>
<p>Common problems and their solutions:</p>
<ul>
  <li><strong>Cannot Login:</strong> Check email or password</li>
  <li><strong>Product Not Showing:</strong> Reload page or check database connection</li>
  <li><strong>Import Not Working:</strong> Ensure quantity does not exceed stock</li>
  <li><strong>Image Not Loading:</strong> Verify image URL</li>
</ul>

<hr>

<h2>18. Future Improvements</h2>
<p>Possible enhancements for future versions:</p>
<ul>
  <li>Advanced admin panel</li>
  <li>Order tracking system</li>
  <li>Notifications via email</li>
  <li>Advanced analytics dashboard</li>
</ul>

<hr>

<h2>19. Support</h2>
<p>If you face any issues or need help:</p>
<ul>
  <li>Email Support: sharkarnafiz@gmail.com</li>
</ul>

<hr>

<h2>20. Conclusion</h2>
<p>IMEX is a complete solution for managing import and export operations efficiently. Its user-friendly interface, secure authentication system, and powerful features make it a reliable platform for both new and experienced users.</p>

</div>

