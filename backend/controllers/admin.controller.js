const getDashboardStats = (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}

const getAllUsers = (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}

const banUser = (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}

const getPendingServices = (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}

const verifyService = (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}

export { getDashboardStats, getAllUsers, banUser, getPendingServices, verifyService }