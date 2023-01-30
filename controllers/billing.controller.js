
const { addBillingService, getBillingService, updateBillingService, deleteBillingService } = require("../Services/billing.service");


exports.addBilling = async (req, res) => {
    try {
        const billing = await addBillingService(req.body);

        res.status(200).json({
            result: billing,
            status: "success",
            message: "post is Successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "fail",
            error,
        });
    }
};


exports.getBilling = async (req, res) => {



    try {
        const queries = {};

        if (req.query.page) {
            const { page = 1, limit = 10 } = req.query;
            const skip = (page - 1) * parseInt(limit);
            queries.skip = skip;
            queries.limit = parseInt(limit);
        }

        const billing = await getBillingService(queries);

        res.status(200).json({
            result: billing,
            status: "success",
            message: "Get billing list is Successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error,
        });
    }
};
exports.updateBilling = async (req, res) => {
    try {
        const billing = await updateBillingService(req.params.id, req.body);

        res.status(200).json({
            result: billing,
            status: "success",
            message: "Update billing is Successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error,
        });
    }
};
exports.deleteBilling = async (req, res) => {


    try {
        const billing = await deleteBillingService(req.params.id);

        res.status(200).json({
            result: billing,
            status: "success",
            message: "Delete billing is Successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error,
        });
    }
};