TRUNCATE TABLE questions RESTART IDENTITY;

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'SQL',
'Database',
'Easy',
ARRAY['Structured','Query','Language'],
'Used to communicate with relational databases.',
'SQL is the standard language for creating, querying, updating, and managing relational databases.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'DBMS',
'Database',
'Easy',
ARRAY['Database','Management','System'],
'Software used to manage databases.',
'A DBMS stores, organizes, retrieves, and secures data in a database.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'RDBMS',
'Database',
'Easy',
ARRAY['Relational','Database','Management','System'],
'A DBMS that stores data in tables.',
'An RDBMS organizes data into related tables using rows, columns, and keys.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'DDL',
'Database',
'Easy',
ARRAY['Data','Definition','Language'],
'Used to create and modify database objects.',
'DDL commands include CREATE, ALTER, TRUNCATE, and DROP.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'DML',
'Database',
'Easy',
ARRAY['Data','Manipulation','Language'],
'Used to insert, update, and delete records.',
'DML commands include INSERT, UPDATE, DELETE, and MERGE.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'DCL',
'Database',
'Easy',
ARRAY['Data','Control','Language'],
'Controls database permissions.',
'DCL commands such as GRANT and REVOKE manage user privileges.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'TCL',
'Database',
'Easy',
ARRAY['Transaction','Control','Language'],
'Manages database transactions.',
'TCL commands include COMMIT, ROLLBACK, and SAVEPOINT.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'PK',
'Database',
'Easy',
ARRAY['Primary','Key'],
'Uniquely identifies each row in a table.',
'A Primary Key ensures every record in a table has a unique identifier.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'FK',
'Database',
'Easy',
ARRAY['Foreign','Key'],
'Links two database tables.',
'A Foreign Key establishes a relationship between two tables.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'ERD',
'Database',
'Easy',
ARRAY['Entity','Relationship','Diagram'],
'A visual representation of database design.',
'An ERD illustrates entities, their attributes, and relationships before implementation.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'OLTP',
'Database',
'Medium',
ARRAY['Online','Transaction','Processing'],
'Handles day-to-day business transactions.',
'OLTP systems are optimized for fast transaction processing such as banking, e-commerce, and reservation systems.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'OLAP',
'Database',
'Medium',
ARRAY['Online','Analytical','Processing'],
'Used for reporting and business intelligence.',
'OLAP systems are optimized for complex queries, analysis, and decision-making rather than transactions.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'ETL',
'Database',
'Medium',
ARRAY['Extract','Transform','Load'],
'Used in data warehousing.',
'ETL extracts data from sources, transforms it into a suitable format, and loads it into a data warehouse.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'BCNF',
'Database',
'Medium',
ARRAY['Boyce','Codd','Normal','Form'],
'A normalization level beyond 3NF.',
'BCNF removes anomalies caused by certain functional dependencies and is stricter than Third Normal Form.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'UUID',
'Database',
'Medium',
ARRAY['Universally','Unique','Identifier'],
'Used instead of auto-increment IDs.',
'A UUID is a 128-bit identifier designed to be globally unique without central coordination.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'ERM',
'Database',
'Medium',
ARRAY['Entity','Relationship','Model'],
'Conceptual model for designing databases.',
'ERM defines entities, attributes, and relationships before implementing the database.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'TDE',
'Database',
'Medium',
ARRAY['Transparent','Data','Encryption'],
'Encrypts data stored in a database.',
'Transparent Data Encryption protects data at rest by encrypting database files without requiring application changes.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'CDC',
'Database',
'Medium',
ARRAY['Change','Data','Capture'],
'Tracks modifications in a database.',
'CDC identifies inserted, updated, and deleted data so downstream systems can stay synchronized.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'MVCC',
'Database',
'Medium',
ARRAY['Multi','Version','Concurrency','Control'],
'Allows multiple transactions simultaneously.',
'MVCC lets readers and writers access the database concurrently without unnecessary locking.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'CTE',
'Database',
'Medium',
ARRAY['Common','Table','Expression'],
'Temporary named result set in SQL.',
'A CTE simplifies complex SQL queries by creating a temporary result set within a statement.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'CAP',
'Database',
'Hard',
ARRAY['Consistency','Availability','Partition','Tolerance'],
'A theorem for distributed databases.',
'The CAP theorem states that a distributed system can guarantee only two of Consistency, Availability, and Partition Tolerance simultaneously.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'BASE',
'Database',
'Hard',
ARRAY['Basically','Available','Soft','State','Eventually','Consistent'],
'Alternative consistency model used by many NoSQL databases.',
'BASE prioritizes availability over strict consistency, allowing eventual consistency across distributed systems.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'WAL',
'Database',
'Hard',
ARRAY['Write','Ahead','Logging'],
'Used for crash recovery.',
'Write-Ahead Logging ensures changes are recorded in a log before being written to the database.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'MVCC',
'Database',
'Hard',
ARRAY['Multi','Version','Concurrency','Control'],
'Allows multiple transactions without blocking readers.',
'MVCC maintains multiple versions of data to improve concurrency and reduce locking.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'RAID',
'Database',
'Hard',
ARRAY['Redundant','Array','of','Independent','Disks'],
'Improves storage reliability and performance.',
'RAID combines multiple physical disks to improve fault tolerance and performance.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'SAN',
'Database',
'Hard',
ARRAY['Storage','Area','Network'],
'High-speed storage architecture.',
'A SAN provides block-level storage for enterprise databases and servers.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'NAS',
'Database',
'Hard',
ARRAY['Network','Attached','Storage'],
'File-level shared storage.',
'NAS provides centralized file storage accessible over a network.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'SCD',
'Database',
'Hard',
ARRAY['Slowly','Changing','Dimension'],
'Data warehousing concept.',
'SCD techniques manage historical changes in dimension tables within data warehouses.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'MDM',
'Database',
'Hard',
ARRAY['Master','Data','Management'],
'Maintains a single source of truth.',
'MDM ensures consistency and accuracy of key business data across an organization.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'DW',
'Database',
'Hard',
ARRAY['Data','Warehouse'],
'Stores historical business data.',
'A Data Warehouse is designed for reporting, analytics, and business intelligence.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'HTML',
'Web Development',
'Easy',
ARRAY['HyperText','Markup','Language'],
'The standard language used to create web pages.',
'HTML provides the structure and content of web pages using elements and tags.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'CSS',
'Web Development',
'Easy',
ARRAY['Cascading','Style','Sheets'],
'Used to style web pages.',
'CSS controls colors, layouts, fonts, spacing, and responsive design for websites.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'JS',
'Web Development',
'Easy',
ARRAY['JavaScript'],
'Adds interactivity to websites.',
'JavaScript is the programming language used to create dynamic and interactive web applications.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'DOM',
'Web Development',
'Easy',
ARRAY['Document','Object','Model'],
'Represents the structure of an HTML page.',
'The DOM allows JavaScript to access and manipulate HTML elements dynamically.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'URL',
'Web Development',
'Easy',
ARRAY['Uniform','Resource','Locator'],
'The address of a web page.',
'A URL specifies the location of a resource on the internet.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'HTTP',
'Web Development',
'Easy',
ARRAY['HyperText','Transfer','Protocol'],
'Protocol used for communication on the web.',
'HTTP enables communication between web browsers and web servers.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'HTTPS',
'Web Development',
'Easy',
ARRAY['HyperText','Transfer','Protocol','Secure'],
'Secure version of HTTP.',
'HTTPS encrypts communication between browsers and servers using TLS.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'API',
'Web Development',
'Easy',
ARRAY['Application','Programming','Interface'],
'Allows two applications to communicate.',
'APIs define rules that enable software systems to exchange data and functionality.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'JSON',
'Web Development',
'Easy',
ARRAY['JavaScript','Object','Notation'],
'Common format for exchanging data.',
'JSON is a lightweight, human-readable data format widely used in web applications and APIs.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'AJAX',
'Web Development',
'Easy',
ARRAY['Asynchronous','JavaScript','And','XML'],
'Loads data without refreshing the page.',
'AJAX enables web pages to communicate with servers asynchronously for a smoother user experience.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'REST',
'Web Development',
'Medium',
ARRAY['Representational','State','Transfer'],
'A popular architecture for designing web APIs.',
'REST is an architectural style that uses standard HTTP methods for communication between clients and servers.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'SOAP',
'Web Development',
'Medium',
ARRAY['Simple','Object','Access','Protocol'],
'A protocol used for exchanging structured information.',
'SOAP is a messaging protocol that uses XML for communication between web services.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'JWT',
'Web Development',
'Medium',
ARRAY['JSON','Web','Token'],
'Commonly used for user authentication.',
'JWT securely transmits information between two parties as a digitally signed JSON object.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'CORS',
'Web Development',
'Medium',
ARRAY['Cross','Origin','Resource','Sharing'],
'Controls which websites can access your API.',
'CORS is a browser security feature that allows or blocks requests from different origins.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'SSR',
'Web Development',
'Medium',
ARRAY['Server','Side','Rendering'],
'Pages are generated on the server.',
'SSR improves SEO and initial page load performance by rendering HTML on the server.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'CSR',
'Web Development',
'Medium',
ARRAY['Client','Side','Rendering'],
'React applications commonly use this.',
'CSR renders pages in the browser using JavaScript after the initial page load.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'SPA',
'Web Development',
'Medium',
ARRAY['Single','Page','Application'],
'Loads a single HTML page.',
'SPAs dynamically update content without refreshing the entire webpage.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'PWA',
'Web Development',
'Medium',
ARRAY['Progressive','Web','Application'],
'Works like a mobile app in the browser.',
'PWAs provide offline support, installation capability, and app-like experiences using modern web technologies.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'SSG',
'Web Development',
'Medium',
ARRAY['Static','Site','Generation'],
'Pages are generated during the build process.',
'SSG creates HTML files at build time, making websites fast, secure, and SEO-friendly.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'WASM',
'Web Development',
'Medium',
ARRAY['Web','Assembly'],
'Runs high-performance code inside browsers.',
'WebAssembly enables languages like C, C++, and Rust to run efficiently in modern web browsers.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'CSP',
'Web Development',
'Hard',
ARRAY['Content','Security','Policy'],
'Helps prevent XSS attacks.',
'Content Security Policy restricts which resources a browser is allowed to load, reducing security risks.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'SRI',
'Web Development',
'Hard',
ARRAY['Subresource','Integrity'],
'Protects external resources from tampering.',
'SRI ensures that externally loaded files haven''t been modified by checking their cryptographic hash.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'CSRF',
'Web Development',
'Hard',
ARRAY['Cross','Site','Request','Forgery'],
'A security attack exploiting authenticated users.',
'CSRF tricks authenticated users into unknowingly submitting malicious requests.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'XSS',
'Web Development',
'Hard',
ARRAY['Cross','Site','Scripting'],
'Allows attackers to inject malicious JavaScript.',
'Cross-Site Scripting enables attackers to execute malicious scripts in another user''s browser.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'OIDC',
'Web Development',
'Hard',
ARRAY['OpenID','Connect'],
'Authentication protocol built on OAuth 2.0.',
'OpenID Connect adds user authentication capabilities to OAuth 2.0.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'OAuth',
'Web Development',
'Hard',
ARRAY['Open','Authorization'],
'Used for Google, GitHub and Facebook login.',
'OAuth allows users to authorize applications without sharing their passwords.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'W3C',
'Web Development',
'Hard',
ARRAY['World','Wide','Web','Consortium'],
'Develops web standards.',
'The W3C develops standards including HTML, CSS and accessibility guidelines.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'WCAG',
'Web Development',
'Hard',
ARRAY['Web','Content','Accessibility','Guidelines'],
'Accessibility standards for websites.',
'WCAG helps developers build websites accessible to people with disabilities.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'BFF',
'Web Development',
'Hard',
ARRAY['Backend','For','Frontend'],
'A backend designed specifically for one frontend.',
'The Backend for Frontend pattern creates APIs tailored for a particular client application.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'HATEOAS',
'Web Development',
'Hard',
ARRAY['Hypermedia','As','The','Engine','Of','Application','State'],
'An advanced REST principle.',
'HATEOAS enables REST APIs to provide links that guide clients through available actions.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'OOP',
'Programming',
'Easy',
ARRAY['Object','Oriented','Programming'],
'A programming paradigm based on classes and objects.',
'OOP organizes code into objects that contain data and methods, promoting reusability and modularity.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'IDE',
'Programming',
'Easy',
ARRAY['Integrated','Development','Environment'],
'Software used for writing and debugging code.',
'An IDE provides a code editor, debugger, compiler, and other tools in one application.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'SDK',
'Programming',
'Easy',
ARRAY['Software','Development','Kit'],
'A collection of tools for building applications.',
'An SDK includes libraries, documentation, and utilities required to develop software for a platform.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'DSA',
'Programming',
'Easy',
ARRAY['Data','Structures','Algorithms'],
'A fundamental topic in coding interviews.',
'Data Structures and Algorithms focus on organizing data efficiently and designing optimized solutions to problems.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'CLI',
'Programming',
'Easy',
ARRAY['Command','Line','Interface'],
'Interacts with programs by typing commands.',
'A CLI allows users to execute commands through a text-based terminal.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'GUI',
'Programming',
'Easy',
ARRAY['Graphical','User','Interface'],
'Uses windows, buttons, and icons.',
'A GUI allows users to interact with software visually instead of typing commands.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'JDK',
'Programming',
'Easy',
ARRAY['Java','Development','Kit'],
'Required to develop Java applications.',
'The JDK contains the Java compiler, libraries, and tools needed for Java development.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'JRE',
'Programming',
'Easy',
ARRAY['Java','Runtime','Environment'],
'Required to run Java programs.',
'The JRE provides the runtime environment needed to execute Java applications.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'JVM',
'Programming',
'Easy',
ARRAY['Java','Virtual','Machine'],
'Executes Java bytecode.',
'The JVM enables Java programs to run on different operating systems without modification.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'ADT',
'Programming',
'Easy',
ARRAY['Abstract','Data','Type'],
'Defines data behavior independent of implementation.',
'An ADT specifies the operations on a data structure without describing how they are implemented.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'SOLID',
'Programming',
'Medium',
ARRAY['Single','Responsibility','Open','Closed','Liskov','Substitution','Interface','Segregation','Dependency','Inversion'],
'A set of object-oriented design principles.',
'SOLID is a collection of five design principles that help developers build maintainable and scalable software.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'DRY',
'Programming',
'Medium',
ARRAY['Don''t','Repeat','Yourself'],
'Avoid duplicate code.',
'The DRY principle encourages writing reusable code instead of repeating the same logic.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'KISS',
'Programming',
'Medium',
ARRAY['Keep','It','Simple','Stupid'],
'Avoid unnecessary complexity.',
'The KISS principle states that systems work best when they are kept as simple as possible.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'YAGNI',
'Programming',
'Medium',
ARRAY['You','Aren''t','Gonna','Need','It'],
'Don''t implement features before they''re needed.',
'YAGNI encourages developers to implement only the features currently required.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'TDD',
'Programming',
'Medium',
ARRAY['Test','Driven','Development'],
'Write tests before writing code.',
'TDD follows the cycle of writing a failing test, implementing the code, and then refactoring.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'BDD',
'Programming',
'Medium',
ARRAY['Behavior','Driven','Development'],
'Focuses on application behavior.',
'BDD extends TDD by describing software behavior in a language understood by both developers and stakeholders.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'AST',
'Programming',
'Medium',
ARRAY['Abstract','Syntax','Tree'],
'Used by compilers and interpreters.',
'An AST represents the syntactic structure of source code in a tree format.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'JIT',
'Programming',
'Medium',
ARRAY['Just','In','Time'],
'A compilation technique.',
'JIT compilation converts bytecode into machine code during program execution for better performance.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'DTO',
'Programming',
'Medium',
ARRAY['Data','Transfer','Object'],
'Used to transfer data between layers.',
'DTOs carry data between different parts of an application without containing business logic.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'DAO',
'Programming',
'Medium',
ARRAY['Data','Access','Object'],
'Responsible for database operations.',
'The DAO pattern separates data access logic from business logic, making applications easier to maintain.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'AOT',
'Programming',
'Hard',
ARRAY['Ahead','Of','Time'],
'Compilation performed before program execution.',
'AOT compilation converts source code into machine code before execution, improving startup performance.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'GC',
'Programming',
'Hard',
ARRAY['Garbage','Collection'],
'Automatically frees unused memory.',
'Garbage Collection automatically reclaims memory occupied by objects that are no longer needed.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'IR',
'Programming',
'Hard',
ARRAY['Intermediate','Representation'],
'Used internally by compilers.',
'An Intermediate Representation is a data structure used by compilers for optimization before generating machine code.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'SSA',
'Programming',
'Hard',
ARRAY['Static','Single','Assignment'],
'Compiler optimization technique.',
'SSA ensures each variable is assigned only once, making compiler optimizations easier.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'RTTI',
'Programming',
'Hard',
ARRAY['Run','Time','Type','Information'],
'Used in C++ for type checking.',
'RTTI allows programs to determine an object''s data type during execution.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'ABI',
'Programming',
'Hard',
ARRAY['Application','Binary','Interface'],
'Defines binary compatibility.',
'An ABI specifies how compiled programs interact with the operating system and libraries.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'FFI',
'Programming',
'Hard',
ARRAY['Foreign','Function','Interface'],
'Allows one language to call code written in another.',
'FFI enables interoperability between programming languages.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'ASM',
'Programming',
'Hard',
ARRAY['Assembly'],
'A low-level programming language.',
'Assembly language provides direct control over computer hardware using processor instructions.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'REPL',
'Programming',
'Hard',
ARRAY['Read','Eval','Print','Loop'],
'Interactive programming environment.',
'A REPL lets developers write and execute code interactively line by line.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'PL',
'Programming',
'Hard',
ARRAY['Programming','Language'],
'General term for languages like Java or Python.',
'A Programming Language is used to write instructions that computers can execute.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'LAN',
'Networking',
'Easy',
ARRAY['Local','Area','Network'],
'Connects devices within a small area.',
'A LAN connects computers and devices within a limited area such as a home, office, or school.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'WAN',
'Networking',
'Easy',
ARRAY['Wide','Area','Network'],
'Connects multiple LANs across large distances.',
'A WAN covers a large geographical area and connects multiple local networks.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'MAN',
'Networking',
'Easy',
ARRAY['Metropolitan','Area','Network'],
'Covers an entire city.',
'A MAN connects multiple LANs within a metropolitan area such as a city.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'PAN',
'Networking',
'Easy',
ARRAY['Personal','Area','Network'],
'Used for personal devices.',
'A PAN connects personal devices like smartphones, laptops, and smartwatches over a short distance.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'TCP',
'Networking',
'Easy',
ARRAY['Transmission','Control','Protocol'],
'Reliable communication protocol.',
'TCP provides reliable, ordered, and error-checked delivery of data between devices.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'UDP',
'Networking',
'Easy',
ARRAY['User','Datagram','Protocol'],
'Fast but connectionless protocol.',
'UDP provides fast communication with minimal overhead but does not guarantee delivery.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'SSID',
'Networking',
'Easy',
ARRAY['Service','Set','Identifier'],
'The name of a Wi-Fi network.',
'SSID is the name assigned to a wireless network so users can identify and connect to it.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'NIC',
'Networking',
'Easy',
ARRAY['Network','Interface','Card'],
'Hardware used to connect to a network.',
'A NIC enables a computer or device to communicate over a network.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'ISP',
'Networking',
'Easy',
ARRAY['Internet','Service','Provider'],
'Provides internet connectivity.',
'An ISP supplies internet access and related services to homes and businesses.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'DHCP',
'Networking',
'Easy',
ARRAY['Dynamic','Host','Configuration','Protocol'],
'Automatically assigns IP addresses.',
'DHCP automatically provides IP addresses and network settings to devices joining a network.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'NAT',
'Networking',
'Medium',
ARRAY['Network','Address','Translation'],
'Allows multiple devices to share one public IP.',
'NAT translates private IP addresses into a public IP address, conserving IPv4 addresses.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'ARP',
'Networking',
'Medium',
ARRAY['Address','Resolution','Protocol'],
'Finds a MAC address from an IP address.',
'ARP maps an IPv4 address to the corresponding MAC address on a local network.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'ICMP',
'Networking',
'Medium',
ARRAY['Internet','Control','Message','Protocol'],
'Used by the ping command.',
'ICMP is used for diagnostics and error reporting in IP networks.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'RIP',
'Networking',
'Medium',
ARRAY['Routing','Information','Protocol'],
'A distance-vector routing protocol.',
'RIP exchanges routing information between routers using hop count as its metric.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'OSPF',
'Networking',
'Medium',
ARRAY['Open','Shortest','Path','First'],
'A link-state routing protocol.',
'OSPF calculates the shortest path between routers using Dijkstra''s algorithm.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'BGP',
'Networking',
'Medium',
ARRAY['Border','Gateway','Protocol'],
'The routing protocol of the Internet.',
'BGP exchanges routing information between autonomous systems across the Internet.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'VLAN',
'Networking',
'Medium',
ARRAY['Virtual','Local','Area','Network'],
'Creates separate logical networks.',
'A VLAN divides one physical network into multiple logical broadcast domains.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'VPN',
'Networking',
'Medium',
ARRAY['Virtual','Private','Network'],
'Creates a secure encrypted connection.',
'A VPN encrypts internet traffic and allows secure remote access to private networks.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'ACL',
'Networking',
'Medium',
ARRAY['Access','Control','List'],
'Filters network traffic.',
'ACLs define rules that permit or deny network traffic based on specified conditions.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'ASN',
'Networking',
'Medium',
ARRAY['Autonomous','System','Number'],
'Identifies an autonomous system on the Internet.',
'An ASN uniquely identifies a network participating in inter-domain routing using BGP.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'MPLS',
'Networking',
'Hard',
ARRAY['Multiprotocol','Label','Switching'],
'A high-performance packet forwarding technology.',
'MPLS forwards packets using labels instead of IP addresses, improving speed and efficiency.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'STP',
'Networking',
'Hard',
ARRAY['Spanning','Tree','Protocol'],
'Prevents loops in switched networks.',
'STP disables redundant paths to prevent switching loops in Ethernet networks.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'RSTP',
'Networking',
'Hard',
ARRAY['Rapid','Spanning','Tree','Protocol'],
'A faster version of STP.',
'RSTP significantly reduces the time needed for network recovery after topology changes.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'HSRP',
'Networking',
'Hard',
ARRAY['Hot','Standby','Router','Protocol'],
'Provides gateway redundancy.',
'HSRP ensures continuous network availability by providing a backup default gateway.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'VRRP',
'Networking',
'Hard',
ARRAY['Virtual','Router','Redundancy','Protocol'],
'An alternative to HSRP.',
'VRRP allows multiple routers to share a virtual IP address for high availability.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'LACP',
'Networking',
'Hard',
ARRAY['Link','Aggregation','Control','Protocol'],
'Combines multiple network links into one.',
'LACP increases bandwidth and provides redundancy by bundling multiple physical links.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'SNMP',
'Networking',
'Hard',
ARRAY['Simple','Network','Management','Protocol'],
'Used to monitor network devices.',
'SNMP allows administrators to monitor and manage routers, switches, servers, and other devices.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'NTP',
'Networking',
'Hard',
ARRAY['Network','Time','Protocol'],
'Synchronizes clocks across devices.',
'NTP keeps network devices synchronized with accurate time servers.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'VoIP',
'Networking',
'Hard',
ARRAY['Voice','over','Internet','Protocol'],
'Technology for making calls over the Internet.',
'VoIP enables voice communication using IP networks instead of traditional telephone lines.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'QoS',
'Networking',
'Hard',
ARRAY['Quality','of','Service'],
'Prioritizes important network traffic.',
'QoS manages network resources by giving priority to latency-sensitive applications like voice and video.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'IaaS',
'Cloud',
'Easy',
ARRAY['Infrastructure','as','a','Service'],
'Provides virtual servers and networking resources.',
'Infrastructure as a Service provides virtual machines, storage, and networking over the internet.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'PaaS',
'Cloud',
'Easy',
ARRAY['Platform','as','a','Service'],
'Provides a platform for application development.',
'Platform as a Service allows developers to build, test, and deploy applications without managing infrastructure.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'SaaS',
'Cloud',
'Easy',
ARRAY['Software','as','a','Service'],
'Software accessed through a browser.',
'Software as a Service delivers applications over the internet without local installation.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'VM',
'Cloud',
'Easy',
ARRAY['Virtual','Machine'],
'A software-based computer.',
'A Virtual Machine emulates a physical computer and runs its own operating system.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'VPC',
'Cloud',
'Easy',
ARRAY['Virtual','Private','Cloud'],
'An isolated private network in the cloud.',
'A Virtual Private Cloud securely isolates cloud resources within a public cloud.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'CSP',
'Cloud',
'Easy',
ARRAY['Cloud','Service','Provider'],
'Company providing cloud services.',
'A Cloud Service Provider offers computing, storage, networking, and cloud platforms.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'AZ',
'Cloud',
'Easy',
ARRAY['Availability','Zone'],
'Independent data center location.',
'Availability Zones improve fault tolerance by separating infrastructure into isolated locations.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'IAM',
'Cloud',
'Easy',
ARRAY['Identity','and','Access','Management'],
'Controls user permissions.',
'IAM manages users, authentication, authorization, roles, and permissions in cloud platforms.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'LB',
'Cloud',
'Easy',
ARRAY['Load','Balancer'],
'Distributes traffic across servers.',
'A Load Balancer improves performance and availability by distributing incoming requests.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'FaaS',
'Cloud',
'Easy',
ARRAY['Function','as','a','Service'],
'Serverless event-driven computing.',
'Function as a Service executes code on demand without managing servers.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'CDN',
'Cloud',
'Medium',
ARRAY['Content','Delivery','Network'],
'Speeds up website content delivery worldwide.',
'A Content Delivery Network stores cached content on multiple servers to reduce latency.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'K8s',
'Cloud',
'Medium',
ARRAY['Kubernetes'],
'Popular container orchestration platform.',
'Kubernetes automates deployment, scaling, and management of containerized applications.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'API',
'Cloud',
'Medium',
ARRAY['Application','Programming','Interface'],
'Allows applications to communicate.',
'APIs enable software applications and cloud services to exchange data and functionality.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'VPN',
'Cloud',
'Medium',
ARRAY['Virtual','Private','Network'],
'Provides a secure encrypted connection.',
'A VPN securely connects users or networks over the internet using encryption.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'DNS',
'Cloud',
'Medium',
ARRAY['Domain','Name','System'],
'Translates website names into IP addresses.',
'DNS converts human-readable domain names into machine-readable IP addresses.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'SSL',
'Cloud',
'Medium',
ARRAY['Secure','Sockets','Layer'],
'Used for encrypted web communication.',
'SSL encrypts communication between web browsers and servers to protect data.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'TLS',
'Cloud',
'Medium',
ARRAY['Transport','Layer','Security'],
'Modern replacement for SSL.',
'TLS secures internet communications and is widely used for HTTPS connections.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'EBS',
'Cloud',
'Medium',
ARRAY['Elastic','Block','Store'],
'Persistent block storage service in AWS.',
'Amazon EBS provides scalable block storage volumes for EC2 instances.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'AMI',
'Cloud',
'Medium',
ARRAY['Amazon','Machine','Image'],
'Template used to launch virtual servers.',
'An Amazon Machine Image contains the software configuration required to launch an EC2 instance.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'EC2',
'Cloud',
'Medium',
ARRAY['Elastic','Compute','Cloud'],
'AWS virtual machine service.',
'Amazon EC2 provides scalable virtual servers for running applications in the cloud.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'IaC',
'Cloud',
'Hard',
ARRAY['Infrastructure','as','Code'],
'Managing infrastructure using code instead of manual configuration.',
'Infrastructure as Code automates provisioning and management of cloud infrastructure using configuration files.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'CI/CD',
'Cloud',
'Hard',
ARRAY['Continuous','Integration','Continuous','Deployment'],
'Automates software building, testing, and deployment.',
'CI/CD is a DevOps practice that enables developers to frequently integrate code and automatically deploy applications.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'SLA',
'Cloud',
'Hard',
ARRAY['Service','Level','Agreement'],
'Defines guaranteed service availability.',
'A Service Level Agreement specifies uptime, performance, and responsibilities between a cloud provider and customer.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'RTO',
'Cloud',
'Hard',
ARRAY['Recovery','Time','Objective'],
'Maximum acceptable downtime after a disaster.',
'Recovery Time Objective defines how quickly systems should be restored after an outage.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'RPO',
'Cloud',
'Hard',
ARRAY['Recovery','Point','Objective'],
'Maximum acceptable amount of data loss.',
'Recovery Point Objective defines the maximum data loss measured in time during a disaster.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'HPA',
'Cloud',
'Hard',
ARRAY['Horizontal','Pod','Autoscaler'],
'Automatically scales Kubernetes pods.',
'Horizontal Pod Autoscaler increases or decreases the number of Kubernetes pods based on workload.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'PVC',
'Cloud',
'Hard',
ARRAY['Persistent','Volume','Claim'],
'Requests persistent storage in Kubernetes.',
'A Persistent Volume Claim allows Kubernetes applications to request durable storage resources.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'CSI',
'Cloud',
'Hard',
ARRAY['Container','Storage','Interface'],
'Standard interface for storage plugins.',
'Container Storage Interface enables Kubernetes to connect with different storage providers.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'CNI',
'Cloud',
'Hard',
ARRAY['Container','Network','Interface'],
'Handles networking for containers.',
'Container Network Interface provides networking capabilities for container orchestration platforms like Kubernetes.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'DR',
'Cloud',
'Hard',
ARRAY['Disaster','Recovery'],
'Plan for restoring systems after failures.',
'Disaster Recovery includes strategies and procedures to recover applications and data after unexpected events.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'PKI',
'Cyber Security',
'Easy',
ARRAY['Public','Key','Infrastructure'],
'Manages digital certificates and encryption keys.',
'PKI provides the framework for creating, managing, and validating digital certificates.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'MFA',
'Cyber Security',
'Easy',
ARRAY['Multi','Factor','Authentication'],
'Uses more than one verification method.',
'MFA improves security by requiring two or more authentication factors before granting access.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'OTP',
'Cyber Security',
'Easy',
ARRAY['One','Time','Password'],
'A temporary password used only once.',
'An OTP is a unique password that expires after a single login attempt or a short period.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'AES',
'Cyber Security',
'Easy',
ARRAY['Advanced','Encryption','Standard'],
'A widely used symmetric encryption algorithm.',
'AES is the industry-standard encryption algorithm used to secure sensitive data.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'RSA',
'Cyber Security',
'Easy',
ARRAY['Rivest','Shamir','Adleman'],
'A popular public-key encryption algorithm.',
'RSA is an asymmetric cryptographic algorithm used for secure communication and digital signatures.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'SSL',
'Cyber Security',
'Easy',
ARRAY['Secure','Sockets','Layer'],
'Predecessor to TLS.',
'SSL was the original protocol used to encrypt communication between clients and servers.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'TLS',
'Cyber Security',
'Easy',
ARRAY['Transport','Layer','Security'],
'Secures HTTPS connections.',
'TLS encrypts data transmitted over networks and is the modern replacement for SSL.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'WAF',
'Cyber Security',
'Easy',
ARRAY['Web','Application','Firewall'],
'Protects websites from common attacks.',
'A Web Application Firewall filters malicious HTTP traffic before it reaches web applications.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'SOC',
'Cyber Security',
'Easy',
ARRAY['Security','Operations','Center'],
'Monitors and responds to security incidents.',
'A SOC is responsible for continuously monitoring, detecting, and responding to cyber threats.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'SIEM',
'Cyber Security',
'Easy',
ARRAY['Security','Information','and','Event','Management'],
'Collects and analyzes security logs.',
'SIEM platforms aggregate logs from multiple sources to detect, investigate, and respond to security incidents.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'IDS',
'Cyber Security',
'Medium',
ARRAY['Intrusion','Detection','System'],
'Detects suspicious network activity.',
'An IDS monitors network traffic and alerts administrators about potential security threats.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'IPS',
'Cyber Security',
'Medium',
ARRAY['Intrusion','Prevention','System'],
'Detects and blocks attacks.',
'An IPS actively prevents malicious traffic from reaching systems after detecting threats.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'DLP',
'Cyber Security',
'Medium',
ARRAY['Data','Loss','Prevention'],
'Protects sensitive information from being leaked.',
'DLP solutions monitor and prevent unauthorized sharing or exposure of confidential data.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'EDR',
'Cyber Security',
'Medium',
ARRAY['Endpoint','Detection','and','Response'],
'Protects laptops and desktops.',
'EDR continuously monitors endpoint devices to detect, investigate, and respond to cyber threats.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'XDR',
'Cyber Security',
'Medium',
ARRAY['Extended','Detection','and','Response'],
'Extends threat detection across multiple systems.',
'XDR combines security data from endpoints, networks, cloud services, and email for comprehensive threat detection.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'MITM',
'Cyber Security',
'Medium',
ARRAY['Man','In','The','Middle'],
'An attack that intercepts communication.',
'A MITM attack occurs when an attacker secretly intercepts communication between two parties.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'IOC',
'Cyber Security',
'Medium',
ARRAY['Indicator','Of','Compromise'],
'Evidence of a security breach.',
'IOCs are forensic artifacts such as malicious IP addresses, file hashes, or domains that indicate an attack.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'TTP',
'Cyber Security',
'Medium',
ARRAY['Tactics','Techniques','Procedures'],
'Describes attacker behavior.',
'TTPs describe the methods cyber attackers use to achieve their objectives.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'CVE',
'Cyber Security',
'Medium',
ARRAY['Common','Vulnerabilities','and','Exposures'],
'Unique identifier for security vulnerabilities.',
'CVE provides standardized identifiers for publicly known cybersecurity vulnerabilities.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'CVSS',
'Cyber Security',
'Medium',
ARRAY['Common','Vulnerability','Scoring','System'],
'Measures vulnerability severity.',
'CVSS assigns a numerical score that reflects the severity of software vulnerabilities.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'APT',
'Cyber Security',
'Hard',
ARRAY['Advanced','Persistent','Threat'],
'A long-term targeted cyber attack.',
'An APT is a sophisticated cyberattack where attackers gain unauthorized access and remain undetected for an extended period.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'HIDS',
'Cyber Security',
'Hard',
ARRAY['Host','Intrusion','Detection','System'],
'Monitors a single computer for attacks.',
'A HIDS detects suspicious activities by monitoring files, logs, and processes on a host.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'NIDS',
'Cyber Security',
'Hard',
ARRAY['Network','Intrusion','Detection','System'],
'Monitors network traffic for attacks.',
'A NIDS analyzes network traffic to identify malicious activity across an entire network.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'PBKDF2',
'Cyber Security',
'Hard',
ARRAY['Password','Based','Key','Derivation','Function','2'],
'Used for secure password hashing.',
'PBKDF2 strengthens passwords by repeatedly hashing them with a salt, making brute-force attacks much harder.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'SAML',
'Cyber Security',
'Hard',
ARRAY['Security','Assertion','Markup','Language'],
'Used for Single Sign-On.',
'SAML enables secure exchange of authentication and authorization information between systems.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'RCE',
'Cyber Security',
'Hard',
ARRAY['Remote','Code','Execution'],
'Allows attackers to execute code remotely.',
'RCE vulnerabilities allow attackers to run arbitrary code on a target system.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'XXE',
'Cyber Security',
'Hard',
ARRAY['XML','External','Entity'],
'A vulnerability in XML parsers.',
'XXE attacks exploit XML parsers to access sensitive files or perform server-side attacks.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'SSRF',
'Cyber Security',
'Hard',
ARRAY['Server','Side','Request','Forgery'],
'Forces a server to send unauthorized requests.',
'SSRF vulnerabilities allow attackers to trick a server into making requests to unintended destinations.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'CSRF',
'Cyber Security',
'Hard',
ARRAY['Cross','Site','Request','Forgery'],
'Tricks users into performing unwanted actions.',
'CSRF attacks exploit authenticated user sessions to perform unauthorized actions on web applications.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'XSS',
'Cyber Security',
'Hard',
ARRAY['Cross','Site','Scripting'],
'Injects malicious scripts into web pages.',
'XSS attacks inject malicious JavaScript into trusted websites, potentially stealing user data or sessions.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'AI',
'AI & ML',
'Easy',
ARRAY['Artificial','Intelligence'],
'Machines performing tasks that normally require human intelligence.',
'Artificial Intelligence enables computers to mimic human intelligence such as learning, reasoning, and problem-solving.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'ML',
'AI & ML',
'Easy',
ARRAY['Machine','Learning'],
'A branch of AI where systems learn from data.',
'Machine Learning allows computers to improve performance automatically through experience without explicit programming.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'DL',
'AI & ML',
'Easy',
ARRAY['Deep','Learning'],
'Uses neural networks with multiple layers.',
'Deep Learning is a subset of Machine Learning that uses deep neural networks to solve complex problems.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'NLP',
'AI & ML',
'Easy',
ARRAY['Natural','Language','Processing'],
'Helps computers understand human language.',
'Natural Language Processing enables computers to read, interpret, and generate human language.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'CV',
'AI & ML',
'Easy',
ARRAY['Computer','Vision'],
'Allows computers to understand images and videos.',
'Computer Vision enables machines to identify, analyze, and process visual information.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'LLM',
'AI & ML',
'Easy',
ARRAY['Large','Language','Model'],
'Powers modern AI chatbots.',
'Large Language Models are trained on massive text datasets to understand and generate human-like language.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'GPU',
'AI & ML',
'Easy',
ARRAY['Graphics','Processing','Unit'],
'Commonly used to train AI models.',
'A Graphics Processing Unit performs parallel computations, making it ideal for AI and deep learning workloads.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'OCR',
'AI & ML',
'Easy',
ARRAY['Optical','Character','Recognition'],
'Extracts text from images.',
'Optical Character Recognition converts printed or handwritten text in images into editable digital text.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'ASR',
'AI & ML',
'Easy',
ARRAY['Automatic','Speech','Recognition'],
'Converts spoken words into text.',
'Automatic Speech Recognition allows computers to recognize and transcribe spoken language.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'CNN',
'AI & ML',
'Easy',
ARRAY['Convolutional','Neural','Network'],
'A neural network mainly used for image recognition.',
'Convolutional Neural Networks are deep learning models widely used in image classification and object detection.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'RNN',
'AI & ML',
'Medium',
ARRAY['Recurrent','Neural','Network'],
'Processes sequential data like text and speech.',
'Recurrent Neural Networks are designed for sequence data by retaining information from previous inputs.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'GAN',
'AI & ML',
'Medium',
ARRAY['Generative','Adversarial','Network'],
'Two neural networks compete to generate realistic data.',
'GANs consist of a Generator and a Discriminator that train together to create realistic synthetic data.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'RL',
'AI & ML',
'Medium',
ARRAY['Reinforcement','Learning'],
'Learning through rewards and penalties.',
'Reinforcement Learning trains an agent to make decisions by maximizing cumulative rewards.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'ANN',
'AI & ML',
'Medium',
ARRAY['Artificial','Neural','Network'],
'Inspired by the human brain.',
'Artificial Neural Networks are computing systems made up of interconnected nodes that learn patterns from data.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'SVM',
'AI & ML',
'Medium',
ARRAY['Support','Vector','Machine'],
'A popular supervised learning algorithm.',
'Support Vector Machines classify data by finding the optimal separating hyperplane.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'KNN',
'AI & ML',
'Medium',
ARRAY['K','Nearest','Neighbors'],
'Classifies data using nearby examples.',
'K-Nearest Neighbors predicts outcomes based on the closest training samples.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'PCA',
'AI & ML',
'Medium',
ARRAY['Principal','Component','Analysis'],
'Reduces the number of input features.',
'Principal Component Analysis reduces dimensionality while preserving most of the important information.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'TF',
'AI & ML',
'Medium',
ARRAY['TensorFlow'],
'Google''s popular machine learning framework.',
'TensorFlow is an open-source framework used for building and deploying machine learning models.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'BERT',
'AI & ML',
'Medium',
ARRAY['Bidirectional','Encoder','Representations','from','Transformers'],
'A transformer model developed by Google.',
'BERT understands context by reading text in both directions, improving many NLP tasks.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'GPT',
'AI & ML',
'Medium',
ARRAY['Generative','Pre-trained','Transformer'],
'A transformer model used for text generation.',
'GPT is a large language model that generates human-like text using transformer architecture.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'XAI',
'AI & ML',
'Hard',
ARRAY['Explainable','Artificial','Intelligence'],
'Makes AI decisions easier to understand.',
'Explainable AI focuses on making machine learning models transparent and interpretable.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'AGI',
'AI & ML',
'Hard',
ARRAY['Artificial','General','Intelligence'],
'Human-level intelligence across many tasks.',
'Artificial General Intelligence refers to AI capable of performing any intellectual task that humans can do.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'MLOps',
'AI & ML',
'Hard',
ARRAY['Machine','Learning','Operations'],
'DevOps practices for machine learning.',
'MLOps combines machine learning, DevOps, and data engineering to automate the ML lifecycle.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'AIOps',
'AI & ML',
'Hard',
ARRAY['Artificial','Intelligence','for','IT','Operations'],
'Uses AI to automate IT operations.',
'AIOps applies AI techniques to monitor, analyze, and automate IT infrastructure management.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'RAG',
'AI & ML',
'Hard',
ARRAY['Retrieval','Augmented','Generation'],
'Combines external knowledge with language models.',
'RAG improves LLM responses by retrieving relevant information before generating answers.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'RLHF',
'AI & ML',
'Hard',
ARRAY['Reinforcement','Learning','from','Human','Feedback'],
'Improves AI using human preferences.',
'RLHF aligns AI models with human expectations using reinforcement learning based on human feedback.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'LoRA',
'AI & ML',
'Hard',
ARRAY['Low','Rank','Adaptation'],
'Efficient method for fine-tuning large AI models.',
'LoRA fine-tunes large language models by updating a small number of parameters.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'PEFT',
'AI & ML',
'Hard',
ARRAY['Parameter','Efficient','Fine','Tuning'],
'Optimizes large models with fewer trainable parameters.',
'PEFT techniques reduce computational cost while adapting pretrained models.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'ViT',
'AI & ML',
'Hard',
ARRAY['Vision','Transformer'],
'Transformer architecture for image recognition.',
'Vision Transformers apply transformer models to computer vision tasks such as image classification.'
);

INSERT INTO questions
(acronym, category, difficulty, answer, hint, explanation)
VALUES (
'CLIP',
'AI & ML',
'Hard',
ARRAY['Contrastive','Language','Image','Pretraining'],
'Connects images with natural language.',
'CLIP learns relationships between images and text, enabling powerful zero-shot image understanding.'
);

