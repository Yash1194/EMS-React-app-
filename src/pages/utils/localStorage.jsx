
const employees = [
  {
    id: 1,
    firstName: "Rahul",
    email: "rahul@example.com",
    password: "123",

    taskStats: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskName: "Fix Login Bug",
        taskDescription: "Resolve the login authentication issue.",
        taskDate: "2026-08-06",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskName: "Update Dashboard",
        taskDescription: "Improve dashboard UI components.",
        taskDate: "2026-08-04",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskName: "Deploy API",
        taskDescription: "Deploy backend API on production.",
        taskDate: "2026-08-02",
        category: "Backend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskName: "Write Unit Tests",
        taskDescription: "Create unit tests for auth module.",
        taskDate: "2026-08-08",
        category: "Testing"
      }
    ]
  },

  {
    id: 2,
    firstName: "Priya",
    email: "priya@example.com",
    password: "123",

    taskStats: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskName: "Design Landing Page",
        taskDescription: "Create responsive landing page.",
        taskDate: "2026-08-06",
        category: "UI/UX"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskName: "Navbar Fix",
        taskDescription: "Fix mobile navbar alignment.",
        taskDate: "2026-08-03",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskName: "Dark Mode",
        taskDescription: "Implement dark mode support.",
        taskDate: "2026-08-01",
        category: "Frontend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskName: "Figma Review",
        taskDescription: "Review updated Figma designs.",
        taskDate: "2026-08-09",
        category: "Design"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskName: "Button Components",
        taskDescription: "Create reusable button library.",
        taskDate: "2026-08-10",
        category: "Frontend"
      }
    ]
  },

  {
    id: 3,
    firstName: "Aman",
    email: "aman@example.com",
    password: "123",

    taskStats: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskName: "Database Schema",
        taskDescription: "Design MongoDB collections.",
        taskDate: "2026-08-06",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskName: "Optimize Queries",
        taskDescription: "Improve database performance.",
        taskDate: "2026-08-05",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskName: "Backup Server",
        taskDescription: "Configure automatic backups.",
        taskDate: "2026-08-02",
        category: "DevOps"
      }
    ]
  },

  {
    id: 4,
    firstName: "Sneha",
    email: "sneha@example.com",
    password: "123",

    taskStats: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskName: "API Integration",
        taskDescription: "Connect frontend with backend APIs.",
        taskDate: "2026-08-07",
        category: "Integration"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskName: "Profile Page",
        taskDescription: "Complete profile management page.",
        taskDate: "2026-08-04",
        category: "Frontend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskName: "Notification System",
        taskDescription: "Implement notification feature.",
        taskDate: "2026-08-09",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskName: "Payment Gateway",
        taskDescription: "Integrate payment API.",
        taskDate: "2026-08-01",
        category: "Payment"
      }
    ]
  },

  {
    id: 5,
    firstName: "Rohan",
    email: "rohan@example.com",
    password: "123",

    taskStats: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskName: "Write Documentation",
        taskDescription: "Prepare API documentation.",
        taskDate: "2026-08-06",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskName: "Bug Verification",
        taskDescription: "Verify resolved bugs.",
        taskDate: "2026-08-03",
        category: "QA"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskName: "Security Audit",
        taskDescription: "Perform security testing.",
        taskDate: "2026-08-02",
        category: "Security"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskName: "Performance Testing",
        taskDescription: "Test application performance.",
        taskDate: "2026-08-11",
        category: "Testing"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskName: "Prepare Release Notes",
        taskDescription: "Write release notes for v2.0.",
        taskDate: "2026-08-12",
        category: "Documentation"
      }
    ]
  }
];


  // admin 
const admin =  [
    {
      "id": 1,
      "name": "Admin",
      "email": "admin@example.com",
      "password": "123"
    }
  ]

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  let employees = [];
  let admin = [];
  try {
    const employeesData = localStorage.getItem("employees");
    employees = employeesData ? JSON.parse(employeesData) : [];
  } catch (e) {
    console.error("Error parsing employees from localStorage", e);
  }

  try {
    const adminData = localStorage.getItem("admin");
    admin = adminData ? JSON.parse(adminData) : [];
  } catch (e) {
    console.error("Error parsing admin from localStorage", e);
  }

  return { employees, admin };
};
  
