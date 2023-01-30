const Billing = require("../models/billing _module");




exports.addBillingService = async (billingData) => {
    const billing = await Billing.create(billingData);
    return billing;
};

exports.getBillingService = async (queries) => {


    const billing = await Billing.find({})
        .skip(queries.skip)
        .limit(queries.limit)
        .sort('createdAt');


    const total = await Billing.countDocuments();
    const page = Math.ceil(total / queries.limit);
    return { total, page, billing };


};

exports.updateBillingService = async (id, data) => {

    const billing = await Billing.findByIdAndUpdate(
        { _id: id },
        data,
        {
            runValidators: true,
        }
    );
    return billing;
};


exports.deleteBillingService = async (id) => {

    const billing = await Billing.deleteOne({ _id: id });
    return billing;
};
