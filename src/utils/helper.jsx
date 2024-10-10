
export const getPriorityIcon = (priority) => {
    switch (priority) {
        case "No priority": return <img src="/Images/3dotmenu.svg" alt="More Options" />;
        case "Low": return <img src="/Images/ImgLowPriority.svg" alt="ImgLowPriority" />;
        case "Medium": return <img src="/Images/ImgMediumPriority.svg" alt="ImgMediumPriority" />;
        case "High": return <img src="/Images/ImgHighPriority.svg" alt="ImgHighPriority" />;
        case "Urgent": return <img src="/Images/UrgentPrioritycolour.svg" alt="UrgentPrioritycolour" />;
        default: return <img src="/Images/UrgentPrioritygrey.svg" alt="UrgentPrioritygrey" />;
}
}

export const getStatusIcon = (priority) => {
    switch (priority) {
        case "Backlog": return <img src="/Images/Backlog.svg" alt="Backlog"/>;
        case "Todo": return <img src="/Images/To-do.svg" alt="To-do" />;
        case "Done": return <img src="/Images/Done.svg" alt="Done" />;
        case "In progress": return <img src="/Images/in-progress.svg" alt="in-progress" />;
        case "Cancelled": return <img src="/Images/Cancelled.svg" alt="Cancelled" />;
        default: return <img src="/Images/Cancelled.svg" alt="Cancelled" />;
    }
}
