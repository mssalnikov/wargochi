const EosApi = require('eosjs-api')

const eos = new EosApi({
    httpEndpoint: 'http://jungle2.cryptolions.io'
})

const createApi = app => {
    app.get('/dgoods/accounts', async (req, res) => {
        // todo process more: true. idk how it works, never encountered one
        try {
            const result = await eos.getTableRows(true, 'kerzuldare12', 'kerzuldare12', 'dgood')
            const accounts = [...new Set(result.rows.map(e => e.owner)) ]
            return res.status(200).end(JSON.stringify(accounts))
        } catch (e) {
            console.log(e)
            return res.status(500).end(e)
        }
    })

    app.get('/dgoods/show', async (req, res) => {
        // todo we can make less requests, since it's the same to blockchain as above, but for demonstration purposes let it be like this
        try {
            const result = await eos.getTableRows(true, 'kerzuldare12', 'kerzuldare12', 'dgood')
            const owned = result.rows.filter(r => r.owner == req.query.account)
            return res.status(200).end(JSON.stringify(owned))
        } catch (e) {
            console.log(e)
            return res.status(500).end(e)
        }
    })
}

module.exports = {
    createApi
}