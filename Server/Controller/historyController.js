const historyModel = require("../models/history.model");


exports.addHistory = async (req, res) => {
    const { userId } = req.user;
    const { search } = req.body;

    try {
        let history = await historyModel.findOne({ userId });
        if (!history) {
            history = new History({ userId });
        }

        if (history.searches.includes(search)) {
            history.searches = history.searches.filter((item) => item !== search);
        }
        
        history.searches.unshift(search);
        if (history.searches.length > 5) {
            history.searches.pop();
        }

        await history.save();
        res.status(201).json(history);
    } catch (error) {
        res.status(500).json({ message: 'Error adding history', error });
    }
};

exports.getHistory = async (req, res) => {
    const { userId } = req.user;

    try {
        const history = await History.findOne({ userId });
        res.json(history ? history.searches : []);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching history', error });
    }
};
