//***********************************All variable declarations***************************************
let sidebarElementParent = ""

//List of all tasks
let tasks = []
let taskNumber = 0
let elementNumber



//All the images with their classes
let classImages = new Map([
    ["Tasks", { c1: "fa-solid", c2: "fa-clipboard-list" }],
    ["Default", { c1: "fa-solid", c2: "fa-bars" }],
    ["Today", { c1: "fa-solid", c2: "fa-calendar-week" }],
    ["Tomorrow", { c1: "fa-solid", c2: "fa-calendar-week" }],
    ["Next Week", { c1: "fa-solid", c2: "fa-calendar-week" }],
    ["Pick a Date", { c1: "fa-solid", c2: "fa-calendar-week" }],
    ["Later Today", { c1: "fa-regular", c2: "fa-clock" }],
    ["TomorrowClock", { c1: "fa-regular", c2: "fa-clock" }],
    ["Pick a Date & Time", { c1: "fa-regular", c2: "fa-clock" }],
    ["Next WeekClock", { c1: "fa-regular", c2: "fa-clock" }],
    ["Daily", { c1: "fa-regular", c2: "fa-calendar-days" }],
    ["Weekdays", { c1: "fa-regular", c2: "fa-calendar-days" }],
    ["Weekly", { c1: "fa-solid", c2: "fa-calendar-week" }],
    ["Monthly", { c1: "fa-regular", c2: "fa-calendar" }],
    ["Yearly", { c1: "fa-solid", c2: "fa-calendar-day" }],
    ["Custom", { c1: "fa-regular", c2: "fa-calendar-plus" }],
    ["Remove", { c1: "fa-solid", c2: "fa-xmark" }]
])

//Tasks's type. Object with their name and image
let listTasks = [{ nome: "Tasks", image: "Tasks" }, { nome: "safsafasf", image: "Default" }, { nome: "asfasfasf", image: "Tasks" }
    , { nome: "asfasfasf", image: "Default" }, { nome: "asfasfasf", image: "Default" }, { nome: "asfafa", image: "Tasks" }
]
//List of task's date
let listDateTasks = [{ nome: "Today", image: "Today" }, { nome: "Tomorrow", image: "Tomorrow" }, { nome: "Next Week", image: "Next Week" },
{ nome: "Pick a Date", image: "Pick a Date" }
]
//List of task's clock
let listClockTasks = [{ nome: "Later Today", image: "Later Today" }, { nome: "Tomorrow", image: "TomorrowClock" }, { nome: "Next Week", image: "Next WeekClock" },
{ nome: "Pick a Date & Time", image: "Pick a Date & Time" }]

// list of task's cycle
let cycleTasks = [{ nome: "Daily", image: "Daily" }, { nome: "Weekdays", image: "Weekdays" }, { nome: "Weekly", image: "Weekly" },
{ nome: "Monthly", image: "Monthly" }, { nome: "Yearly", image: "Yearly" }, { nome: "Custom", image: "Custom" },
]

