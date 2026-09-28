export default function Projects() {
  return (
    <div className="Projects">
      <h2>Projects</h2>
      
      <div className="project">
        <h3>Customer Management System</h3>
        <p className="technologies"><strong>Technologies:</strong> C#, ASP.NET Web Forms, MySQL, ADO.NET</p>
        
        <ul>
          <li>Developed a database-driven customer management application using ASP.NET Web Forms and MySQL.</li>
          <li>Implemented secure CRUD operations using parameterized SQL queries to prevent SQL Injection.</li>
          <li>Designed the application using Presentation, Business Logic, and Data Access components for improved maintainability.</li>
          <li>Implemented Session Management, validation, and exception handling.</li>
          <li>Optimized SQL queries to improve database performance.</li>
          <li>Utilized Git for version control throughout development.</li>
        </ul>
      </div>

      <div className="project">
        <h3>E-Commerce Shopping Cart System</h3>
        <p className="technologies"><strong>Technologies:</strong> C#, ASP.NET Web Forms, MySQL, JavaScript, ADO.NET</p>
        
        <ul>
          <li>Developed a full-stack e-commerce web application supporting product management, shopping cart, checkout, and order processing.</li>
          <li>Integrated MySQL using ADO.NET for secure database operations.</li>
          <li>Implemented Session Management for authentication and shopping cart persistence.</li>
          <li>Generated PDF invoices using iTextSharp.</li>
          <li>Applied Object-Oriented Programming principles, exception handling, software testing, and debugging to improve application quality.</li>
        </ul>
      </div>

            <div className="project">
        <h3>Interactive Developer Portfolio</h3>
        <p className="technologies"><strong>Technologies:</strong> React, Node.js, TypeScript, Vite, CSS3</p>
        
        <ul>
          <li>Engineered a responsive, component-based personal developer portfolio using React and TypeScript.</li>
          <li>Designed a modern, clean user interface utilizing custom CSS variables and flexible layouts.</li>
          <li>Implemented a highly modular architecture by separating distinct resume sections into reusable React components.</li>
          <li>Utilized Vite for lightning-fast local development and optimized production builds.</li>
        </ul>
      </div>

      
    </div>
  )
}
