const express = require("express");
    const PORT = process.env.PORT || 3010;
    const app = express();

    app.listen(PORT, () => {
    console.log('Server listening on ${PORT}');
    });

    const session = require('express-session');

    app.use(
        session({
            secret: 'secret string',
            reasve: false,
            saveUninitialized: false,
            cookie: {/* can add cookie related info here */}
        })
    )

    app.get('/', function(req,res){
        if(!req.session.pageCountByCurrentUserOrAnyNameYouWant)
            req.session.pageCountByCurrentUserOrAnyNameYouWant = 0;
        req.session.pageCountByCurrentUserOrAnyNameYouWant++;
        res.send({
            pageCount: req.session.pageCountByCurrentUserOrAnyNameYouWant
        });
    });