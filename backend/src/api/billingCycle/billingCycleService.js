const billingCycle = require('./billingCycle')
const BillingCycle = require('./billingCycle')
const errorHandler = require('../common/errorHandler')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({new: true, runValidators: true})
BillingCycle.after('post', errorHandler).after('put', errorHandler)


BillingCycle.route('get', (req, res, next) => {
    BillingCycle.find({}, (error, value) => {
        if (!error) {
            res.json(value)
        } else {
            res.status(500).json({ erros: [error] })
        }
    })
})

BillingCycle.route('count', (req, res, next) => {
    BillingCycle.count((error, value) => {
        if (!error) {
            res.json(value)
        } else {
            res.status(500).json({ erros: [error] })
        }
    })   
})

// Agragation pipeline
// command project represent the data that you want extract
// project is used to make some operations in datas
// group by is a function to make some agrupaments in data
// https://docs.mongodb.com/manual/reference/operator/aggregation/project/
BillingCycle.route('summary', (req, res, next) => {
    BillingCycle.aggregate([{ 
        $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}} 
    }, { 
        $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}
    }, { 
        $project: {_id: 0, credit: 1, debt: 1}
    }], (error, result) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json(result[0] || {credit: 0, debt: 0})
        }
    })
})

module.exports = BillingCycle