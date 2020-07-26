const router = require('express').Router();
const bodyParser = require('body-parser');
const userCollection = require('../Schema/userSchema')

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// default router
router.get(
    '/',
    function (req, res) {
        console.log(req)
        return res.json({
            message: "User Router is working..."
        })
    });


// Read all Users
router.get("/all", function (req, res) {
    console.log(req)
    userCollection.find({},
        function (error, response) {
            if (error) {
                res.json({
                    message: "cannot read",
                    error: error
                })
            } return res.json({
                message: "Read Operation Successfull...",
                response: response
            })
        })
})


// Read User by ID
router.get("/:id", function (req, res) {
    userCollection.find({ _id: req.params.id },
        function (error, response) {
            if (error) {
                res.json({
                    message: "cannot read",
                    error: error
                })
            } return res.json({
                message: "Read by ID successfull....",
                response: response
            })
        })
})

// Add User 
router.post('/add', function (req, res) {
    userCollection.create({
        fistName: req.body.fistName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber
    },
        function (error, response) {
            if (error) {
                res.json({
                    status: false,
                    message: 'Error',
                    error: error
                })
            }
            return res.json({
                status: true,
                message: "Post Successful...",
                result: response
            })
        }
    )

})


// Delete User
router.delete('/delete',
    function (req, res) {
        console.log(req, "gggggggggggggg")
        // userCollection.remove({ email: req.params.email }, function (error, response) {
        //     if (error) {
        //         res.json({
        //             message: "delete is not success.....",
        //             error: error
        //         })
        //     }
        //     return res.json({
        //         message: "Delete is Successful......",
        //         response: response
        //     })
        // })
    }
)

// Update User 
router.put('/update',
    function (req, res) {
        console.log(req.params, "sdfgdfgsdf")
        if (req.params.email) {
            userCollection.update(
                {
                    email: req.params.email

                },
                function (error, response) {
                    if (error) {
                        res.json({
                            message: "Error in Update Operation",
                            error: error
                        })
                    }
                    return res.json({
                        message: "Update is Successfull.....",
                        response: response
                    })
                }
            )
        } else {
            return res.json({
                message: "Email Not Provided...."
            })
        }
    })



module.exports = router
