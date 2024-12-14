localStorage.clear()
const employees = [
    {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "firstName": "Ahmed",
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Prepare Report",
                "description": "Prepare the weekly financial report.",
                "date": "2024-10-17",
                "category": "Finance"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Team Meeting",
                "description": "Attend the weekly team meeting.",
                "date": "2024-10-15",
                "category": "Meetings"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "title": "Client Call",
                "description": "Follow up with client about project status.",
                "date": "2024-10-10",
                "category": "Client Relations"
            }
        ]
    },
    {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "firstName": "Bilal",
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "title": "Code Review",
                "description": "Review the new feature code.",
                "date": "2024-10-18",
                "category": "Development"
            },
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Product Demo",
                "description": "Prepare the demo for new product launch.",
                "date": "2024-10-20",
                "category": "Product Development"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Client Meeting",
                "description": "Discuss project requirements with the client.",
                "date": "2024-10-12",
                "category": "Client Relations"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "title": "Fix Bug",
                "description": "Resolve the critical issue in the system.",
                "date": "2024-10-09",
                "category": "Development"
            }
        ]
    },
    {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "firstName": "Fatima",
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Marketing Strategy",
                "description": "Create the strategy for the upcoming campaign.",
                "date": "2024-10-18",
                "category": "Marketing"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Data Analysis",
                "description": "Analyze sales data for the last quarter.",
                "date": "2024-10-16",
                "category": "Analytics"
            }
        ]
    },
    {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "firstName": "Hassan",
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 2,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Update Documentation",
                "description": "Update user manuals with the latest changes.",
                "date": "2024-10-19",
                "category": "Documentation"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Training Session",
                "description": "Attend training for the new software tool.",
                "date": "2024-10-11",
                "category": "Training"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Bug Fixing",
                "description": "Resolve system errors identified during testing.",
                "date": "2024-10-14",
                "category": "Development"
            }
        ]
    },
    {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "firstName": "Zainab",
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Social Media Campaign",
                "description": "Launch a campaign for the new product.",
                "date": "2024-10-18",
                "category": "Marketing"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Market Research",
                "description": "Gather data on industry trends.",
                "date": "2024-10-15",
                "category": "Research"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "title": "Client Proposal",
                "description": "Send proposal to prospective client.",
                "date": "2024-10-12",
                "category": "Client Relations"
            }
        ]
    }
];


  const admin = {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }

    export const setLocalStorage = ()=> {
        localStorage.setItem('employees', JSON.stringify(employees))
        localStorage.setItem('admin', JSON.stringify(admin))
    }
    export const getLocalStorage = ()=> {
        const employees = JSON.parse(localStorage.getItem('employees'))
        const admin = JSON.parse(localStorage.getItem('admin'))
        return {employees, admin}
    }
  